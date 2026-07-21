import { useState } from "react";

import Welcome from "./Quiz/Welcome";
import Round1TrueFalse from "./Quiz/Round1TrueFalse";
import Round2MCQ from "./Quiz/Round2MCQ";
import Round3Timeline from "./Quiz/Round3Timeline";
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
    Round1TrueFalse,
    Round2MCQ,
    Round3Timeline,
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