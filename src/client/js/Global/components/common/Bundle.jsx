import React, {Component, PropTypes} from 'react';
import Loader from 'components/global/Loader';

class Bundle extends Component {
    constructor(props, context){
        super(props, context);

        this.state = {
            LoadedComponent: null
        };
    }

    componentWillMount() {
        this.load(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load(props) {
        this.setState({LoadedComponent: null});

        props.load().then(mod => {
            this.setState({
                // handle both es imports and cjs
                LoadedComponent: mod.default ? mod.default : mod
            });
        });
    }

    render() {
        const {LoadedComponent} = this.state;
        return LoadedComponent ? <LoadedComponent {...this.props} /> : <Loader />;
    }
}

Bundle.propTypes = {
    load: PropTypes.func.isRequired
};

export default Bundle;
