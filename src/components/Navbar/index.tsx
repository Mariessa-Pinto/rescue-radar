import Link from "next/link"


export default function Navbar() {
    return (
        <div className={`flex flex-row gap-20`}>
            <Link href={'/'}>Home</Link>
            <Link href={'/quiz'}>Quiz</Link>
            <Link href={'/results'}>Results</Link>
            <Link href={'/whyAdopt'}>Why Adopt</Link>
            <Link href={'/availableDogs'}>AvailableDogs</Link>
            <Link href={'/viewDog'}>View Dog</Link>
        </div>
    )
}