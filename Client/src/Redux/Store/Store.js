import {combineReducers} from 'redux'
import { legacy_createStore as createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import { userSignUpReducer } from '../Reducer/SignUpReducer';
import { userLoginReducer } from '../Reducer/LoginReducer';
import { userLogOutReducer } from '../Reducer/LogOutReducer';
import { quizReducer } from '../Reducer/QuizReducer';



const finalReducer = combineReducers({
    userSignUpReducer : userSignUpReducer,
    userLoginReducer : userLoginReducer,
    userLogOutReducer : userLogOutReducer,
    quizReducer : quizReducer,

})


const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null

const initialState = {
    userLoginReducer : {
        currentUserData : currentUser
    }

}

const composeInheritancers = composeWithDevTools({})

const store = createStore(finalReducer, initialState , composeInheritancers(applyMiddleware(thunk)))

export default store