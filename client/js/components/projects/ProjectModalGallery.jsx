import React, {Component, PropTypes} from 'react';
import styles from './ProjectModalGallery.scss';

export default class ProjectModalGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageIndex: 0,
        };

        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    prev(){
        this.setState(
            Object.assign({}, this.state, {
                imageIndex: Math.min(0, this.state.imageIndex - 1)
            }
        ));
    }

    next(){
        const { project: { images } } = this.props;

        this.setState(
            Object.assign({}, this.state, {
                imageIndex: Math.min(images.length - 1, this.state.imageIndex + 1)
            }
        ));
    }


    render() {
        const { project: {images}} = this.props;
        const { imageIndex } = this.state;
        const activeImage = images[imageIndex];

        return (
            <div className={`${styles.gallery} row`}>
                { imageIndex > 0 ? <button className='column shrink' onClick={this.prev}>prev</button> : null }
                <div className='column'>
                    <img src={activeImage.src} srcSet={activeImage.srcSet}/>
                </div>
                { imageIndex < (images.length - 1) ? <button  className='column shrink' onClick={this.next}>next</button> : null }
            </div>
        );
    }
}

ProjectModalGallery.propTypes = {
    project: PropTypes.object.isRequired
};