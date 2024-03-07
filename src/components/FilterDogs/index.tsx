import { useState, useEffect } from 'react';

const FilterDogs = ({ onClose, onApplyFilters }: IFilter) => {
    const apiKey = process.env.NEXT_PUBLIC_KEY;
    const secret = process.env.NEXT_PUBLIC_SECRET;

    const [dogBreeds, setDogBreeds] = useState<string[]>([]);
    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
    const [ageFilters, setAgeFilters] = useState<string[]>([]);
    const [sizeFilters, setSizeFilters] = useState<string[]>([]);
    const [genderFilters, setGenderFilters] = useState<string[]>([]);
    const [goodWithChildren, setGoodWithChildren] = useState<boolean>(false);
    const [goodWithCats, setGoodWithCats] = useState<boolean>(false);
    const [goodWithDogs, setGoodWithDogs] = useState<boolean>(false);

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

    useEffect(() => {
        const fetchDogBreeds = async () => {
            const accessToken = await getToken();
            try {
                const response = await fetch('https://api.petfinder.com/v2/types/dog/breeds', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDogBreeds(data.breeds.map((breed: any) => breed.name));
                } else {
                    console.error('Failed to fetch dog breeds');
                }
            } catch (error) {
                console.error('Error fetching dog breeds:', error);
            }
        };
        fetchDogBreeds();
    }, []);

    //Checkboxes
    const handleCheckboxChange = (breed: string) => {
        if (selectedBreeds.includes(breed)) {
            setSelectedBreeds(selectedBreeds.filter((selected) => selected !== breed));
        } else {
            setSelectedBreeds([...selectedBreeds, breed]);
        }
    };

    const handleAgeCheckboxChange = (age: string) => {
        if (ageFilters.includes(age)) {
            setAgeFilters(ageFilters.filter((selected) => selected !== age));
        } else {
            setAgeFilters([...ageFilters, age]);
        }
    };

    const handleSizeCheckboxChange = (size: string) => {
        if (sizeFilters.includes(size)) {
            setSizeFilters(sizeFilters.filter((selected) => selected !== size));
        } else {
            setSizeFilters([...sizeFilters, size]);
        }
    };

    const handleGenderCheckboxChange = (gender: string) => {
        if (genderFilters.includes(gender)) {
            setGenderFilters(genderFilters.filter((selected) => selected !== gender));
        } else {
            setGenderFilters([...genderFilters, gender]);
        }
    };

    //Apply Filter
    const handleApplyFilters = () => {
        const filters = {
            selectedBreeds,
            selectedAges: ageFilters,
            selectedSizes: sizeFilters,
            selectedGenders: genderFilters,
            goodWithChildren,
            goodWithCats,
            goodWithDogs,
        };
        onApplyFilters(
            filters.selectedBreeds,
            filters.selectedAges,
            filters.selectedSizes,
            filters.selectedGenders,
            filters.goodWithChildren,
            filters.goodWithCats,
            filters.goodWithDogs
        );
        onClose();
    };

    return (
        <div className={`fixed top-20 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50`}>
            <div className={`bg-white w-full h-full flex flex-col items-center p-10 gap-10 bg-no-repeat bg-halfCircle bg-top-right`}>
                <button className={`absolute top-2 right-2 text-white font-outfit font-outfit text-h1 font-extrabold`} onClick={onClose}>
                    X
                </button>
                {/** Breeds */}
                <div className={`max-h-40 overflow-y-auto`}>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Select Breeds:</p>
                    {dogBreeds.map((breed) => (
                        <div key={breed} className={`flex items-center`}>
                            <input
                                type="checkbox"
                                id={breed}
                                value={breed}
                                checked={selectedBreeds.includes(breed)}
                                onChange={() => handleCheckboxChange(breed)}
                            />
                            <label htmlFor={breed} className={`ml-2`}>{breed}</label>
                        </div>
                    ))}
                </div>
                {/** Age */}
                <div>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Select Age:</p>
                    {['baby', 'young', 'adult', 'senior'].map((age) => (
                        <div key={age} className={`flex items-center`}>
                            <input
                                type="checkbox"
                                id={age}
                                value={age}
                                checked={ageFilters.includes(age)}
                                onChange={() => handleAgeCheckboxChange(age)}
                            />
                            <label htmlFor={age} className={`ml-2`}>{age}</label>
                        </div>
                    ))}
                </div>
                {/** Size */}
                <div>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Select Size:</p>
                    {['small', 'medium', 'large', 'xlarge'].map((size) => (
                        <div key={size} className={`flex items-center`}>
                            <input
                                type="checkbox"
                                id={size}
                                value={size}
                                checked={sizeFilters.includes(size)}
                                onChange={() => handleSizeCheckboxChange(size)}
                            />
                            <label htmlFor={size} className={`ml-2`}>{size}</label>
                        </div>
                    ))}
                </div>
                {/** Gender */}
                <div>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Select Gender:</p>
                    {['male', 'female', 'unknown'].map((gender) => (
                        <div key={gender} className={`flex items-center`}>
                            <input
                                type="checkbox"
                                id={gender}
                                value={gender}
                                checked={genderFilters.includes(gender)}
                                onChange={() => handleGenderCheckboxChange(gender)}
                            />
                            <label htmlFor={gender} className={`ml-2`}>{gender}</label>
                        </div>
                    ))}
                </div>
                {/** Good With */}
                <div >
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Good With:</p>
                    <div className={`flex items-center`}>
                        <input
                            type="checkbox"
                            id="children"
                            checked={goodWithChildren}
                            onChange={() => setGoodWithChildren(!goodWithChildren)}
                        />
                        <label htmlFor="children" className={`ml-2`}>Children</label>
                    </div>
                    <div className={`flex items-center`}>
                        <input
                            type="checkbox"
                            id="cats"
                            checked={goodWithCats}
                            onChange={() => setGoodWithCats(!goodWithCats)}
                        />
                        <label htmlFor="cats" className={`ml-2`}>Cats</label>
                    </div>
                    <div className={`flex items-center`}>
                        <input
                            type="checkbox"
                            id="dogs"
                            checked={goodWithDogs}
                            onChange={() => setGoodWithDogs(!goodWithDogs)}
                        />
                        <label htmlFor="dogs" className={`ml-2`}>Dogs</label>
                    </div>
                </div>
                <div className={`flex flex-row`}>
                    <button className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}>
                        Reset Filters
                    </button>
                    <button onClick={handleApplyFilters} className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterDogs;