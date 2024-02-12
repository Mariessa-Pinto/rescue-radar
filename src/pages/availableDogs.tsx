import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'

export default function AvailableDogs() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Navbar />
        </main>
    )
}
