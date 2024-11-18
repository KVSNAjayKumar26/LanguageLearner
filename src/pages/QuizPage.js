import React, { useState } from 'react'
import './QuizPage.css';

const QuizPage = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const questions = [
        { question: 'What is "Hello" in Spanish?', answers: ['Hola', 'Bonjour', 'Hallo'], correct: 0 },
        { question: 'What is "Goodbye" in French?', answers: ['Ciao', 'Adiós', 'Au revoir'], correct: 2 },
    ];

    const handleAnswer = (index) => {
        if (index === questions[currentQuestion].correct) setScore(score + 1);
        setCurrentQuestion(currentQuestion + 1)
    };

    return (
        <div className='quiz-page'>
            {currentQuestion < questions.length ? (
                <div>
                    <h3>{questions[currentQuestion].question}</h3>
                    {questions[currentQuestion].answers.map((answer,index) => (
                        <button key={index} onClick={() => handleAnswer(index)}>
                            {answer}
                        </button>
                    ))}
                    </div>
            ) : (
                <h2>Your score: {score}/{questions.length}</h2>
            )}
        </div>
    );
};

export default QuizPage;