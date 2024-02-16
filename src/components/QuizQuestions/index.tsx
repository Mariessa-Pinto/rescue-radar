import React from 'react';
import Image from 'next/image';


interface QuizQuestionsProps {
    label: string;
    question: string;
    answers: string[];
    onAnswerSelect: (answer: string) => void;
}

const QuizQuestions: React.FC<QuizQuestionsProps> = ({ label, question, answers, onAnswerSelect }) => {
    return (
        <div style={{ backgroundColor: 'white', padding: '40px', marginBottom: '20px', borderRadius:'10px' }}>
            <div className={`text-2xl font-bold`}>{label}</div>
            <div className={`text-1xl font-semibold`}>{question}</div>
            {answers.map((answer, index) => (
                <div key={index} className={`flex flex-row leading-9`} onClick={() => onAnswerSelect(answer)}>
                      {index === 0 && <Image src='/QuizIcons/q1a1.png' alt="icon1" width={24} height={15}  />}
                      {index === 1 && <Image src='/QuizIcons/q3a1.png' alt="icon2" width={24} height={15}  />}
                      {index === 2 && <Image src='/QuizIcons/q3a2.png' alt="icon3" width={24} height={15}  />}
 
                    {answer}
                </div>
            ))}
        </div>
    );
}

export default QuizQuestions;

