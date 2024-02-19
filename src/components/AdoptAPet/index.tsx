import { useState, useEffect } from 'react';

export default function AdoptAPet() {
  const [dg, setDg] = useState<IAdopt[]>([]);
  const [offset, setOffset] = useState<number>(0);

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
          headers: headers as HeadersInit, // Convert to HeadersInit
        });

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setDg((prevDogs) => [...prevDogs, ...result]);
      } catch (error) {
        console.error('Error:');
      }
    };

    fetchDogs(); // Call the fetchDogs function when the component mounts

  }, [offset]);
    

  return (
    <div>
      <h1>List of Dogs:</h1>

      {dg.map((dog, ind) => (
        <div key={ind}>
          <p>Dog name: {dog.name}</p>
          <p>{dog.max_weight_female}</p>
          <p>{dog.max_weight_male}</p>
          <p>{dog.shedding}</p>
          <p>Energy level: {dog.energy}</p>
          <p>{dog.good_with_other_dogs}</p>
          <p>{dog.good_with_children}</p>
        </div>
      ))}

      <button onClick={() => setOffset((prevOffset) => prevOffset + 20)}>Load More</button>
    </div>
  );
}