import React, { PropTypes } from 'react';
import Date from 'components/blog/common/Date';
import Tags from 'components/blog/common/Tags';

const PostRight = ({post}) => {
    const { tags, published_at:publishedAt } = post;
    return (
        <div className="column shrink">
            <Date date={publishedAt} />
            <Tags tags={tags} />
        </div>
    );
};

PostRight.propTypes = {
    post: PropTypes.object.isRequired
};

export default PostRight;