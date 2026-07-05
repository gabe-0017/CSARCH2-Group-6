import { useState } from "react";
import { questions } from "../data/QuizData";

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  function handleAnswer(option) {
    if (showFeedback) return;

    setSelectedAnswer(option);
    setShowFeedback(true);

    if (option === questions[current].answer) {
      setScore((prev) => prev + 1);
    }
  }

  function nextQuestion() {
    if (current + 1 < questions.length) {
      setCurrent((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  }

  function restartQuiz() {
    setCurrent(0);
    setScore(0);
    setFinished(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  }

  if (finished) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
        <h2 className="text-3xl font-bold mb-4">
           Quiz Complete!
        </h2>

        <p className="text-xl mb-6">
          Your Score:{" "}
          <span className="font-bold">
            {score} / {questions.length}
          </span>
        </p>

        <button
          onClick={restartQuiz}
          className="bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold mb-2">
        Philippine Computing Knowledge Challenge
      </h2>

      <p className="text-gray-600 mb-6">
        Question {current + 1} of {questions.length}
      </p>

      <h3 className="text-xl font-semibold mb-6">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option) => {
          let buttonStyle =
            "w-full p-3 border rounded-lg text-left transition ";

          if (showFeedback) {
            if (option === question.answer) {
              buttonStyle +=
                "bg-green-100 border-green-500";
            } else if (option === selectedAnswer) {
              buttonStyle +=
                "bg-red-100 border-red-500";
            } else {
              buttonStyle +=
                "bg-gray-100 border-gray-300";
            }
          } else {
            buttonStyle +=
              "hover:bg-cyan-100 border-gray-300";
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              className={buttonStyle}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showFeedback && (
        <div className="mt-6 p-4 rounded-lg border bg-gray-50">
          {selectedAnswer === question.answer ? (
            <p className="text-green-600 font-bold text-lg">
              Correct!
            </p>
          ) : (
            <p className="text-red-600 font-bold text-lg">
              Incorrect!
            </p>
          )}

          <p className="mt-3 text-gray-700">
            {question.explanation}
          </p>

          <button
            onClick={nextQuestion}
            className="mt-5 bg-cyan-600 text-white px-5 py-2 rounded-lg hover:bg-cyan-700 transition"
          >
            {current === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}