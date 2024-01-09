import Table, { Order, TableConfig, ColumnConfig } from '@app/components/table/table.component';
import React, { useState } from 'react';

// Mock data
const mockData = [
  { id: '1', name: 'John Doe', age: 25, city: 'New York' },
  { id: '2', name: 'Jane Doe', age: 30, city: 'San Francisco' },
  // Add more data as needed
];

// Example usage of Table component
function App() {
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  const handleRowClick = (data: any) => {
    // Handle row click event
    console.log('Row Clicked:', data);
  };

  const handleItemSelected = (isSelectedAll: boolean, selectedItems: any[]) => {
    // Handle item selection event
    console.log('Selected Items:', selectedItems);
    console.log('Selected isSelectedAll:', isSelectedAll);
    setSelectedItems(selectedItems);
  };

  const tableConfig: TableConfig = {
    columnConfig: [
      { label: 'ID', dataKey: 'id', width: '50px' },
      { label: 'Name', dataKey: 'name', width: '150px' },
      { label: 'Age', dataKey: 'age', width: '100px', hasOrder: true },
      { label: 'City', dataKey: 'city', width: '150px' },
    ],
    dataTable: mockData,
    hasCheckBox: true,
    useArrowTable: true,
    onRowClick: handleRowClick,
    onItemSelected: handleItemSelected,
    onRowClickOrder: (data?: Order) => {
      console.log('Sort Order:', data);
    },
    hasFooter: true,
  };

  return (
    <div>
      <h1>Table Example</h1>
      <Table {...tableConfig} />
      <div>
        <p>Selected Items: {selectedItems.map((item) => item.name).join(', ')}</p>
      </div>
    </div>
  );
}

export default App;
