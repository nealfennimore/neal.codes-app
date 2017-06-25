import { browserHistory as history, match } from 'react-router';
import routes from 'shared/routes';
import handleRender from './renderer';

export default function handleRouting(req, res, next){
    match({
        routes: routes({ history }),
        location: req.url
    }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500).send(err.message);
        } else if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            return handleRender({res, renderProps, next});
        } else {
            if(!renderProps){ console.error(`Render props required. Check to see if request is for an asset: ${req.url}`); }
            res.status(404).send('Not Found');
        }
    });
}
