import { connect } from 'react-redux';

import Table from './table';

const mapStateToProps = (state, ownProps) => {
  return {
    headers: ownProps.headers,
    rows: ownProps.rows,
    path: state.router.location.pathname,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
