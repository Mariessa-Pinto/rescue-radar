import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import PetFinder from '@/components/PetFinder'

export default function ViewDog() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Navbar />
            <PetFinder/>
        </main>
    )
}