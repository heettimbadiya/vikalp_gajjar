import { Product } from '@/../../data/products';

interface SpecModel {
  Model: string;
  Size_in?: string;
  Size_mm?: string;
  Size_ft?: string;
  Type?: string;
  MaxFeed_mm?: string | number;
  MaxFeedSize_mm?: number;
  MaxFeed_in?: string | number;
  Power_hp?: string;
  Power_kw?: string;
  Power_HP?: string;
  Power_kW?: string;
  CSSRange_mm?: string;
  CSS_mm?: string;
  Capacity_TPH?: string | number;
  Throughput_TPH?: string;
  RPMRange?: string;
  RPM?: number;
  Lubrication?: string;
  RotorDiameter_mm?: number;
  FeedOpening_mm?: string;
  ScreenType?: string;
  DeckInfo?: string;
  MotorType?: string;
  CycloneØ_mm?: string;
  SlurryPump_in?: string;
  DewateringScreen_mm?: string;
  ScrewLength_m?: string;
  ScrewDiameter_mm?: string;
  Configuration?: string;
  WheelØ_mm?: string;
  NumBuckets?: string;
  highlight?: boolean;
}

interface SpecsTableProps {
  data?: Product;
  specs?: SpecModel[];
}

export default function SpecsTable({ data, specs }: SpecsTableProps) {
  // If specs prop is provided, use it (new format)
  if (specs && specs.length > 0) {
    // Helper function to get the right field value
    const getValue = (spec: SpecModel, primaryField: string, altField?: string) => {
      return spec[primaryField as keyof SpecModel] || (altField ? spec[altField as keyof SpecModel] : '') || '';
    };

    // Dynamic field mapping based on available data
    const getFields = () => {
      const firstSpec = specs[0];
      const fields = [];

      // Always start with Model
      fields.push({ key: 'Model', label: 'Model', sticky: true });

      // Add fields based on what's available in the data
      if (firstSpec.Size_in) fields.push({ key: 'Size_in', label: 'Size (in)' });
      if (firstSpec.Size_mm) fields.push({ key: 'Size_mm', label: 'Size (mm)' });
      if (firstSpec.Size_ft) fields.push({ key: 'Size_ft', label: 'Size (ft)' });
      if (firstSpec.Type) fields.push({ key: 'Type', label: 'Type' });
      if (firstSpec.ScreenType) fields.push({ key: 'ScreenType', label: 'Type' });
      if (firstSpec.FeedOpening_mm) fields.push({ key: 'FeedOpening_mm', label: 'Feed Opening (mm)' });
      if (firstSpec.RotorDiameter_mm) fields.push({ key: 'RotorDiameter_mm', label: 'Rotor Diameter (mm)' });
      if (firstSpec.CycloneØ_mm) fields.push({ key: 'CycloneØ_mm', label: 'Cyclone Ø (mm)' });
      if (firstSpec.SlurryPump_in) fields.push({ key: 'SlurryPump_in', label: 'Slurry Pump (in)' });
      if (firstSpec.DewateringScreen_mm) fields.push({ key: 'DewateringScreen_mm', label: 'Dewatering Screen (mm)' });
      if (firstSpec.ScrewLength_m) fields.push({ key: 'ScrewLength_m', label: 'Screw Length (m)' });
      if (firstSpec.ScrewDiameter_mm) fields.push({ key: 'ScrewDiameter_mm', label: 'Screw Diameter (mm)' });
      if (firstSpec.Configuration) fields.push({ key: 'Configuration', label: 'Configuration' });
      if (firstSpec.WheelØ_mm) fields.push({ key: 'WheelØ_mm', label: 'Wheel Ø (mm)' });
      if (firstSpec.NumBuckets) fields.push({ key: 'NumBuckets', label: 'Number of Buckets' });
      if (firstSpec.MaxFeed_mm || firstSpec.MaxFeedSize_mm) fields.push({ key: 'MaxFeed_mm', label: 'Max Feed Size (mm)' });
      if (firstSpec.MaxFeed_in) fields.push({ key: 'MaxFeed_in', label: 'Max Feed (in)' });
      if (firstSpec.Power_HP || firstSpec.Power_hp) fields.push({ key: 'Power_HP', label: 'Power (HP)' });
      if (firstSpec.Power_kW || firstSpec.Power_kw) fields.push({ key: 'Power_kW', label: 'Power (kW)' });
      if (firstSpec.CSS_mm || firstSpec.CSSRange_mm) fields.push({ key: 'CSS_mm', label: 'CSS Range (mm)' });
      if (firstSpec.Capacity_TPH || firstSpec.Throughput_TPH) fields.push({ key: 'Capacity_TPH', label: 'Throughput (TPH)' });
      if (firstSpec.RPM || firstSpec.RPMRange) fields.push({ key: 'RPM', label: 'RPM' });
      if (firstSpec.DeckInfo) fields.push({ key: 'DeckInfo', label: 'Deck Configuration' });
      if (firstSpec.MotorType) fields.push({ key: 'MotorType', label: 'Motor Type' });
      if (firstSpec.Lubrication) fields.push({ key: 'Lubrication', label: 'Lubrication' });

      return fields;
    };

    const fields = getFields();

    return (
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Desktop */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600 text-white sticky top-0">
              <tr>
                {fields.map(field => (
                  <th 
                    key={field.key} 
                    className={`px-4 py-2 text-left ${field.sticky ? 'sticky left-0 bg-blue-600 z-10' : ''}`}
                  >
                    {field.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr
                  key={s.Model}
                  className={`
                    ${i % 2 ? 'bg-gray-50' : 'bg-white'}
                    hover:bg-gray-100
                    ${s.highlight ? 'border-l-4 border-blue-600 bg-blue-50' : ''}
                  `}
                  data-analytics="specs.row.hover"
                  data-model={s.Model}
                >
                  {fields.map(field => {
                    let value = '';
                    switch (field.key) {
                      case 'Model':
                        value = s.Model;
                        break;
                      case 'MaxFeed_mm':
                        value = String(getValue(s, 'MaxFeedSize_mm', 'MaxFeed_mm'));
                        break;
                      case 'Power_HP':
                        value = String(getValue(s, 'Power_HP', 'Power_hp'));
                        break;
                      case 'Power_kW':
                        value = String(getValue(s, 'Power_kW', 'Power_kw'));
                        break;
                      case 'CSS_mm':
                        value = String(getValue(s, 'CSS_mm', 'CSSRange_mm'));
                        break;
                      case 'Capacity_TPH':
                        value = String(getValue(s, 'Throughput_TPH', 'Capacity_TPH'));
                        break;
                      case 'RPM':
                        value = String(getValue(s, 'RPM', 'RPMRange'));
                        break;
                      default:
                        value = String(s[field.key as keyof SpecModel] || '');
                    }
                    
                    return (
                      <td 
                        key={field.key} 
                        className={`px-4 py-2 ${field.sticky ? 'sticky left-0 bg-inherit font-semibold' : ''}`}
                      >
                        {value}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Mobile */}
        <div className="sm:hidden p-4">
          {specs.map(s => (
            <div
              key={s.Model}
              className={`
                bg-white rounded-lg shadow mb-4 p-4
                ${s.highlight ? 'border-l-4 border-blue-600 bg-blue-50' : ''}
              `}
              data-analytics="specs.mobile.card.expand"
              data-model={s.Model}
            >
              {fields.map(field => {
                let value = '';
                switch (field.key) {
                  case 'Model':
                    value = s.Model;
                    break;
                  case 'MaxFeed_mm':
                    value = String(getValue(s, 'MaxFeedSize_mm', 'MaxFeed_mm'));
                    break;
                  case 'Power_HP':
                    value = String(getValue(s, 'Power_HP', 'Power_hp'));
                    break;
                  case 'Power_kW':
                    value = String(getValue(s, 'Power_kW', 'Power_kw'));
                    break;
                  case 'CSS_mm':
                    value = String(getValue(s, 'CSS_mm', 'CSSRange_mm'));
                    break;
                  case 'Capacity_TPH':
                    value = String(getValue(s, 'Throughput_TPH', 'Capacity_TPH'));
                    break;
                  case 'RPM':
                    value = String(getValue(s, 'RPM', 'RPMRange'));
                    break;
                  default:
                    value = String(s[field.key as keyof SpecModel] || '');
                }

                return value ? (
                  <div key={field.key}>
                    <div className="font-bold mb-1">{field.label}</div>
                    <div className="mb-2">{value}</div>
                  </div>
                ) : null;
              })}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Legacy format for existing products
  if (!data?.spec_models || data.spec_models.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No specifications available for this product.
      </div>
    );
  }

  const headers = Object.keys(data.spec_models[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((header) => (
              <th
                key={header}
                className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900"
              >
                {header.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.spec_models.map((model, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {headers.map((header) => (
                <td
                  key={header}
                  className="border border-gray-300 px-4 py-2 text-gray-700"
                >
                  {model[header] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}