import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { curry } from 'lodash/fp';

const { GOOGLE_ANALYTICS_ID } = process.env;

function GoogleAnalyticsHOC( WrappedComponent ) {
    class GoogleAnalytics extends Component {
        static propTypes = {
            location: PropTypes.shape( {
                pathname: PropTypes.string
            } ).isRequired,
        }

        componentDidMount() {
            ReactGA.initialize( GOOGLE_ANALYTICS_ID );
        }

        componentDidUpdate( prevProps ) {
            if( prevProps.location.pathname !== this.props.location.pathname ) {
                ReactGA.set( { page: window.location.pathname } );
                ReactGA.pageview( window.location.pathname );
            }
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return withRouter( GoogleAnalytics );

}

export default curry( GoogleAnalyticsHOC );
