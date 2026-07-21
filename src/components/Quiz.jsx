import { useState } from "react";

import Welcome from "./Quiz/Welcome";
import Round1Timeline from "./Quiz/Round1Timeline";
import Round2MCQ from "./Quiz/Round2MCQ";
import Round3TrueFalse from "./Quiz/Round3TrueFalse";
import Round4Matching from "./Quiz/Round4Matching";
import Round5Years from "./Quiz/Round5Years";
import Results from "./Quiz/Results";

export default function Quiz() {
  const [currentRound, setCurrentRound] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  function addPoints(points) {
    setScore((prev) => prev + points);
  }

  function saveAnswer(answer) {
    setAnswers((prev) => [...prev, answer]);
  }

  const rounds = [
    Welcome,
    Round1Timeline,
    Round2MCQ,
    Round3TrueFalse,
    Round4Matching,
    Round5Years,
    Results,
  ];

  const CurrentScreen = rounds[currentRound];

  return (
    <CurrentScreen
      score={score}
      answers={answers}
      addPoints={addPoints}
      saveAnswer={saveAnswer}
      next={() => setCurrentRound((prev) => prev + 1)}
    />
  );
}