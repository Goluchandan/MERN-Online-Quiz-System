export const userSignUpReducer = (state={}, action) =>{
    switch(action.type)
    {
        case "USER_SIGN_UP_REQUEST" : return{
            loading: true
        }
        case "USER_SIGN_UP_REQUEST_SUCCESS" : return{
            loading: false,
            success: true
        }
        case "USER_SIGN_UP_REQUEST_FAILURE" : return{
            loading: false,
            error: action.payload
        }
        default : return{
            state
        }
    }
}