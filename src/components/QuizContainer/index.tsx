
import { useEffect, useState } from 'react';
import QuizQuestions from '../QuizQuestions';
import LargeButton from '../LargeButton';
import { useRouter } from 'next/router';

const QuizContainer = () => {
    const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
    const [matchedDog, setMatchedDog] = useState<IAdopt | null>(null);
    const [allDogs, setAllDogs] = useState<IAdopt[]>([]);
    const router = useRouter();
 

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

  
 
    const scoringFunctions = {
  
      energy: (dog: IAdopt, answer: string) => {
        const energyMap: {
          [key: string]: number;
          "Not very active": number;
          "I'm very active and love outdoor activities": number;
          "I'm moderately active and enjoy occasional exercise": number;
        } = {
          "Not very active": 1,
          "I'm very active and love outdoor activities": 5,
          "I'm moderately active and enjoy occasional exercise": 3,
        };
      
        const energyScore = energyMap[answer as keyof typeof energyMap];
      
        return dog.energy === energyScore ? 1 : 0;
      },
      shedding: (dog: IAdopt, answer: string) => {
        const sheddingMap: {
          [key: string]: number;
          "No allergies": number;
          "I'm allergic to dogs": number;
          "I prefer hypoallergenic breeds": number;
        } = {
          "No allergies": 1,  // Assuming no allergies correspond to lower shedding
          "I'm allergic to dogs": 5,
          "I prefer hypoallergenic breeds": 5,
        };
      
        const sheddingScore = sheddingMap[answer as keyof typeof sheddingMap];
      
        return dog.shedding === sheddingScore ? 1 : 0;
      },
      
      size: (dog: IAdopt, answer: string) => {
        const sizeMap: {
          [key: string]: { min: number; max: number };
        } = {
          "Small (under 20 pounds)": { min: 0, max: 20 },
          "Medium (20-50 pounds)": { min: 20, max: 50 },
          "Large (over 50 pounds)": { min: 50, max: Infinity },
        };
      
        const sizePref = sizeMap[answer as keyof typeof sizeMap];
        if (!sizePref) return 0; // Handle unexpected answer
      
        const dogAvgWeight = (Number(dog.max_weight_female) + Number(dog.max_weight_male)) / 2;
        return dogAvgWeight >= sizePref.min && dogAvgWeight <= sizePref.max ? 1 : 0;
      },

      compatibility: (dog: IAdopt, answer: string) => {
        let score = 0;
        if (answer === "Children" && dog.good_with_children) {
          score += 1;
        }
        if (answer === "Dogs" && dog.good_with_other_dogs) {
          score += 1; 
        }
        return score;
      }
      
      }
      const findMatchedDog = () => {
        let bestMatch = null;
        let highestScore = -1;
      
        allDogs.forEach((dog) => {
          let score = 0;
          selectedAnswers.forEach((answer, index) => {
            const questionData = questions[index];
            if (!questionData) return; // Handle unexpected scenario
      
            const scoringFunction = scoringFunctions[questionData.label.toLowerCase() as keyof typeof scoringFunctions];
            if (!scoringFunction) return; // Handle unexpected scenario
      
            score += scoringFunction(dog, answer);
          });
          console.log(`Score for dog ${dog.name}:`, score);
      
          if (score > highestScore) {
            highestScore = score;
            bestMatch = dog;
          }
        });
        console.log('Highest score:', highestScore);
      
        return bestMatch;
      };

  const handleSubmit = async () => {
    console.log("Submit button clicked");
    const matchedDog = findMatchedDog();
    setMatchedDog(matchedDog);
    console.log("selectedAnswers at submit:", selectedAnswers);
     router.push({
      pathname: '/results',
      query: { answers: JSON.stringify(selectedAnswers) },
    });
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
   
    </>
  );
};

export default QuizContainer;