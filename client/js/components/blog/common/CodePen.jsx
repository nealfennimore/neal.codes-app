import React, {Component} from 'react';

export default class CodePen extends Component {
    componentDidMount(){
        if(!this.hasScript()){
            this.injectScript();
        }
    }

    hasScript(){
        return typeof window === 'object' && window.__CPEmbed;
    }

    injectScript(){
        const script = document.createElement('script');

        script.async = true;
        script.type  = 'text/javascript';
        script.src   = '//production-assets.codepen.io/assets/embed/ei.js';

        document.head.appendChild(script);
    }
}

CodePen.propTypes = {

};