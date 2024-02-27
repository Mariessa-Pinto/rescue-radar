import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);

    const toggleOverlay = () => {
        setIsOverlayOpen(!isOverlayOpen);
    };

    return (
        <div data-testid="navbar" className={`flex flex-row h-20 w-screen shadow-lg bg-white items-center justify-end pr-5 block md:hidden`}>
            <div className="cursor-pointer" onClick={toggleOverlay}>
                <Image 
                    src="/nav/menu.svg" 
                    alt="Menu" 
                    width={50}
                    height={20}
                />
            </div>
            {
                isOverlayOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
                        <div className="bg-white p-8 rounded-lg">
                            <button className="absolute top-2 right-2" onClick={toggleOverlay}>
                                <p>X</p>
                            </button>
                            <div className="flex flex-col gap-4">
                                <Link href="/">Home</Link>
                                <Link href="/quiz">Quiz</Link>
                                <Link href="/results">Results</Link>
                                <Link href="/whyAdopt">Why Adopt</Link>
                                <Link href="/availableDogs">Available Dogs</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
