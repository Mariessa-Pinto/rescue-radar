import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useState } from 'react'
import PetFinder from '@/components/PetFinder'
import ViewDog from '@/components/ViewDog'

export default function AvailableDogs() {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedDog, setSelectedDog] = useState<IDog | null>(null);

    const handleDogClick = (dog: IDog) => {
        setSelectedDog(dog);
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-start bg-bone`}>
            <Navbar />
            <div className={`p-5 pb-1 w-full`}>
                <h1 className={`font-outfit text-h1 font-extrabold`}>Available Dogs</h1>
            </div>
            <div className={`pb-4`}>
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
                        className={`rounded-full border-2 w-96 h-14 border-blue font-outfit text-xl bg-white shadow-lg p-4 ml-1 pl-12 mb-2`}
                        type="text"
                        placeholder="Search dogs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={`flex flex-row items-center`}>
                    <Image
                        src={'/list/filter.svg'}
                        alt='filter icon'
                        width={40}
                        height={40}
                    />
                    <div className={`flex gap-1`}>
                        <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Large</button>
                        <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Puppy</button>
                        <button className={`rounded-full border w-28 h-7 border-blue font-outfit text-base`}>Small</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
                <PetFinder searchQuery={searchQuery} onDogClick={handleDogClick}/>
            </div>
        </main>
    )
}
