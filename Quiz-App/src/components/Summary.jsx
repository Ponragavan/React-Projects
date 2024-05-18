import completeImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

const Summary = ({ userAnswers }) => {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnwers = userAnswers.filter((answer, index) => {
    return answer === QUESTIONS[index].answers[0];
  });

  const perOfSkipped = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const perOfCorrect = Math.round(
    (correctAnwers.length / userAnswers.length) * 100
  );
  const perOfWrong = 100 - (perOfCorrect + perOfSkipped);
  return (
    <div id="summary">
      <img src={completeImg} alt="Quiz Over" />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{perOfSkipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{perOfCorrect}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{perOfWrong}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let classes = "user-answer";
          if (answer === null) {
            classes += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            classes += " correct";
          } else {
            classes += " wrong";
          }
          return (
            <li key={answer}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={classes}>{answer ?? "Skipped!!"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
export default Summary;
