import React, { useState } from "react";
import "../../components/FAQText/FAQText.css";
import plusBtn from "../../assets/Union.svg";

export function Questions({ questionIndex, question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="questionRow">
        <span className="questionIndex">{questionIndex}</span> 
        <p className="question">{question}</p>
      {showAnswer && <p className="questionAnswer">{answer}</p>}
      <button onClick={toggleAnswer} className={showAnswer ? "answerButton" : "questionButton"}>{showAnswer ? "x" : "+"}</button>
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
        questionIndex:"02",
        question:"How can I find authentic local experiences when traveling?",
        answer:"..."
    },
    {
        questionIndex: "03",
        question: "What should I pack for a long-term trip or backpacking adventure?",
        answer: "..."
    },
    {
        questionIndex: "04",
        question: "What are some strategies for overcoming jet lag when traveling across time zones?",
        answer: "..."
    },
    {
        questionIndex: "05",
        question: "What are the visa requirements for popular tourist destinations?",
        answer: "..."
    }
  ];
  return (
    <div className="questionContainer">
      {questions.map((question,index)=>(
        <Questions
        key = {index}
        questionIndex={question.questionIndex}
        question={question.question}
        answer={question.answer}/>
      ))}
    </div>
  );
}
