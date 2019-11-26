import React, { Fragment, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default ({ headers, rows }) => {

  const processedHeaders = headers.map((header, index) => {
    return <th width={header.width ? header.width : null} key={index}>
      {header.content}
    </th>
  });

  const Rows = rows.map((rows, index) => {
    return <th key={index}>
      {rows.content}
    </th>
  })

  return <Fragment>
    <Table className={classTable}>
      <thead>
        <tr className=''>
          {processedHeaders}
        </tr>
      </thead>
      <tbody className=''>
        <tr className=''>
          {Rows}
        </tr>
      </tbody>
    </Table>
  </Fragment>
};
