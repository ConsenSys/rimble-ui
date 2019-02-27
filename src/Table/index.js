import React from 'react'
import styled from 'styled-components'

const Table = () => (
  <table>
    <thead>
      <tr>
        <th colSpan='2'>The table header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The table body</td>
        <td>with two columns</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colSpan='2'>The table footer</td>
      </tr>
    </tfoot>
  </table>
)

const StyledTable = styled(Table)`
  &,
  td {
    border: 1px solid #333;
  }
`

Table.displayName = 'Table'

export default Table
