
export const userLoginReducer = (state = {}, action) => {
    switch (action.type){
        case 'USER_LOGIN_REQUEST' : return {
            loading: true,
        }
        case 'USER_LOGIN_REQUEST_SUCCESS' : return {
            loading:false,
            success: true,
            currentUserData: action.payload
        }
        case 'USER_LOGIN_REQUEST_FAILED' : return{
            loading: false,
            error: action.payload
        }
        default : return state
        
    }
}

