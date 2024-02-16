
import React, { useState } from 'react';
import QuizQuestions from '../QuizQuestions';

const QuizContainer: React.FC = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    
    const questions: { label: string; question: string; answers: string[] }[] = [
        {
            label: "Question 1",
            question: "How Active are you??",
            answers: ["Not very active", "I'm very active and love outdoor activities", "I'm moderately active and enjoy occasional exercise"]
        },
        
        {
            label: "Question 2",
            question: "Do You Have Allergies?",
            answers: ["No allergies", "I'm allergic to dogs", "I prefer hypoallergenic breeds"]
        
        }, 
        {
            label: "Question 3",
            question: "What size dog do you prefer?",
            answers: ["Small (under 20 pounds)", "Medium (20-50 pounds)", "Large (over 50 pounds)"]
        
        }, 
        {
            label: "Question 4",
            question: "How much grooming are you willing to do?",
            answers: ["Low maintenance grooming", "Moderate grooming", "High maintenance grooming"]
        
        }, 

        {
            label: "Question 5",
            question: "Do you have children or other pets?",
            answers: ["Children", "Cats", "Dogs", "Other"]
        
        }, 
     
     
    ];

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswers([...selectedAnswers, answer]);
    };

    const handleSubmit = () => {
      // this will be API call to match the breed
    };

    return (
        <>
        <div>
            {questions.map((questionData, index) => (
                <QuizQuestions
                    key={index}
                    label={questionData.label}
                    question={questionData.question}
                    answers={questionData.answers}
                    onAnswerSelect={handleAnswerSelect}
                />
            ))}
         
        </div>
           <button onClick={handleSubmit}>Submit</button>
           </>
    );
}

export default QuizContainer;
