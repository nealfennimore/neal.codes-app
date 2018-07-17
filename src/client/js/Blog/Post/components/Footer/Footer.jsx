import React, { PropTypes } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import CodePen from 'client/js/Blog/Post/components/CodePen';
import { PostPropType } from 'client/js/Global/proptypes/post';
import { getCommentID } from 'client/js/Global/selectors/post';

const Footer = ( { post } ) => {
    return (
        <footer>
            <CodePen />
            <ReactDisqusComments
                shortname="neal-codes"
                identifier={getCommentID( post )}
            />
        </footer>
    );
};

Footer.propTypes = {
    post: PostPropType
};


export default Footer;
