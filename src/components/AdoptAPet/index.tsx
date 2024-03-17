import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AdoptAPet() {
  const [dg, setDg] = useState<IAdopt[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    const answersQuery = router.query.answers;
    if (typeof answersQuery !== 'string') return;

    const selectedAnswers = JSON.parse(answersQuery);

    const MINIMUM_SCORE = 2;

    const fetchDogs = async () => {
      try {
        const queryParams = new URLSearchParams({
        min_life_expectancy: selectedAnswers.min_life_expectancy || '1',
        });
        let allMatchedDogs: IAdopt[] = [];
        let currentPage = 1;
        const pageSize = 20; 
    
        while (true) {
          const apiUrl = `https://api.api-ninjas.com/v1/dogs?${queryParams}&offset=${pageSize * (currentPage - 1)}`;
    
          const response = await fetch(apiUrl, {
            headers: {
              'X-Api-Key': process.env.NEXT_PUBLIC_KEY_TWO || '',
              'Content-Type': 'application/json',
            },
          });
    
          if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    
          const dogs = await response.json();
          console.log(`Fetched dogs (page ${currentPage}):`, dogs);
    
          if (dogs.length === 0) break; 
    
          allMatchedDogs = [...allMatchedDogs, ...dogs];
          currentPage++;
        }
    

      
  allMatchedDogs.forEach(dog => {
    let score = 0;
 
    if (selectedAnswers.includes('Not very active') && dog.energy === 1) {
      score += 1;
    }
    if (selectedAnswers.includes("I'm very active and love outdoor activities") && dog.energy === 5) {
      score += 1;
    }
    if (selectedAnswers.includes("I'm moderately active and enjoy occasional exercise") && dog.energy === 3) {
      score += 1;
    }
    if (selectedAnswers.includes("No allergies") && dog.shedding === 1) {
      score += 1;
    }
    if (selectedAnswers.includes("I'm allergic to dogs") && dog.shedding === 5) {
      score += 1;
    }
    if (selectedAnswers.includes("I prefer hypoallergenic breeds") && dog.shedding === 5) {
      score += 1;
    }
    if (selectedAnswers.includes("Small (under 20 pounds)") && dog.max_weight_female === 1) {
      score += 1;
    }
    if (selectedAnswers.includes("Small (under 20 pounds)") && dog.max_weight_male === 1) {
      score += 1;
    }
    if (selectedAnswers.includes("Medium (20-50 pounds)") && dog.max_weight_female === 3) {
      score += 1;
    }
    if (selectedAnswers.includes("Medium (20-50 pounds)") && dog.max_weight_male === 3) {
      score += 1;
    }
    if (selectedAnswers.includes("Large (over 50 pounds)") && dog.max_weight_female === 5) {
      score += 1;
    }
    if (selectedAnswers.includes("Children") && dog.good_with_children === 5) {
      score += 1;
    }
    if (selectedAnswers.includes("Dogs") && dog.good_with_other_dogs === 5) {
      score += 1;
    }
 
  
    dog.score = score; 
  });
  

  const matchedDogs = allMatchedDogs.filter(dog => dog.score >= MINIMUM_SCORE)
                                     .sort((a, b) => b.score - a.score);
  

  if (matchedDogs.length > 0) {
   
    setDg(matchedDogs.slice(0, 3)); 
  } else {
    setDg([]);

      }} catch (error) {
        console.error('Error:', error);
      }
    };


    fetchDogs();
  }, [router.isReady, router.query.answers]);

  return (
    <div>
      <h1>Top Matched Dogs:</h1>
      {dg.length > 0 ? (
        dg.map((dog, index) => (
          <div key={index}>
            <p>Dog name: {dog.name}</p>
            <p>Energy: {dog.energy}</p>
            <p>Shedding: {dog.shedding}</p>
            <p>Female Weight: {dog.max_weight_female}</p>
            <p>Male Weight: {dog.max_weight_male}</p>
            <p>Good with Children: {dog.good_with_children}</p>
            <p>Good with Dogs: {dog.good_with_other_dogs}</p>
          
          </div>
        ))
      ) : (
        <p>No matches found based on your criteria.</p>
      )}
    </div>
  );
}