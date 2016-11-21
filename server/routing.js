import handleRender from './renderer';
import routes from 'routes';
import { match } from 'react-router';

export default function handleRouting(req, res, next){
    match({
        routes: routes(),
        location: req.url
    }, (err, redirectLocation, renderProps) => {
        if (err) {
            return next(err);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (!renderProps) {
            return next(new Error(`Render props required. Check to see if request is for an asset: ${req.url}`));
        }

        handleRender(res, renderProps);
    });
}