# reactjs-table-component

> table barebone component for react js

[![NPM](https://img.shields.io/npm/v/reactjs-table-component.svg)](https://www.npmjs.com/package/reactjs-table-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save reactjs-table-component
```

## Demo
[Click for Demo](https://ktmcodelabs.github.io/reactjs-table-component/)

## Usage

```jsx
import React, { Component } from 'react'

import Table from 'reactjs-table-component'
import 'reactjs-table-component/dist/index.css'

class Example extends Component {
  render() {
    return <Table />
  }
}
```

## API
| Name               | Type                      | Default                                       | Description                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | ------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| data               | Array *Array of objects*  | Placeholder sample data                       | Actual data to render in grid   `[{id:1,name:'ABC'},{id:2,name:'XYZ'}]`                                                                                                                                                                                                                                                                                                                                |
| columns            | Array or Array of Objects | [] `keys of data object will be uses if null` | Columns to render in table (key should match data object keys) . Key Array `['id','name']`      **OR** Object array for advanced control over table display properties `[{key:'id',label:'Item ID',width: "40", align: "center" },{key:'name',width: "200"},{key:'Amount',width: "100", align:'right}]`  **Object Keys:** `align:left,center,right [Default:left]`  `width: Integer (Width of column)` |
| tableClass         | String                    | table                                         | CSS class name/names separated by space                                                                                                                                                                                                                                                                                                                                                                |
| caption            | String                    | -                                             | Table caption                                                                                                                                                                                                                                                                                                                                                                                          |
| cellClass          | String                    | -                                             | Table cell css class `<td class="cellClass">`                                                                                                                                                                                                                                                                                                                                                          |
| children           | DOM Object                | -                                             | Table body DOM object. Pass customized table body to render with custom layout    `<tr><td>value</td><td>Name<br/>Username</td><td><NewComponent/></td><td><button onClick={(e)=>someFunction(e)}></button></td></tr>`                                                                                                                                                                                 |
| renderChildren     | Boolean                   | false                                         | Render children DOM                                                                                                                                                                                                                                                                                                                                                                                    |
| renderBody         | Boolean                   | true                                          | Render default data grid body                                                                                                                                                                                                                                                                                                                                                                          |
| noHeader           | Boolean                   | true                                          | Show/Hide table header                                                                                                                                                                                                                                                                                                                                                                                 |
| headerCellCallback | Function                  | -                                             | Callback function to handle header cell click              `function(event){ // callback method }`                                                                                                                                                                                                                                                                                                     |
| cellCallback       | Function                  | -                                             | Callback function to handle table body cell click                      `function(event){ // callback method }`                                                                                                                                                                                                                                                                                         |


## License

MIT © [ktmcodelabs](https://github.com/ktmcodelabs)
