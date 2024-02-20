import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import AdoptAPet from '@/components/AdoptAPet'

export default function Results() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Navbar />
            <AdoptAPet/>
        </main>

    )
}
