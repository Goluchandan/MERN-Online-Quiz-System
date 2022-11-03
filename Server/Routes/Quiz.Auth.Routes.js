const express = require('express')
const router = express.Router()
const quizModel = require('../Models/QuizModel')

router.post('/quiz' , async (req, res) => {
    const {question , option1 , option2 , option3 , option4 , difficulty , correct} = req.body

    try {
        const data = quizModel({
            question : question,
            option1 : option1,
            option2 : option2,
            option3 : option3,
            option4 : option4,
            difficulty : difficulty,
            correct : correct,
        })
        await data.save()
        res.status(201).send("Question Data Send SuccessFully")
    } catch (error) {
        res.send({ "status": "failed", "message": "All fields are required" })
    }
})

module.exports = router;