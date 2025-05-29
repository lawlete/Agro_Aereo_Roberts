
import React from 'react';

interface SortConfig {
    key: string | null;
    direction: 'ascending' | 'descending';
}

interface DataTableProps {
  items: Record<string, any>[];
  columnOrder: string[];
  formatValueFunction: (value: any) => string;
  formatHeaderFunction: (key: string) => string;
  sortConfig?: SortConfig;
  onRequestSort?: (key: string) => void;
}

export const DataTable: React.FC<DataTableProps> = ({ 
    items, 
    columnOrder, 
    formatValueFunction, 
    formatHeaderFunction,
    sortConfig,
    onRequestSort 
}) => {
  if (!items || items.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-gray-400 italic p-2">No hay datos para mostrar en la tabla.</p>;
  }

  return (
    <div className="overflow-x-auto bg-gray-200 dark:bg-gray-650 rounded-md shadow">
      <table className="min-w-full text-xs text-left text-gray-700 dark:text-gray-300 table-auto">
        <thead className="bg-gray-300 dark:bg-gray-700 sticky top-0 z-10">
          <tr>
            {columnOrder.map(key => (
              <th 
                key={key} 
                scope="col" 
                className={`px-3 py-2 font-medium tracking-wider select-none ${onRequestSort ? 'cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors' : ''}`}
                onClick={() => onRequestSort && onRequestSort(key)}
                aria-sort={sortConfig && sortConfig.key === key ? sortConfig.direction : 'none'}
                tabIndex={onRequestSort ? 0 : undefined}
                onKeyDown={onRequestSort ? (e) => (e.key === 'Enter' || e.key === ' ') && onRequestSort(key) : undefined}
                role="columnheader"
              >
                <div className="flex items-center">
                  {formatHeaderFunction(key)}
                  {sortConfig && sortConfig.key === key && (
                    <span className="ml-1 sort-indicator" aria-hidden="true">
                      {sortConfig.direction === 'ascending' ? '▲' : '▼'}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-gray-100 dark:bg-gray-600 divide-y divide-gray-300 dark:divide-gray-500">
          {items.map((item, index) => (
            <tr key={item.id || index} className="hover:bg-gray-200 dark:hover:bg-gray-550 transition-colors">
              {columnOrder.map(key => (
                <td key={`${item.id || index}-${key}`} className="px-3 py-2 whitespace-nowrap">
                  {formatValueFunction(item[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
