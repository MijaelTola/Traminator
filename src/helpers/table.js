import React, { Fragment, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Row from './Row';
import { ReactComponent as ArrowIcon } from './arrow_sort.svg';

export default ({headers, rows, orderColumn, initialPinnedRows, changeOrderColumn, changePinnedRows,
                  isPinnedStyle, pinnedRowCheck, unpinnedRowCheck, classTable,
                  titleHeaders, isExpanded, scope, topId
}) => {

  const processedHeaders = headers.map((header, index) => {

    return <th width={header.width ? header.width : null} key={index}
        style={header.style ? {...header.style, position: 'relative' }: {position: 'relative'}}
        className={header.class ? header.class : null}
        onClick={header.isOrderly ? ()=>{
          if ( orderColumn === index+1 ) {
            changeOrderColumn(-orderColumn);
          } else if ( orderColumn === -(index+1) ) {
            changeOrderColumn(0);
          } else {
            changeOrderColumn(index + 1);
          }
        } : null}>
      {header.content}
      { orderColumn === index + 1 ?
        <ArrowIcon  className='arrow-icon arrow-icon-up' /> :
        -orderColumn === index + 1 ? <ArrowIcon className='arrow-icon'/> : null }
    </th>
    }
  );
  const processTitleHeaders = titleHeaders && titleHeaders.map((header, index) =>
    <th
      key={index}
      colSpan={header.colSpan}
      className={header.class}
      style={ header.style ? header.style : {position: 'relative'}}> {header.content} </th>
  );
  const pinnedRows = rows.filter( (row)=>(initialPinnedRows.indexOf(row.id)!==-1) ).map((row)=>{
    if ( isPinnedStyle ) {
      row.columns[0].content = pinnedRowCheck;
    }
    return row;});
  const unpinnedRows = rows.filter( (row)=>(initialPinnedRows.indexOf(row.id)===-1) ).map((row)=>{
    if ( isPinnedStyle ) {
      row.columns[0].content = unpinnedRowCheck;
    }
    return row;});
  const order = (a, b)=>{
    if ( orderColumn === 0 ) return 0;
    const idx = Math.abs(orderColumn)-1;
    if ( typeof a.columns[idx].content === 'string' ) {
      return ( orderColumn < 0 ? 1 : -1 ) * ( a.columns[idx].content.localeCompare(b.columns[idx].content) );
    }
    if ( typeof a.columns[idx].content === 'number' ) {
      return ( orderColumn < 0 ? 1 : -1 ) * ( a.columns[idx].content - b.columns[idx].content );
    }
    if( typeof a.columns[idx].value === 'number') {
      return ( orderColumn < 0 ? 1 : -1 ) * ( a.columns[idx].value - b.columns[idx].value );
    }
    if( typeof a.columns[idx].value === 'string') {
      return ( orderColumn < 0 ? 1 : -1 ) * ( a.columns[idx].value - b.columns[idx].value );
    }
    if ( a.columns[idx].order ) {
      return ( orderColumn < 0 ? 1 : -1 ) * a.columns[idx].order(a.columns[idx].content, b.columns[idx].content);
    }
    return 0;
  };
  pinnedRows.sort((a,b)=>order(a,b));
  unpinnedRows.sort((a,b)=>order(a,b));
  const processedPinnedRows = pinnedRows.map( (row, index) => {
    row.columns[0].onClick = ( () => (
      changePinnedRows( initialPinnedRows.filter(pinned => pinned!==row.id ))
    ));
    return <Row colums= {row.columns} key={'Row'+index} onClick={row.onClick} pinned/>
  });
  const processedUnpinnedRows = unpinnedRows.map( (row, index) => {
    row.columns[0].onClick = ( () => (
      changePinnedRows([...initialPinnedRows, row.id])
    ));
    return <Row colums= {row.columns} key={'Row'+index} onClick={row.onClick}/>
  });

  return <Fragment>
    <Table className={classTable}>
      {
        processTitleHeaders && <tr className="yy-headers">
          {processTitleHeaders}
        </tr>
      }
      <thead>
        <tr className='sports-headers'>
          {processedHeaders}
        </tr>
      </thead>
      <tbody className={!isExpanded?"t-body":""}>
        {processedPinnedRows}
        {processedUnpinnedRows}
      </tbody>
    </Table>
  </Fragment>
};
