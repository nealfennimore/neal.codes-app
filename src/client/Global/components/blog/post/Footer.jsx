import React, { PropTypes } from 'react';
import ReactDisqusThread from 'react-disqus-thread';
import CodePen from 'components/blog/common/CodePen';
import config from 'client/clientConfig';

const Footer = ({post}) => {
    return (
        <footer>
            <CodePen />
            <ReactDisqusThread
                shortname={config.disqus.shortname}
                identifier={String(post.id)}
            />
        </footer>
    );
};

Footer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired
    })
};


export default Footer;
