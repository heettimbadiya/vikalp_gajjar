'use client';

import React from 'react';

interface SpecTableProps {
  spec_models?: Record<string, string | number>[];
}

export default function ProductSpecTable({ spec_models }: SpecTableProps) {
  if (!spec_models || spec_models.length === 0) {
    return <p>No technical specifications available for this product.</p>;
  }

  const headers = Object.keys(spec_models[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200 last:border-r-0">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {spec_models.map((model, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white hover:bg-blue-50' : 'bg-gray-50 hover:bg-blue-50'}>
              {headers.map((header) => (
                <td key={header} className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200 last:border-r-0">
                  {String(model[header])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}