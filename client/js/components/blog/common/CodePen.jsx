import React, {Component} from 'react';

export default class CodePen extends Component {
    componentDidMount(){
        if(this.hasScript()){
            window.__CPEmbed();
        } else {
            this.injectScript();
        }
    }

    hasScript(){
        return typeof window === 'object' && window.__CPEmbed;
    }

    injectScript(){
        if(typeof document !== 'object'){ return; }

        const script = document.createElement('script');

        script.async = true;
        script.type  = 'text/javascript';
        script.src   = '//production-assets.codepen.io/assets/embed/ei.js';

        document.head.appendChild(script);
    }

    render(){
        return null;
    }
}

CodePen.propTypes = {

};
