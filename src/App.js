import React, { useState } from "react";
import "./index.css";

function App() {
  const questions = [
    {
      question: "In what year did you escape?",
      answer: [
        { answerOption: "1997", city: "NY" },
        { answerOption: "2013", city: "LA" },
      ],
    },
    {
      question: "What caused the root of all the chaos?",
      answer: [
        { answerOption: "An earthquake", city: "LA" },
        { answerOption: "World War 3", city: "NY" },
      ],
    },
    {
      question: "The president tries to stop an invasion from where?",
      answer: [
        { answerOption: "Cuba", city: "LA" },
        { answerOption: "Soviet Union", city: "NY" },
      ],
    },
    {
      question: "Where was an island converted into a prison?",
      answer: [
        { answerOption: "LA", city: "LA" },
        { answerOption: "Manhattan", city: "NY" },
      ],
    },
    {
      question:
        "Warning...SPOILER ALERT: At the end of the movie, the main character, Snake, does what?",
      answer: [
        {
          answerOption: "Puffs a cigarette while going into the darkness",
          city: "NY",
        },
        {
          answerOption: 'Picks a cigarette box labelled "American Spirit"',
          city: "LA",
        },
      ],
    },
    {
      question:
        "What was strewn across the beach?",
      answer: [
        {
          answerOption: "Mussel shells and sadness",
          city: "NY",
        },
        {
          answerOption: "Horseshoe crabs and trash",
          city: "LA",
        },
      ],
    },
    {
      question:
        "Are the people around you kind, or nice?",
      answer: [
        {
          answerOption: "Kind",
          city: "NY",
        },
        {
          answerOption: 'Nice',
          city: "LA",
        },
      ],
    },
  ];

  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [clickedStartQuiz, setClickedStartQuiz] = useState(false);
  let [showScore, setShowScore] = useState(false);
  let [nyScore, setNYScore] = useState(0);
  let [laScore, setLAScore] = useState(0);
  let [width, setWidth] = useState(0);

  const handleAnswerClick = (e, city) => {
    if (width <= 100) {
      setWidth(Math.round(width + 100 / questions.length));
    }

    console.log("CITY", city);
    if (city === "NY") {
      let newScore = nyScore + 1
      setNYScore(newScore);
    }
    if (city === "LA") {
      let newScore = laScore + 1
      setLAScore(newScore);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setClickedStartQuiz(false);
    setShowScore(false);
    setNYScore(0);
    setLAScore(0);
    setWidth(0);
  };

  return (
    <div id="content">
      <header>
        <img
          id="header"
          src="/did_you_escape_ny_la_header.png"
          alt="did you escape ny or la?"
        />
      </header>
      <div className="content">
        {clickedStartQuiz ? (
          showScore ? (
            <div>
              <div>
                {nyScore > laScore ? (
                  <h4>
                    Congrats, you are a survivor! You just escaped from N.Y.!
                  </h4>
                ) : (
                  <h4>
                    Congrats, you are a survivor! You just escaped from L.A.!
                  </h4>
                )}
              </div>
              <button onClick={() => handleRestart()}>Restart Quiz</button>
            </div>
          ) : currentQuestion >= questions.length ? (
            setShowScore(true)
          ) : (
            <div>
              <h3 className="questionText">
                {questions[currentQuestion].question}
              </h3>

              <div>
                {questions[currentQuestion].answer.map(answer => (
                  <button onMouseUp={e => handleAnswerClick(e, answer.city)}>
                    {answer.answerOption}
                  </button>
                ))}
                <div id="progressbar">
                  <div style={{ width }}>{width}%</div>
                </div>
              </div>
            </div>
          )
        ) : (
          <div>
            <h3>Did you escape from New York or Los Angeles?</h3>
            <button onClick={() => setClickedStartQuiz(true)}>
              START QUIZ
            </button>
          </div>
        )}
      </div>
      <footer className="footer">
        <div>© C. Rich Oct 2021 - Take Home Project</div>
      </footer>
    </div>
  );
}

export default App;
