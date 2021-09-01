import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 350,
    sortable: false,
  },
  {
    field: 'firstName',
    headerName: 'Contract',
    width: 150,
    sortable: false,
  },
  {
    field: 'lastName',
    headerName: 'Send',
    width: 150,
    sortable: false,
  },
]

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  {
    id: 2,
    lastName: 'Lannister',
    firstName: 'Cersei',
  },
  {
    id: 3,
    lastName: 'Lannister',
    firstName: 'Jaime',
  },
  { id: 4, lastName: 'Stark', firstName: 'Arya' },
  {
    id: 5,
    lastName: 'Targaryen',
    firstName: 'Daenerys',
  },
  {
    id: 6,
    lastName: 'Melisandre',
    firstName: null,
  },
  {
    id: 7,
    lastName: 'Clifford',
    firstName: 'Ferrara',
  },
  {
    id: 8,
    lastName: 'Frances',
    firstName: 'Rossini',
  },
  {
    id: 9,
    lastName: 'Roxie',
    firstName: 'Harvey',
  },
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        // checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
