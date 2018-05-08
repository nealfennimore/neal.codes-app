import hljs from 'highlight.js/lib/highlight';

// Languages
import apache     from 'highlight.js/lib/languages/apache';
import bash       from 'highlight.js/lib/languages/bash';
import css        from 'highlight.js/lib/languages/css';
import handlebars from 'highlight.js/lib/languages/handlebars';
import javascript from 'highlight.js/lib/languages/javascript';
import json       from 'highlight.js/lib/languages/json';
import nginx      from 'highlight.js/lib/languages/nginx';
import php        from 'highlight.js/lib/languages/php';
import ruby       from 'highlight.js/lib/languages/ruby';
import scss       from 'highlight.js/lib/languages/scss';
import xml        from 'highlight.js/lib/languages/xml';

hljs.registerLanguage( 'apache', apache );
hljs.registerLanguage( 'bash', bash );
hljs.registerLanguage( 'css', css );
hljs.registerLanguage( 'handlebars', handlebars );
hljs.registerLanguage( 'javascript', javascript );
hljs.registerLanguage( 'json', json );
hljs.registerLanguage( 'nginx', nginx );
hljs.registerLanguage( 'php', php );
hljs.registerLanguage( 'ruby', ruby );
hljs.registerLanguage( 'scss', scss );
hljs.registerLanguage( 'xml', xml );

export default hljs;
