import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'
import PetFinder from '@/components/PetFinder'


export default function AvailableDogs() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedDog, setSelectedDog] = useState<IDog | null>(null);

    const handleDogClick = (dog: IDog) => {
        setSelectedDog(dog);
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
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Large</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Puppy</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Small</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base md:block hidden`}>Adult</button>
                    <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base md:block hidden`}>Senior</button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-5 md:w-11/12 lg:w-9-12">
                <PetFinder searchQuery={searchQuery} onDogClick={handleDogClick} />
            </div>
        </main>
    )
}
