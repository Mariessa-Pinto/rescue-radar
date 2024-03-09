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

    const [showBreeds, setShowBreeds] = useState<boolean>(false);
    const [showAge, setShowAge] = useState<boolean>(false);
    const [showSize, setShowSize] = useState<boolean>(false);
    const [showGender, setShowGender] = useState<boolean>(false);
    const [showGoodWith, setShowGoodWith] = useState<boolean>(false);

    const [searchTerm, setSearchTerm] = useState('');

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

    const filteredBreeds = dogBreeds.filter(breed =>
        breed.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const resetFilters = () => {
        setSelectedBreeds([]);
        setAgeFilters([]);
        setSizeFilters([]);
        setGenderFilters([]);
        setGoodWithChildren(false);
        setGoodWithCats(false);
        setGoodWithDogs(false);
    };

    return (
        <div className={`fixed top-20 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50`}>
            <div className={`bg-white bg-100% w-full overflow-y-scroll pb-28 h-full flex flex-col items-center bg-no-repeat bg-oval bg-filter-bottom`}>
                <button className={`absolute top-2 right-4 text-black font-outfit font-outfit text-h1 font-extrabold`} onClick={onClose}>
                    X
                </button>

                {/** Breeds */}
                <div className={`pt-44 md:pt-64 md:w-10/12 w-11/12`}>
                    <div onClick={() => setShowBreeds(!showBreeds)} className={`cursor-pointer`}>
                        <p className={`font-outfit text-h4 text-white font-medium md:text-th4 lg:text-wh4`}>Select Breeds:</p>
                    </div>
                    {showBreeds && (
                            <div className={`mt-neg2 flex items-end justify-end w-11/12`}>
                            <input
                                type="text"
                                placeholder="Search breed..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className={`border-2 border-blue rounded-xl p-1 pl-3 mb-2 focus:border-blue outline-none`}
                            />
                        </div>
                    )}
                    {showBreeds && (
                        <div className={`max-h-40 overflow-y-auto`}>
                            {filteredBreeds.map((breed) => (
                                <div key={breed} className={`flex items-center`}>
                                    <input
                                        type="checkbox"
                                        id={breed}
                                        value={breed}
                                        checked={selectedBreeds.includes(breed)}
                                        onChange={() => handleCheckboxChange(breed)}
                                        className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                    />
                                    <label htmlFor={breed} className={`ml-2 text-white font-outfit text-p font-light`}>{breed}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    <hr className="my-4 border-white" />
                </div>

                {/** Age */}
                <div className={`w-11/12 md:w-10/12`}>
                    <div onClick={() => setShowAge(!showAge)} className={`cursor-pointer`}>
                        <p className={`font-outfit text-h4 text-white font-medium md:text-th4 lg:text-wh4`}>Select Age:</p>
                    </div>
                    {showAge && (
                        <div>
                            {['baby', 'young', 'adult', 'senior'].map((age) => (
                                <div key={age} className={`flex items-center`}>
                                    <input
                                        type="checkbox"
                                        id={age}
                                        value={age}
                                        checked={ageFilters.includes(age)}
                                        onChange={() => handleAgeCheckboxChange(age)}
                                        className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                    />
                                    <label htmlFor={age} className={`ml-2 text-white font-outfit text-p font-light`}>{age.charAt(0).toUpperCase() + age.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    <hr className="my-4 border-white" />
                </div>

                {/** Size */}
                <div className={`w-11/12 md:w-10/12`}>
                    <div onClick={() => setShowSize(!showSize)} className={`cursor-pointer`}>
                        <p className={`font-outfit text-h4 text-white font-medium md:text-th4 lg:text-wh4`}>Select Size:</p>
                    </div>
                    {showSize && (
                        <div>
                            {['small', 'medium', 'large', 'xlarge'].map((size) => (
                                <div key={size} className={`flex items-center`}>
                                    <input
                                        type="checkbox"
                                        id={size}
                                        value={size}
                                        checked={sizeFilters.includes(size)}
                                        onChange={() => handleSizeCheckboxChange(size)}
                                        className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                    />
                                    <label htmlFor={size} className={`ml-2 text-white font-outfit text-p font-light`}>{size.charAt(0).toUpperCase() + size.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    <hr className="my-4 border-white" />
                </div>

                {/** Gender */}
                <div className={`w-11/12 md:w-10/12`}>
                    <div onClick={() => setShowGender(!showGender)} className={`cursor-pointer`}>
                        <p className={`font-outfit text-h4 text-white font-medium md:text-th4 lg:text-wh4`}>Select Gender:</p>
                    </div>
                    {showGender && (
                        <div>
                            {['male', 'female', 'unknown'].map((gender) => (
                                <div key={gender} className={`flex items-center`}>
                                    <input
                                        type="checkbox"
                                        id={gender}
                                        value={gender}
                                        checked={genderFilters.includes(gender)}
                                        onChange={() => handleGenderCheckboxChange(gender)}
                                        className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                    />
                                    <label htmlFor={gender} className={`ml-2 text-white font-outfit text-p font-light`}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    <hr className="my-4 border-white" />
                </div>

                {/** Good With */}
                <div className={`w-11/12 md:w-10/12`}>
                    <div onClick={() => setShowGoodWith(!showGoodWith)} className={`cursor-pointer`}>
                        <p className={`font-outfit text-h4 text-white font-medium md:text-th4 lg:text-wh4`}>Good With:</p>
                    </div>
                    {showGoodWith && (
                        <div>
                            <div className={`flex items-center`}>
                                <input
                                    type="checkbox"
                                    id="children"
                                    checked={goodWithChildren}
                                    onChange={() => setGoodWithChildren(!goodWithChildren)}
                                    className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                />
                                <label htmlFor="children" className={`ml-2 text-white font-outfit text-p font-light`}>Children</label>
                            </div>
                            <div className={`flex items-center`}>
                                <input
                                    type="checkbox"
                                    id="cats"
                                    checked={goodWithCats}
                                    onChange={() => setGoodWithCats(!goodWithCats)}
                                    className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                />
                                <label htmlFor="cats" className={`ml-2 text-white font-outfit text-p font-light`}>Cats</label>
                            </div>
                            <div className={`flex items-center`}>
                                <input
                                    type="checkbox"
                                    id="dogs"
                                    checked={goodWithDogs}
                                    onChange={() => setGoodWithDogs(!goodWithDogs)}
                                    className={`appearance-none w-4 h-4 border-2 border-white rounded-full checked:bg-white focus:outline-none focus:border-blue-500`}
                                />
                                <label htmlFor="dogs" className={`ml-2 text-white font-outfit text-p font-light`}>Dogs</label>
                            </div>
                        </div>
                    )}
                    <hr className="my-4 border-white" />
                </div>
                <div className={`flex flex-row justify-between w-11/12 md:w-10/12`}>
                    <button onClick={resetFilters} className={`rounded-full border-2 w-44 h-10 font-outfit text-p font-medium bg-white shadow-lg lg:w-96 lg:h-16`}>
                        Reset Filters
                    </button>
                    <button onClick={handleApplyFilters} className={`rounded-full border-2 w-44 h-10 font-outfit text-p font-medium bg-white shadow-lg lg:w-96 lg:h-16`}>
                        Apply Filters
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterDogs;