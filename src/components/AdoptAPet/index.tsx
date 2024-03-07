import { useState, useEffect } from 'react';

export default function AdoptAPet() {
  const [dg, setDg] = useState<IAdopt[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [matchedDog, setMatchedDog] = useState<IAdopt | null>(null);

  useEffect(() => {
    const fetchDogs = async (): Promise<void> => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_KEY_TWO;
        const url = `https://api.api-ninjas.com/v1/dogs?min_life_expectancy=1&offset=${offset}`;

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
        setDg((prevDogs) => [...prevDogs, ...result]);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDogs();

  }, [offset]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const findMatchedDog = () => {
 

    const matched = dg.find((dog) => {
      return (
        dog.name === selectedAnswers[0] &&
        dog.max_weight_female === selectedAnswers[1] &&
        dog.max_weight_male === selectedAnswers[2] &&
        dog.shedding === selectedAnswers[3] &&
        dog.energy === selectedAnswers[4] &&
        dog.good_with_other_dogs === selectedAnswers[5] &&
        dog.good_with_children === selectedAnswers[6]
      );
    });

    return matched || null;
  };

  const handleSubmit = () => {
    const matchedDog = findMatchedDog();
    setMatchedDog(matchedDog);
  };
    

  return (
    <div>
      <h1>List of Dogs:</h1>
      {matchedDog ? (
        <div key={matchedDog.id}>
          <p>Dog name: {matchedDog.name}</p>
          <p>Female weight: {matchedDog.max_weight_female}</p>
          <p>Male Weight: {matchedDog.max_weight_male}</p>
          <p>Shedding level: {matchedDog.shedding}</p>
          <p>Energy level: {matchedDog.energy}</p>
          <p>Good with other dogs: {matchedDog.good_with_other_dogs}</p>
          <p>Good with children: {matchedDog.good_with_children}</p>
        </div>
      ) : (
        <p>No matching dog found.</p>
      )}

      <button onClick={() => setOffset((prevOffset) => prevOffset + 20)}>Load More</button>
    </div>
  );
}