import React, { Fragment, useEffect } from 'react';
import { Table } from 'react-bootstrap';

export default ({ headers, rows }) => {

  return <Fragment>
    <Table className="table table-striped table-hover card-text">
      <thead>
          {headers}
      </thead>
      <tbody className=''>
          {rows}
      </tbody>
    </Table>
  </Fragment>
};
