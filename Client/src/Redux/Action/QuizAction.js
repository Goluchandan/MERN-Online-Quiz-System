import axios from 'axios';
export const quizActions = (quiz) => async dispatch => {
    dispatch({ type:"USER_QUESTION_REQUEST"})

    try{
        let response = await axios.post('/api/quiz', quiz)
        console.log(response)
        dispatch({ type:"USER_QUESTION_REQUEST_SUCCESS" })
    }
    catch(error){
        dispatch({ type:"USER_QUESTION_REQUEST_FAILED" , payload: error})
    }
}