import { UPDATE_MENUS } from "../actions/menus";
import findIndex from 'lodash/findIndex';

export default function pagesReducer(state = [], action) {
	switch (action.type) {
		case UPDATE_MENUS: {
			if (findIndex(state, { id: action.payload.id }) !== -1) return state;
			return [...state, action.payload];
		}
		default: return state;
	}
} 