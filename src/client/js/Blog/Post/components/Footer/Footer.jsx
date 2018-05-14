import React, { PropTypes } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import CodePen from 'client/js/Blog/Post/components/CodePen';
import { PostPropType } from 'client/js/Global/proptypes/post';
import { getID } from 'client/js/Global/selectors/post';

const Footer = ( { post } ) => {
    return (
        <footer>
            <CodePen />
            <ReactDisqusComments
                shortname=""
                identifier={getID( post )}
            />
        </footer>
    );
};

Footer.propTypes = {
    post: PostPropType
};


export default Footer;
