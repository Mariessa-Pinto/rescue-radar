import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'
import PetFinder from '@/components/PetFinder'
import FilterDogs from '@/components/FilterDogs'


export default function AvailableDogs() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedDog, setSelectedDog] = useState<IDog | null>(null);
    const [breedFilter, setBreedFilter] = useState<string>('');
    const [ageFilter, setAgeFilter] = useState<string>('');
    const [sizeFilter, setSizeFilter] = useState<string>('');
    const [genderFilter, setGenderFilter] = useState<string>('');
    const [temperamentFilter, setTemperamentFilter] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState<IFilter | null>(null);

    const handleDogClick = (dog: IDog) => {
        setSelectedDog(dog);
    };

    const applyFilter = (filter: string, value: string) => {
        switch (filter) {
            case 'breed':
                setBreedFilter(value);
                break;
            case 'age':
                setAgeFilter(value.toLowerCase());
                break;
            case 'size':
                setSizeFilter(value.toLowerCase());
                break;
            case 'gender':
                setGenderFilter(value);
                break;
            case 'temperament':
                setTemperamentFilter(value);
                break;
            default:
                break;
        }
    };

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            applyFilter('search', searchQuery);
        }
    };

    const handleFilterClick = (filter: IFilter) => {
        setSelectedFilter(filter);
    };

    return (
        <main className={`bg-contain bg-100% flex min-h-screen flex-col items-center justify-start bg-bone bg-repeat-y`}>
            <Navbar />
            <div className={`lg:bg-listBanner lg:w-full lg:h-384 lg:bg-cover`}>
                <div className='lg:h-full md:flex md:flex-row lg:flex-col lg:justify-center md:items-center md:pb-4'>
                    <div className={`p-5 lg:pb-10 pb-1 w-full md:pb-0 lg:flex lg:justify-center`}>
                        <h1 className={`font-outfit text-h1 font-extrabold lg:text-white`}>Available Dogs</h1>
                    </div>
                    <div className={`pb-4 md:pb-0 md:pt-2`}>
                        <div className={`relative`}>
                            <div className={`absolute left-4 top-3`}>
                                <Image
                                    src={'/list/search.png'}
                                    alt='search icon'
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <input
                                className={`rounded-full border-2 w-96 h-14 border-blue font-outfit text-xl bg-white shadow-lg p-4 ml-1 pl-12`}
                                type="text"
                                placeholder="Search dogs..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`flex flex-row justify-evenly lg:justify-start items-center md:w-11/12 lg:w-9/12 mb-2 md:mb-8 lg:mt-8 lg:mb-4`}>
                <Image
                    src={'/list/filter.svg'}
                    alt='filter icon'
                    width={40}
                    height={40}
                />
                <div className={`flex gap-1 md:gap-2`}>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`} onClick={() => applyFilter('size', 'large')}>Large</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`} onClick={() => applyFilter('age', 'baby')}>Baby</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`} onClick={() => applyFilter('size', 'small')}>Small</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base md:block hidden`} onClick={() => applyFilter('age', 'adult')}>Adult</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base md:block hidden`} onClick={() => applyFilter('age', 'senior')}>Senior</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-5 md:w-11/12 lg:w-9-12">
                <PetFinder
                    key={`${breedFilter}-${ageFilter}-${sizeFilter}-${genderFilter}-${temperamentFilter}`}
                    searchQuery={searchQuery}
                    onDogClick={handleDogClick}
                    breedFilter={breedFilter}
                    ageFilter={ageFilter}
                    sizeFilter={sizeFilter}
                    genderFilter={genderFilter}
                    temperamentFilter={temperamentFilter}
                />
            </div>
            {selectedFilter && <FilterDogs onClose={() => setSelectedFilter(null)} />}
        </main>
    )
}
