import { useRef } from "react";
const Answers = (props) => {
    const shuffledAnswers = useRef();

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...props.answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5);
      }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        const isSelected = props.selectedAnswer === answer;
        let classes = "";
        if (props.answerState === "answered" && isSelected) {
          classes = "selected";
        }
        if (
          (props.answerState === "correct" || props.answerState === "wrong") &&
          isSelected
        ) {
          classes = props.answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              className={classes}
              onClick={() => props.handleSelectAnswer(answer)}
              disabled={props.answerState !== ''}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
