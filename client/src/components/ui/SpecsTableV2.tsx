import { useState, useEffect } from 'react';
import { Product } from '@/../../data/products';
import { ToggleLeft, ToggleRight } from 'lucide-react';

interface SpecsTableV2Props {
  data: Product;
  showMetric?: boolean;
  capacityGte?: number;
}

export default function SpecsTableV2({ data, showMetric = true, capacityGte }: SpecsTableV2Props) {
  const [isMetric, setIsMetric] = useState(showMetric);
  const [minCapacity, setMinCapacity] = useState(capacityGte || 0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const metricParam = params.get('metric');
    const capacityParam = params.get('capacity_gte');
    
    if (metricParam !== null) {
      setIsMetric(metricParam === 'true');
    }
    if (capacityParam) {
      setMinCapacity(Number(capacityParam));
    }
  }, []);

  const updateURL = (metric: boolean, capacity: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set('metric', metric.toString());
    params.set('capacity_gte', capacity.toString());
    window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
  };

  const handleMetricToggle = () => {
    const newMetric = !isMetric;
    setIsMetric(newMetric);
    updateURL(newMetric, minCapacity);
  };

  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCapacity = Number(e.target.value);
    setMinCapacity(newCapacity);
    updateURL(isMetric, newCapacity);
  };

  const filteredModels = data.spec_models?.filter(model => {
    const capacity = model['Capacity (TPH)'];
    if (typeof capacity === 'string') {
      const numCapacity = parseInt(capacity.split('-')[1] || capacity);
      return numCapacity >= minCapacity;
    }
    return Number(capacity) >= minCapacity;
  }) || [];

  const convertValue = (value: string | number, fromUnit: string, toUnit: string): string => {
    if (typeof value !== 'string') return String(value);
    
    // Simple conversion for common units
    if (fromUnit === 'mm' && toUnit === 'inches') {
      const num = parseFloat(value);
      return (num / 25.4).toFixed(1);
    }
    if (fromUnit === 'kW' && toUnit === 'hp') {
      const num = parseFloat(value);
      return (num * 1.34).toFixed(0);
    }
    return value;
  };

  const getDisplayValue = (value: string | number, key: string): string => {
    const strValue = String(value);
    
    if (!isMetric) {
      if (key.includes('mm') || key.includes('Size')) {
        return convertValue(strValue, 'mm', 'inches');
      }
      if (key.includes('kW')) {
        return convertValue(strValue, 'kW', 'hp');
      }
    }
    
    return strValue;
  };

  if (!filteredModels.length) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center text-gray-500">
          No models match the current filter criteria.
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Technical Specifications</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="capacity-filter" className="text-sm text-gray-600">
              Min Capacity (TPH):
            </label>
            <input
              id="capacity-filter"
              type="number"
              value={minCapacity}
              onChange={handleCapacityChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
              min="0"
            />
          </div>
          <button
            onClick={handleMetricToggle}
            className="flex items-center space-x-2 px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            {isMetric ? (
              <ToggleRight className="w-4 h-4 text-blue-600" />
            ) : (
              <ToggleLeft className="w-4 h-4 text-gray-400" />
            )}
            <span className="text-sm font-medium">
              {isMetric ? 'Metric' : 'Imperial'}
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              {Object.keys(filteredModels[0] || {}).map((key, index) => (
                <th
                  key={key}
                  className={`px-4 py-3 min-w-[120px] text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    index > 2 ? 'hidden sm:table-cell' : ''
                  }`}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredModels.map((model, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {Object.entries(model).map(([key, value], cellIndex) => (
                  <td 
                    key={key} 
                    className={`px-4 py-3 text-sm text-gray-900 ${
                      cellIndex > 2 ? 'hidden sm:table-cell' : ''
                    }`}
                  >
                    {getDisplayValue(value, key)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}