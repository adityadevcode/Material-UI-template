import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 55 },
  { id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 35 },
  { id: 12, lastName: 'Roxie', firstName: 'Harvey', age: 60 },
  { id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 62 },
  { id: 14, lastName: 'Roxie', firstName: 'Harvey', age: 63 },
  { id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 95 },
  { id: 16, lastName: 'Roxie', firstName: 'Harvey', age: 85 },
  { id: 17, lastName: 'Roxie', firstName: 'Harvey', age: 6 },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', age: 92 },
  { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 45 },
  { id: 20, lastName: 'Roxie', firstName: 'Harvey', age: 15 },
  { id: 21, lastName: 'Roxie', firstName: 'Harvey', age: 25 },

];

function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />      
    </div>
  );
}






export default Table;