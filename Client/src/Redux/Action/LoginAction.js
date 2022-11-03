import axios from "axios"

export const userLoginAction =  (user) => async dispatch => {
    dispatch({ type : 'USER_LOGIN_REQUEST'})
    try {

        let response = await axios.post('/api/users/login', user)
        console.log(response)
        dispatch({ type : 'USER_LOGIN_REQUEST_SUCCESS', payload : response.data})

        localStorage.setItem('currentUser', JSON.stringify(response.data))

        window.location.href = "/"

    } catch (error) {
        dispatch({ type:"USER_LOGIN_REQUEST_FAILED" , payload: error})
    }
}