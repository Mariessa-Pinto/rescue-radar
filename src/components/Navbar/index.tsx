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
            <div data-testid="header" className={`flex flex-row h-20 w-screen shadow-lg bg-white items-center justify-center pl-5 pr-5 hidden lg:flex`}>
                <div className={`w-9/12 flex flex-row items-center justify-between`}>
                    <div className="flex items-center">
                        <Image
                            src="/header/weblogo.png"
                            alt="Menu"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className={`flex flex-row gap-4`}>
                        <Link className={`font-bold`} href="/">Home</Link>
                        <Link className={`font-bold`} href="/quiz">Quiz</Link>
                        <Link className={`font-bold`} href="/whyAdopt">Why Adopt</Link>
                        <Link className={`font-bold`} href="/availableDogs">Available Dogs</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
