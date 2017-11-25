import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div> {`Hello React ${JSON.stringify(this.props.location)}`}</div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
    query: PropTypes.shape(),
  }),
};

export default Home;

