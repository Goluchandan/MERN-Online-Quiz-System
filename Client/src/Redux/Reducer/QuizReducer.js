export const quizReducer = (state={}, action) =>{
    switch(action.type)
    {
        case "USER_QUESTION_REQUEST" : return{
            loading: true
        }
        case "USER_QUESTION_REQUEST_SUCCESS" : return{
            loading: false,
            success: true
        }
        case "USER_QUESTION_REQUEST_FAILURE" : return{
            loading: false,
            error: action.payload
        }
        default : return{
            state
        }
    }
}