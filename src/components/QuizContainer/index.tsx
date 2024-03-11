
import { useEffect, useState } from 'react';
import QuizQuestions from '../QuizQuestions';
import LargeButton from '../LargeButton';
import { use } from 'chai';

const QuizContainer = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [matchedDog, setMatchedDog] = useState<IAdopt | null>(null);
    const [allDogs, setAllDogs] = useState<IAdopt[]>([]);
 

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
        console.log('Selected Answer:', answer);
        setSelectedAnswers((prevAnswers) => [...prevAnswers, answer]);
    };



   const fetchAllDogs = async () => {
  
    try {
      const apiKey = process.env.NEXT_PUBLIC_KEY_TWO;
      const url = `https://api.api-ninjas.com/v1/dogs?min_life_expectancy=1`;

      const headers = new Headers();
      headers.append('X-Api-Key', apiKey || '');
      headers.append('Content-Type', 'application/json');

      const response = await fetch(url, {
        method: 'GET',
        headers: headers as HeadersInit,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      setAllDogs(result);
    } catch (error) {
      console.error('Error fetching dogs:', error);
    }
  };

  useEffect(() => {
    fetchAllDogs();
  }, []);

  const findMatchedDog = () => {
    const weights: { [key: string]: number } = {
        'Not very active': 1,
        "I'm very active and love outdoor activities": 2,
        "I'm moderately active and enjoy occasional exercise": 3,
       
      };
    
      const initialBestMatch = { dog: null as IAdopt | null, score: 0 };
    
      const matched = allDogs.reduce((bestMatch, dog) => {
        const score =
          weights[selectedAnswers[0]] === dog.energy &&
          weights[selectedAnswers[1]] === dog.max_weight_female &&
          weights[selectedAnswers[2]] === dog.max_weight_male &&
          weights[selectedAnswers[3]] === dog.shedding &&
          weights[selectedAnswers[4]] === dog.good_with_other_dogs &&
          weights[selectedAnswers[5]] === dog.good_with_children;

    
        if (score) {
       
          const newScore = bestMatch.score + 1;
          return { dog, score: newScore };
        }
    
        return bestMatch;
      }, initialBestMatch);
    
      return matched.dog;
    };

  const handleSubmit = () => {
    const matchedDog = findMatchedDog();
    setMatchedDog(matchedDog);
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
            onAnswerSelect={(answer) => handleAnswerSelect(answer)}
            selectedAnswer={selectedAnswers[index] || ''}
          />
        ))}
      </div>
      <LargeButton text="Submit" link='/results' onClick={handleSubmit} />
      {matchedDog && (
        <div>
          <h2>Your Perfect Match:</h2>
          <p>Dog name: {matchedDog.name}</p>
         
          <p>{matchedDog.max_weight_female}</p>
          <p>{matchedDog.max_weight_male}</p>
          <p>{matchedDog.shedding}</p>
          <p>Energy level: {matchedDog.energy}</p>
          <p>{matchedDog.good_with_other_dogs}</p>
          <p>{matchedDog.good_with_children}</p>
          <p></p>
        </div>
      )}
    </>
  );
};

export default QuizContainer;