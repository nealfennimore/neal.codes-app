import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { curry } from 'lodash/fp';
import { isInverse } from 'client/js/Global/selectors/ui';

const enhance = connect(
    state =>( {
        isInverse: isInverse( state )
    } )
);

function WithInverseHOC( styles, WrappedComponent ) {
    class WithInverse extends Component {
        static propTypes = {
            className: PropTypes.string,
            isInverse: PropTypes.bool.isRequired
        }

        static defaultProps = {
            className: ''
        }

        styles = styles || {}

        get className() {
            return classnames(
                this.props.className,
                {
                    [this.styles.inverse]: this.props.isInverse
                }
            );
        }

        render() {
            return (
                <WrappedComponent {...this.props} className={this.className} />
            );
        }
    }

    return enhance( WithInverse );

}


export default curry( WithInverseHOC );
