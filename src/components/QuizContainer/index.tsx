
import React, { useState } from 'react';
import QuizQuestions from '../QuizQuestions';

const QuizContainer: React.FC = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [matchedDog, setMatchedDog] = useState<IAdopt | null>(null);
    
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

    const handleSubmit = async () => {
     try {
        const payload = {
            answers: selectedAnswers,
        };
        const response = await fetch('/api/matchDog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        })
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }
        const matchedDogData = await response.json();
        setMatchedDog(matchedDogData);
     } catch (error) {
        console.error('Error:', error)
     }
    };

    return (
        <>
        <div data-testid="quizCon">
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
           {
            matchedDog && (
                <div>
                     <h2>Your Perfect Match:</h2>
                    {/* Display information about the matched dog */}
                    <p>Dog name: {matchedDog.name}</p>
                    {/* Add other relevant information */}
                </div>
            )
           }
           </>
    );
}

export default QuizContainer;
