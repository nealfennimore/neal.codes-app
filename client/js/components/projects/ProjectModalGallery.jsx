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
                imageIndex: Math.max(0, this.state.imageIndex - 1)
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
        const { project: {images, title, description}} = this.props;
        const { imageIndex } = this.state;
        const activeImage = images[imageIndex];

        return (
            <div className={`${styles.gallery} row align-middle align-center`}>
                <div className='columns small-11 medium-8'>
                    <div className='row align-middle'>
                        <div className='column small-1 text-center'>
                            { imageIndex > 0 ? <button onClick={this.prev}><i className='icon-left_arrow'></i></button> : null }
                        </div>
                        <div className={`${styles.image} column small-10`}>
                            <img src={activeImage.src} srcSet={activeImage.srcSet}/>
                        </div>
                        <div className='column small-1 text-center'>
                            { imageIndex < (images.length - 1) ? <button onClick={this.next}><i className='icon-right_arrow'></i></button> : null }
                        </div>
                    </div>
                </div>
                <div className='column small-10 medium-4'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

ProjectModalGallery.propTypes = {
    project: PropTypes.object.isRequired
};