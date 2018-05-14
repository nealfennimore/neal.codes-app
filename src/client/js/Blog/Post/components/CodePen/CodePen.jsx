import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isBrowser } from 'shared/env';

export default class CodePen extends Component {
    static defaultProps = {
        delay: 1000
    };

    static propTypes = {
        delay: PropTypes.number
    };

    timer = null;

    componentDidMount() {
        if( ! isBrowser ) { return; }

        if( this.hasScript() ) {
            this.timer = setTimeout( window.__CPEmbed, this.props.delay );
        } else {
            this.timer = setTimeout( this.injectScript, this.props.delay );
        }
    }

    componentWillUnmount() {
        clearTimeout( this.timer );
    }

    hasScript() {
        return !! window.__CPEmbed;
    }

    injectScript() {
        const script = document.createElement( 'script' );

        script.async = true;
        script.type  = 'text/javascript';
        script.src   = '//production-assets.codepen.io/assets/embed/ei.js';

        document.head.appendChild( script );
    }

    render() {
        return null;
    }
}

