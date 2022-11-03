import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { quizActions } from "../Redux/Action/QuizAction";

const HomePage = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [correct, setCorrect] = useState("");


  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    if (!currentUser) {
      window.location.href = "/signup"
    }
  }, [currentUser]);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (
      question === "" &&
      option1 === "" &&
      option2 === "" &&
      option3 === "" &&
      option4 === "" &&
      correct === ""
    ) {
      alert("Please Fill All Fields");
    } else if (question === "") {
      alert("Please Type your question");
    } else if (option1 === "") {
      alert("Please Type Option1");
    } else if (option2 === "") {
      alert("Please Type Option2");
    } else if (option3 === "") {
      alert("Please Type Option3");
    } else if (option4 === "") {
      alert("Please Type Option4");
    } else if (difficulty === "") {
      alert("Please Select Question difficulty Level");
    } else if (correct === "") {
      alert("Please Type Correct Answer");
    } else {
      const quiz = {
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        difficulty: difficulty,
        correct: correct,
      };
      console.log(quiz);
      dispatch(quizActions(quiz))
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <div>
            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Write Your Own Question <b className="text-red-400">*</b>
              </label>
              <input
                style={{ color: "black" }}
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
                type="text"
                placeholder="Write Your Own Question Here"
                min="0"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap ">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Option 1 <b className="text-red-400">*</b>
                  </label>
                  <input
                    value={option1}
                    onChange={(e) => {
                      setOption1(e.target.value);
                    }}
                    type="text"
                    placeholder="Type Here"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Option 2 <b className="text-red-400">*</b>
                  </label>
                  <input
                    value={option2}
                    onChange={(e) => {
                      setOption2(e.target.value);
                    }}
                    type="text"
                    placeholder="Type Here"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Option 3 <b className="text-red-400">*</b>
                  </label>
                  <input
                    value={option3}
                    onChange={(e) => {
                      setOption3(e.target.value);
                    }}
                    type="text"
                    placeholder="Type Here"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Option 4 <b className="text-red-400">*</b>
                  </label>
                  <input
                    value={option4}
                    onChange={(e) => {
                      setOption4(e.target.value);
                    }}
                    type="text"
                    placeholder="Type Here"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>

            <div className="-mx-3 flex flex-wrap mb-5">
              <div className="w-full px-3 sm:w-1/2">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Select Question Difficulty Level{" "}
                  <b className="text-red-400">*</b>
                </label>
                <div className="flex items-center space-x-6">
                  <select
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    style={{ color: "black" }}
                    value={difficulty}
                    onChange={(e) => {
                      setDifficulty(e.target.value);
                    }}
                  >
                    {[...Array(10).keys()].map((ele, i) => {
                      return (
                        <option
                          style={{ backgroundColor: "floralwhite" }}
                          key={i}
                          value={i + 1}
                        >
                          {i + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <label className="mb-3 block text-base font-medium text-red-600">
                  Correct Answer <b className="text-green-600">*</b>
                </label>
                <input
                  value={correct}
                  onChange={(e) => {
                    setCorrect(e.target.value);
                  }}
                  type="text"
                  placeholder="Write Correct Answer"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
