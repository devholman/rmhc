import React from 'react';
import { connect } from 'param-store';
import LocationError from './LocationError';

class LocationErrorContainer extends React.Component {
  render() {
    const { path } = this.props.currentParams;
    if (path !== 'location-error') {
      return null;
    }

    return <LocationError />;
  }
}

export default connect(LocationErrorContainer, 'path');

LocationErrorContainer.propTypes = {
  currentParams: React.PropTypes.object,
};
