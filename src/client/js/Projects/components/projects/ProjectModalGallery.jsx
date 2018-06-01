import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProjectModalGallery.pcss';

export default class ProjectModalGallery extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            imageIndex: 0,
        };

        this.prev = this.prev.bind( this );
        this.next = this.next.bind( this );
    }

    prev() {
        this.setState(
            Object.assign( {}, this.state, {
                imageIndex: Math.max( 0, this.state.imageIndex - 1 )
            }
            ) );
    }

    next() {
        const { project: { images } } = this.props;

        this.setState(
            Object.assign( {}, this.state, {
                imageIndex: Math.min( images.length - 1, this.state.imageIndex + 1 )
            }
            ) );
    }


    render() {
        const { project: { images, title, description, url } } = this.props;
        const { imageIndex } = this.state;
        const activeImage = images[imageIndex];

        return (
            <div className={styles.gallery}>
                <section className={styles.image}>
                    <button onClick={this.prev} disabled={imageIndex === 0}>
                        <i className='icon-arrow_left' />
                    </button>
                    <img src={activeImage} alt='' />
                    <button onClick={this.next} disabled={imageIndex === images.length - 1}>
                        <i className='icon-arrow_right' />
                    </button>
                </section>
                <section className={styles.description}>
                    <header>
                        <h3>{title}</h3>
                    </header>
                    <p>{description}</p>
                    { url ? <a href={url} rel="noopener noreferrer" target='_blank'>{url}</a> : null }
                </section>
            </div>
        );
    }
}

ProjectModalGallery.propTypes = {
    project: PropTypes.shape( {} ).isRequired
};
