import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <div className={`sticky top-0 z-50 bg-white shadow-lg`}>
            <div data-testid="navbar" className={`flex flex-row h-20 w-screen shadow-lg bg-white items-center justify-end pr-5 block lg:hidden`}>
                <div className="cursor-pointer" onClick={toggleOverlay}>
                    {
                        isOverlayOpen ? <button className="absolute top-2 right-2" onClick={toggleOverlay}>
                            <p className={`relative right-5 font-outfit text-h1 font-extrabold`}>X</p>
                        </button> : <Image
                            src="/nav/menu.svg"
                            alt="Menu"
                            width={50}
                            height={20}
                        />
                    }
                </div>
                {
                    isOverlayOpen && (
                        <div className="fixed top-20 left-0 w-full h-full flex flex-col items-center md:items-start justify-center bg-white-800 bg-opacity-75 z-50 lg:w-full lg:h-dvh">
                            <div className="bg-white p-8 rounded-lg w-full h-svh bg-navCircle bg-no-repeat bg-bottom md:bg-bottom-md md:bg-200%">
                                <div className="flex flex-col items-center">
                                    <div className='flex flex-col gap-16 ml-10 md:flex-row md:h-44'>
                                        <Link href="/" className={`flex flex-row items-center gap-5`}>
                                            <Image
                                                src={'/nav/home.svg'}
                                                alt="home icon"
                                                width={40}
                                                height={40} />
                                            <h2 className={`font-outfit text-h3 font-semibold`}>Home</h2>
                                        </Link>
                                        <Link href="/quiz" className={`flex flex-row items-center gap-5`}>
                                            <Image
                                                src={'/nav/quiz.svg'}
                                                alt="quiz icon"
                                                width={40}
                                                height={40} />
                                            <h2 className={`font-outfit text-h3 font-semibold`}>Quiz</h2>
                                        </Link>
                                        <Link href='/availableDogs' className={`flex flex-row items-center gap-5 z-20`}>
                                            <Image
                                                src={'/nav/dogs.svg'}
                                                alt="dogs icon"
                                                width={40}
                                                height={40} />
                                            <h2 className={`font-outfit text-h3 font-semibold`}>Available Dogs</h2>
                                        </Link>
                                    </div>
                                </div>
                                <div className={`absolute bottom-0 left-0 z-10`}>
                                    <Image
                                        className={`md:w-626`}
                                        src={'/nav/navDog.png'}
                                        alt='Dog image'
                                        height={350}
                                        width={380}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div data-testid="header" className={`flex flex-row h-20 w-screen shadow-lg bg-white items-center justify-center pl-5 pr-5 hidden lg:flex`}>
                <div className={`w-9/12 flex flex-row items-center justify-between`}>
                    <div className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/header/weblogo.png"
                                alt="Menu"
                                width={200}
                                height={200}
                            />
                        </Link>
                    </div>
                    <div className={`flex flex-row gap-4`}>
                        <Link className={`font-bold`} href="/">Home</Link>
                        <Link className={`font-bold`} href="/quiz">Quiz</Link>
                        <Link className={`font-bold`} href="/availableDogs">Available Dogs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
