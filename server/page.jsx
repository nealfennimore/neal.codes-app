import serialize from 'serialize-javascript';

export default function page({
    content='',
    initialState={}
}) {
    return `
        <!doctype html>
        <html>
            <head>
                <meta charset="utf-8">
                <title></title>
                <link rel="stylesheet" href="/vendorStyles.css" media="screen" title="Vendor styles" charset="utf-8">
                <link rel="stylesheet" href="/app.css" media="screen" title="App styles" charset="utf-8">
            </head>
            <body>
                <div id="app">${content}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${ serialize(initialState, {isJSON: true}) }
                </script>
                <script src="/vendor.js"></script>
                <script src="/app.js"></script>
            </body>
        </html>
    `;
};