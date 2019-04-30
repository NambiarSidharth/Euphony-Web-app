import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import errorReducer from './errorReducer';
// import PostReducer from './postReducer';
const rootReducer= combineReducers({
    auth:authReducer,
    errors:errorReducer,
    // post:PostReducer
});
export default rootReducer
 