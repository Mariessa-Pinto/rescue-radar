import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'
import Link from 'next/link'


export default function AdoptionForm() {
    return (
        <main className={`flex min-h-screen flex-col items-center overflow-hidden md:justify-between`}>
            <Navbar />
            <RedButton
                text="Send Form"
                link='/formSent'
            />
        </main>
    )
}
