import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuizPage = () => {
  const { scamType } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/prevention/quiz/${scamType}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => console.error("Error fetching quiz:", err));
  }, [scamType]);

  const handleSelect = (qIndex, option) => {
    if (selectedAnswers[qIndex] === undefined) {
      setSelectedAnswers((prev) => ({ ...prev, [qIndex]: option }));
    }
  };

  if (!quiz) {
    return <p className="text-center text-lg mt-10">Loading quiz...</p>;
  }

  return (
    <div className="min-h-screen bg-orange-50 px-4 py-10 flex justify-center">
      <div className="max-w-3xl w-full space-y-10 mt-4">
        <h2 className="text-3xl font-extrabold text-center mb-4 gray">
          Quick Quiz: {scamType}
        </h2>

        {quiz.questions.map((q, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-3xl p-6 border border-gray-100 text-center"
          >
            <div className="mb-4 mt-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Q{idx + 1}. {q.question}
              </h3>
            </div>

            <div className="space-y-3 mb-4">
              {q.options.map((opt, i) => {
                const isSelected = selectedAnswers[idx] === opt;
                const isCorrect = q.answer === opt;
                const hasAnswered = selectedAnswers[idx] !== undefined;

                let optionStyle =
                  "bg-white border border-gray-300 text-gray-800 hover:bg-gray-100";
                if (hasAnswered) {
                  if (isCorrect) {
                    optionStyle =
                      "bg-green-100 border-green-500 text-green-800";
                  } else if (isSelected) {
                    optionStyle = "bg-red-100 border-red-500 text-red-800";
                  } else {
                    optionStyle = "bg-white border-gray-200 text-gray-400";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(idx, opt)}
                    disabled={hasAnswered}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left font-medium transition duration-300 ${optionStyle}`}
                  >
                    <div className="w-8 h-8 rounded-full border flex items-center justify-center font-semibold text-sm">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 border-t pt-6 mt-2 mb-4">
          <h4 className="text-xl font-semibold mb-2">Comments</h4>
          <p className="text-gray-500">Comment system coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
