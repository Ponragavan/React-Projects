import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import completeImg from "../assets/quiz-complete.png";
import Question from "./Question";
import Summary from "./Summary";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuesIndex = userAnswers.length;
  const quizOver = activeQuesIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizOver) {
    return <Summary userAnswers={userAnswers} />
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuesIndex}
        index={activeQuesIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
};
export default Quiz;
