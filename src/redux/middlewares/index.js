import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';

import { api } from "./api";
import { userMiddleware } from "./user";
import { menuMiddleware } from "./menus";
import { pagesMiddleware } from "./pages";
import { mediaMiddleware } from "./media";
import { qaMiddleware } from "./questions";
import { clientsMiddleware } from "./clients";
import { projectsMiddleware } from "./projects";
import { isServer } from '../../utilities/helpers';

export default function ({ history, enhancers }) {

    const arr = [
        api,
        createPromise(),
        routerMiddleware(history),
        projectsMiddleware,
        qaMiddleware,
        clientsMiddleware,
        mediaMiddleware,
        pagesMiddleware,
        menuMiddleware,
        userMiddleware,
        thunk,
    ];

    if (process.env.NODE_ENV === 'development' && !isServer) arr.push(createLogger());

    const composedEnhancers = compose(applyMiddleware(...arr.concat(...enhancers)));

    return composedEnhancers;
};