import { requestApi, API_REQUEST, API_REJECTED } from "./../actions/api";
import { serializeData } from "../../utilities/helpers";

// This middleware care only for API calls
export const api = ({ dispatch }) => next => action => {

    if (action.type === API_REQUEST) {
        let { endpoint, events, options = {} } = action.payload.meta;
        let serialized = serializeData(action.payload.data);
        if (serialized) endpoint = endpoint.concat('?', serialized);

        const { method = 'get' } = options;
        delete options['method'];

        return requestApi[method](endpoint, { ...options })
            .then(response => dispatch({ type: events.success, payload: response.data }))
            .catch(error => dispatch({ type: events.error ? events.error : API_REJECTED, payload: error }));
    }

    return next(action);
};