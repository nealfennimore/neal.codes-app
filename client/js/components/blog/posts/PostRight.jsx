import React, { PropTypes } from 'react';
import Tags from 'components/blog/common/Tags';

const PostRight = ({post}) => {
    const { tags } = post;
    return (
        <div className="column shrink">
            <Tags tags={tags} />
        </div>
    );
};

PostRight.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostRight;