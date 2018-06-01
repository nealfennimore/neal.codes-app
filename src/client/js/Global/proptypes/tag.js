import PropTypes from 'prop-types';

export const TagPropType = PropTypes.shape( {
    id: PropTypes.string,
    name: PropTypes.string,
    slug: PropTypes.string,
    description: PropTypes.string,
    feature_image: PropTypes.string,
    visibility: PropTypes.string,
    meta_title: PropTypes.string,
    meta_description: PropTypes.string,
    created_at: PropTypes.string,
    created_by: PropTypes.string,
    updated_at: PropTypes.string,
    updated_by: PropTypes.string,
    parent: PropTypes.string
} );

export const TagsPropType = PropTypes.arrayOf( TagPropType );
