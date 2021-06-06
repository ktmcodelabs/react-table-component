import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const dataPlaceholder = [
  { id: 1, name: 'XYZ Inc', address: 'Street 100', category: 'Service' }
]

export const Table = (props) => {
  const { data, columns, tableClass, caption, cellClass, children, renderChildren, renderBody, noHeader, headerCellCallback, cellCallback } = props
  const [tableData, setTableData] = useState(data?.length > 0 ? data : dataPlaceholder)
  const [tableHeaders, setTableHeaders] = useState(Object.keys(dataPlaceholder[0]).map(i => { return { key: i } }))
  const showBody = useState(renderBody ? renderBody : true)
  const showChildren = useState(renderChildren ? renderChildren : true)
  const showHeader = useState(noHeader ? noHeader : true)

  useEffect(() => {
    if (showHeader)
      if (tableData.length > 0) {
        if (columns?.length > 0) {
          const headerColumns = typeof columns[0] === 'string' ? headerObject(columns) : columns
          const filteredColumns = headerColumns.filter(column => Object.keys(tableData[0]).includes(column.key));
          setTableHeaders(filteredColumns)
        }
        else
          setTableHeaders(getDataKeys(tableData[0]))
      }
  }, [tableData])

  function getDataKeys(row) {
    return Object.keys(row).map(k => {
      return { key: k }
    })
  }

  function headerObject(array) {
    return array.map(a => {
      return { key: a }
    })
  }

  function renderTableHeader() {
    return (<thead>
      <tr>
        {tableHeaders.map((header, index) => {
          return <th key={'thc' + index}
            onClick={(e) => headerCellCallback && headerCellCallback(e)}
            style={headerCellCallback && { cursor: 'pointer' }}
            width={header.width ? header.width : ''}
            align={header.align ? header.align : 'left'}>
              {header && header.label? header.label.toUpperCase():header.key.toUpperCase()}
          </th>
        })}
      </tr>
    </thead>)

  }
  function renderTableData() {
    const headerkeys = tableHeaders.map(i => i.key)
    return tableData.map((row, index) => {
      return <tr key={'tdr' + index}>
        {Object.keys(row).filter(k => headerkeys.includes(k)).map(key => {
          return <td key={'trc' + key}
            onClick={(e) => cellCallback && cellCallback(e)}
            className={`${cellClass ? cellClass : ''}`}
            style={cellCallback && { cursor: 'pointer' }}
            align={tableHeaders.find(k => k.key === key)?.align}>
            {row[key]}
          </td>
        })}
      </tr>
    })
  }

  return <table className={`${styles.react_table} ${tableClass ? tableClass : ''}`} cellPadding="0" cellSpacing="0">
    {caption && <caption>{caption}</caption>}
    {showHeader && renderTableHeader()}
    <tbody>
      {showBody && renderTableData()}
      {showChildren && children}
    </tbody>
  </table>
}