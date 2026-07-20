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
      <div
        className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-2xl border border-slate-700"
        style={{
          background: "linear-gradient(160deg, #1e293b 0%, #1e293b 60%, #1a2f4f 100%)",
        }}
      >
        <h2 className="text-3xl font-bold mb-4 text-white">Quiz Complete!</h2>

        <p className="text-xl mb-6 text-gray-300">
          Your Score:{" "}
          <span className="font-bold" style={{ color: "#FCD116" }}>
            {score} / {questions.length}
          </span>
        </p>

        <button
          onClick={restartQuiz}
          className="px-5 py-2 rounded-lg transition font-semibold"
          style={{ backgroundColor: "#FCD116", color: "#0038A8" }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const question = questions[current];

  return (
    <div
      className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-2xl border border-slate-700"
      style={{
        background: "linear-gradient(160deg, #1e293b 0%, #1e293b 60%, #1a2f4f 100%)",
      }}
    >
      <h3 className="text-xl font-semibold mb-6 text-white">
        {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option) => {
          let buttonStyle =
            "w-full p-3 rounded-lg text-left transition border ";

          if (showFeedback) {
            if (option === question.answer) {
              buttonStyle += "bg-green-900/40 border-green-500 text-green-300";
            } else if (option === selectedAnswer) {
              buttonStyle += "bg-red-900/40 border-red-500 text-red-300";
            } else {
              buttonStyle += "bg-slate-800 border-slate-600 text-gray-400";
            }
          } else {
            buttonStyle += "bg-slate-800 border-slate-600 text-gray-200 hover:border-yellow-400 hover:bg-slate-700";
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

      <p className="text-gray-400 mb-6 mt-6">
        Question {current + 1} of {questions.length}
      </p>

      {showFeedback && (
        <div className="mt-6 p-4 rounded-lg border border-slate-600 bg-slate-800/60">
          {selectedAnswer === question.answer ? (
            <p className="font-bold text-lg" style={{ color: "#4ade80" }}>
              Correct!
            </p>
          ) : (
            <p className="font-bold text-lg" style={{ color: "#f87171" }}>
              Incorrect!
            </p>
          )}

          <p className="mt-3 text-gray-300">{question.explanation}</p>

          <button
            onClick={nextQuestion}
            className="mt-5 px-5 py-2 rounded-lg transition font-semibold"
            style={{ backgroundColor: "#FCD116", color: "#0038A8" }}
          >
            {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}