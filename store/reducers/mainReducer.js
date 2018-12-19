import userReducer from "./userReducer";
import { combineReducers } from "redux";

const appReducer = combineReducers({
	user: userReducer
})

const mainReducer = (state, action) => {
	return appReducer(state, action)
}

export default mainReducer
