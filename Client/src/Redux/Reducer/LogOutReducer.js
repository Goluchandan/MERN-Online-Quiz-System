export const userLogOutReducer = (state = {}, action) => {
    switch(action.type) {
        case 'USER_LOG_OUT_REQUEST': return {
           loading: true,
        }
        case 'USER_LOG_OUT_REQUEST_SUCCESS': return {
            loading:false,
            success: true
        }
        case 'USER_LOG_OUT_REQUEST_FAILED' : return {
            loading:false,
            error: action.payload
        }
        default : return state
    }
}