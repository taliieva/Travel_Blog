import React, { useState } from "react";
import style from "./FAQText.module.css";

export function Questions({ questionIndex, question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div>
      <div className={style.questionRow}>
        <div>
          <p className={style.questionIndex}>{questionIndex}</p>
        </div>

        <div className={style.questionContainer}>
          <p className={style.question}>{question}</p>
          {showAnswer && <p className={style.questionAnswer}>{answer}</p>}
        </div>

        <div>
          <button
            onClick={toggleAnswer}
            className={`${
              showAnswer ? style.answerButton : style.questionButton
            }`}
          >
            {showAnswer ? "x" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function FAQText({ question }) {
  const questions = [
    {
      questionIndex: "01",
      question:
        "What are the best tips for finding budget-friendly travel accommodations?",
      answer:
        "To discover budget-friendly accommodations, consider the following tips: Book in Advance: Reserving your accommodations well in advance often results in better deals. Comparison Sites: Utilize travel comparison websites to find competitive prices from various providers. Off-Peak Travel: Consider traveling during off-peak seasons for reduced rates. Hostels and Guesthouses: These can be more economical than hotels, especially for solo travelers. Rewards Programs: Sign up for loyalty programs to accumulate points and receive discounts. Local Recommendations: Seek advice from locals or fellow travelers for hidden gems that are easy on the wallet.",
    },
    {
      questionIndex: "02",
      question: "How can I find authentic local experiences when traveling?",
      answer: "Answer will be added",
    },
    {
      questionIndex: "03",
      question:
        "What should I pack for a long-term trip or backpacking adventure?",
      answer: "Answer will be added",
    },
    {
      questionIndex: "04",
      question:
        "What are some strategies for overcoming jet lag when traveling across time zones?",
      answer: "Answer will be added",
    },
    {
      questionIndex: "05",
      question:
        "What are the visa requirements for popular tourist destinations?",
      answer: "Answer will be added",
    },
  ];
  return (
    <div className={style.questionMain}>
      {questions.map((question, index) => (
        <Questions
          key={index}
          questionIndex={question.questionIndex}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}
