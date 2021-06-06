import React from 'react'

import { Table } from 'reactjs-table-component'
import 'reactjs-table-component/dist/index.css'

const App = () => {
  function headerCallback(e) {
    console.log(e.target)
    alert('Header Cell Clicked')
  }

  function cellCallback(e) {
    console.log(e.target)
    alert('Table Body Cell Clicked')
  }

  return <Table
    columns={
      [
        { key: 'id', width: "40", align: "center" },
        { key: 'name', width: "300", align: "left" },
        { key: 'address', label:'Full Address', width: '500' }
      ]
    }
    //columns={['id', 'name']}
    caption="All Companies 😄"
    headerCellCallback={headerCallback}
  // cellCallback={cellCallback}
  />
}

export default App
