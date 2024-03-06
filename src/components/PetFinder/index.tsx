import { useState, useEffect } from "react";
import Image from "next/image";
import ViewDog from "../ViewDog";

export default function PetFinder({ searchQuery, onDogClick, breedFilter, ageFilter, sizeFilter, genderFilter, temperamentFilter }: IPetFinderProps) {
  const apiKey = process.env.NEXT_PUBLIC_KEY;
  const secret = process.env.NEXT_PUBLIC_SECRET;
  const [dogs, setDogs] = useState<IDog[]>([]);
  const [selectedDog, setSelectedDog] = useState<IDog | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
}, [searchQuery, breedFilter, ageFilter, sizeFilter, genderFilter, temperamentFilter, page]);

  const fetchData = async () => {
    const accessToken = await getToken();

    let apiUrl = `https://api.petfinder.com/v2/animals?type=dog&page=${page}`;
    if (breedFilter) apiUrl += `&breed=${breedFilter}`;
    if (ageFilter) apiUrl += `&age=${ageFilter}`;
    if (sizeFilter) apiUrl += `&size=${sizeFilter}`;
    if (genderFilter) apiUrl += `&gender=${genderFilter}`;
    if (temperamentFilter) apiUrl += `&temperament=${temperamentFilter}`;
    if (searchQuery) apiUrl += `&q=${encodeURIComponent(searchQuery)}`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();
    if (data && data.animals) {
      const dogList = data.animals
        .filter((animal: { type: string }) => animal.type === "Dog")
        .map((dog: any) => ({
          id: dog.id,
          name: dog.name,
          description: dog.description,
          age: dog.age,
          breed: dog.breeds.primary,
          size: dog.size,
          location: dog.contact.address.city,
          state: dog.contact.address.state,
          gender: dog.gender,
          img: dog.photos.length > 0 ? dog.photos[0].medium : '/list/default-dog-image.jpg',
        }));

      setDogs(prevDogs => [...prevDogs, ...dogList]);
    }
  };

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

  const handleDogClick = (dog: IDog) => {
    setSelectedDog(dog);
  };

  const loadMoreDogs = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div data-testid="petfinder" className={`flex flex-wrap justify-center md:justify-between lg:justify-center items-center gap-2 lg:gap-10 md:w-full`}>
      {
        dogs.map((dog) => {
          return (
            <div
              className={`flex flex-col shadow-lg bg-white rounded-button w-197 md:w-259 lg:w-350 h-64 lg:h-357`}
              key={dog.id}
              onClick={() => handleDogClick(dog)}
            >
              <div className={`flex flex-col `}>
                <Image
                  className={`rounded-tr-button rounded-tl-button h-40 object-cover md:w-60 lg:w-full lg:h-217`}
                  src={dog.img}
                  alt="dog"
                  height={164}
                  width={197}
                />
                <div className={`p-2`}>
                  <p className={`truncate`}>{dog.name}</p>
                  <p className={`truncate`}>{`${dog.gender}, ${dog.age}, ${dog.breed}`}</p>
                  <p>🐶</p>
                </div>
              </div>
            </div>
          )
        })
      }
      {selectedDog && <ViewDog dog={selectedDog} onClose={() => setSelectedDog(null)} />}
      <div className="">
        <button onClick={loadMoreDogs}>Load More</button>
      </div>
    </div>
  );
}

