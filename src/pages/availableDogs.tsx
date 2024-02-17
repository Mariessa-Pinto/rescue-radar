import Navbar from '@/components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function AvailableDogs() {

    // Put API data from petfinder in here then fix map below

    //Replace with API data
    const initialDogs = [
        { id: 1, name: 'Buddy', gender: 'Male', age: '2 years', breed: 'Golden Retriever', img: '/list/p1.png' },
        { id: 2, name: 'Daisy', gender: 'Female', age: '1 year', breed: 'Labrador Retriever', img: '/list/p2.png' },
        { id: 3, name: 'Buddy', gender: 'Male', age: '2 years', breed: 'Golden Retriever', img: '/list/p1.png' },
        { id: 4, name: 'Daisy', gender: 'Female', age: '1 year', breed: 'Labrador Retriever', img: '/list/p2.png' },
        { id: 5, name: 'Buddy', gender: 'Male', age: '2 years', breed: 'Golden Retriever', img: '/list/p1.png' },
        { id: 6, name: 'Daisy', gender: 'Female', age: '1 year', breed: 'Labrador Retriever', img: '/list/p2.png' },
        { id: 7, name: 'Buddy', gender: 'Male', age: '2 years', breed: 'Golden Retriever', img: '/list/p1.png' },
        { id: 8, name: 'Daisy', gender: 'Female', age: '1 year', breed: 'Labrador Retriever', img: '/list/p2.png' },
    ];

    const [dogs, setDogs] = useState(initialDogs); // Add typescript
    const [searchQuery, setSearchQuery] = useState(''); // Add typescript

    useEffect(() => {
        const filteredDogs = initialDogs.filter(dog =>
            dog.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setDogs(filteredDogs);
    }, [searchQuery]);

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
            {
                dogs && dogs.map((dog) => {
                    return (
                        //Might not use link later. But if clicked should open full page overlay with the dogs info...
                        <div className={`flex flex-col shadow-lg bg-white rounded-button w-197`}>
                            <Link href={`/${dog.id}`} key={dog.id}>
                                <div className={`flex flex-col `}>
                                    <Image
                                        className={`rounded-tr-button rounded-tl-button`}
                                        src={dog.img}
                                        alt="dog"
                                        height={164}
                                        width={197}
                                    />
                                    <div className={`p-2`}>
                                        <p>{dog.name}</p>
                                        <p>{`${dog.gender}, ${dog.age}, ${dog.breed}`}</p>
                                        <p>🐶</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
            </div>
        </main>
    )
}
