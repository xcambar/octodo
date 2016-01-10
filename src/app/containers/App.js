import { connect } from 'react-redux';

import PinMarker from '../components/PinMarker';
import * as pinMarkerActions from '../actions/pin-marker';

function mapStateToProps(state) {
  return { state };
}

const mapDispatchToProps = pinMarkerActions; // { ...counterActions, ...};

export default connect(mapStateToProps, mapDispatchToProps)(PinMarker);
