import { useState, useEffect } from "react";

export default function AdoptAPet() {
  const [dogs, setDogs] = useState<IAdopt[]>([]);

  useEffect(() => {
    const fetchDataTwo = async () => {
      try {
        const response = await fetch("/api/sb");
        const result = await response.json(); // Parse the JSON string into an object

        if (Array.isArray(result)) {
          const dogResults = result.filter((pet: { type: string }) => pet.type === 'dog');
          

          setDogs(dogResults);
        } else {
          console.error('Invalid data format:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataTwo();
  }, []);

  return (
    <>
      <h1>List of Dogs:</h1>
      <ul>
        {dogs.map((dogs, index) => (
         <div key={index}>
            <p>{dogs.breed_name}</p>
            <p>{dogs.weight}</p>
            <p>{dogs.coat}</p>
            <p>{dogs.energy_level}</p>
            <p>{dogs.health_issues}</p>
            <p>{dogs.temperament}</p>
         </div>
        ))}
      </ul>
    </>
  );
}