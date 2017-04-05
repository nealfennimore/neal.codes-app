import serialize from 'serialize-javascript';
import head from './head';
import footer from './footer';

export default function page({
    helmet,
    content='',
    initialState={}
}) {
    return `
        <!doctype html>
        <html ${helmet.htmlAttributes.toString()}>
            ${head({helmet})}
            <body ${helmet.bodyAttributes.toString()}>
                <div id="app">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${ serialize(initialState, {isJSON: true}) }
                </script>
                ${footer}
            </body>
        </html>
    `;
}