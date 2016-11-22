import handleRender from './renderer';
import { browserHistory as history } from 'react-router';
import { match } from 'react-router';
import { Promise } from 'bluebird';
import routes from 'client/routes';

export default function handleRouting(req, res, next){
    match({
        routes: routes({ history }),
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

        handleRender({res, renderProps, next});
    });
}