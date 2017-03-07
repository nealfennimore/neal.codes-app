import React, {Component} from 'react';

const isBrowser = typeof window === 'object';

export default class CodePen extends Component {
    constructor(props){
        super(props);

        this.timer = null;
    }
    
    componentDidMount(){
        if(!isBrowser){ return; }

        if(this.hasScript()){
            this.timer = setTimeout(window.__CPEmbed, 2000);
        } else {
            this.timer = setTimeout(this.injectScript, 2000);
        }
    }

    componentWillUnmount(){ clearTimeout(this.timer); }

    hasScript(){ return !!window.__CPEmbed; }

    injectScript(){
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
