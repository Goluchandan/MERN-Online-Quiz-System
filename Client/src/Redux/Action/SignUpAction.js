import axios from 'axios';
export const userSignUpActions = (user) => async dispatch => {
    dispatch({ type:"USER_SIGN_UP_REQUEST"})

    try{
        let response = await axios.post('/api/users/signup', user)
        console.log(response)
        dispatch({ type:"USER_SIGN_UP_REQUEST_SUCCESS" })
    }
    catch(error){
        dispatch({ type:"USER_SIGN_UP_REQUEST_FAILED" , payload: error})
    }
}