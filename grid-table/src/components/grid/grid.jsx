import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import './styles.scss';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const Grid = () => {
  const gridRef = useRef();
  const [rowData, setRowData] = useState();
 
  const [columnDefs, setColumnDefs] = useState([
    {field: 'make', filter: true},
    {field: 'model', filter: true},
    {field: 'price'}
  ]);
 
  const defaultColDef = useMemo( ()=> ({
      sortable: true
    }));
 
  const cellClickedListener = useCallback( event => {
    console.log('cellClicked', event);
  }, []);
 
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);
 
  return (
    <div className = 'gridContainer'>

      <div className="ag-theme-alpine" style={{width: '100%', height: '100%'}}>
 
        <AgGridReact
            ref={gridRef} 
 
            rowData={rowData} 
 
            columnDefs={columnDefs}
            defaultColDef={defaultColDef} 
 
            animateRows={true} 
            rowSelection='multiple' 
            pagination={true}
            paginationPageSize={10}
            cacheBlockSize={10}
            onCellClicked={cellClickedListener} 
            />
      </div>
    </div>
  );
}

export default Grid;
