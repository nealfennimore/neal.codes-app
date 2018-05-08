import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { curry } from 'lodash/fp';
import { showInverse, hideInverse } from 'client/js/Global/actions/ui';

const enhance = connect(
    null,
    dispatch => ( {
        showInverse: ()=> dispatch( showInverse() ),
        hideInverse: ()=> dispatch( hideInverse() )
    } )
);

function PageInverseHOC( WrappedComponent ) {
    class PageInverse extends Component {
        static propTypes = {
            showInverse: PropTypes.func.isRequired,
            hideInverse: PropTypes.func.isRequired
        }

        componentWillMount() {
            this.props.showInverse();
        }

        componentWillUnmount() {
            this.props.hideInverse();
        }

        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    return enhance( PageInverse );

}

export default curry( PageInverseHOC );
