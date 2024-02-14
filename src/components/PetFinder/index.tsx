import { useState, useEffect } from "react";

export default function PetFinder() {
  const apiKey = process.env.NEXT_PUBLIC_KEY;
  const secret = process.env.NEXT_PUBLIC_SECRET;
  const [dogs, setDogs] = useState<IDog | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = await getToken();

      if (accessToken) {
        const apiUrl = "https://api.petfinder.com/v2/animals?type=dog&page=2";
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const data = await response.json();
        if (data && data.animals) {
          const dogList = data.animals
            .filter((animal: { type: string; }) => animal.type === "Dog")
            .map((dog: { name: any; description: any; age: any; weight: any; gender: any; }) => ({
              name: dog.name,
              description: dog.description,
              age: dog.age,
              weight: dog.weight,
              gender: dog.gender,
            }));

          setDogs(dogList);
        }
      }
    };

    fetchData();
  }, []);

  const getToken = async () => {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${apiKey}&client_secret=${secret}`,
    });

    const data = await response.json();
    return data.access_token;
  };

  return (
   /*<div>
      {dogs.map((dog, index) => (
        <div key={index}>
          <h2>{dog.name}</h2>
          <p>{dog.description}</p>
          <p>Age: {dog.age}</p>
          <p>Weight: {dog.weight}</p>
          <p>Gender: {dog.gender}</p>
          <hr />
        </div>
      ))}
    </div>*/ 
    <>
    </>
  );
}

