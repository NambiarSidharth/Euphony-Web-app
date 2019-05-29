import { combineReducers } from "redux";
import authReducer from './AuthReducer';
import errorReducer from './errorReducer';
import SongReducer from "./SongReducer";
// import PostReducer from './postReducer';
const rootReducer= combineReducers({
    auth:authReducer,
    errors:errorReducer,
    song:SongReducer
});
export default rootReducer
 