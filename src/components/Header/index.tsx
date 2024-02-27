
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <div data-testid="header" className={`flex flex-row h-20 w-screen shadow-lg bg-white items-center justify-between pr-5 hidden md:flex`}>
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
    );
}
