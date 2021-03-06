import { connect } from 'react-redux';

import { createPath } from '../store/actions/map';

import Map from './map';

const mapStateToProps = (state, ownProps) => {
  return {
      routes: state.routes.routesData,
      coordinates: state.routes.coordinates,
      pathId: state.routes.pathId,
      lat: state.map.lat,
      lng: state.map.lng,
      userId: state.map.id,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createPath(coordinates) {
        dispatch(createPath(coordinates));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);