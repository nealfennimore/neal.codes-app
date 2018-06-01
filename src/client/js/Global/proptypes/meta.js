/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const MetaPropType = {
    meta: PropTypes.shape( {
        pagination: PropTypes.shape( {
            page: PropTypes.number,
            limit: PropTypes.number,
            pages: PropTypes.number,
            total: PropTypes.number,
            next: PropTypes.number,
            prev: PropTypes.number,
        } )
    } )
};
