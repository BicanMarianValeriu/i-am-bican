import { UPDATE_PAGES } from "../actions/pages";
import _findIndex from 'lodash/findIndex';

export default function pagesReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_PAGES: {
			if (_findIndex(state, { id: action.payload.id }) !== -1) return state;
			return [...state, action.payload];
		}
		default: return state;
	}
} 