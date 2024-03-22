import Navbar from '@/components/Navbar'
import AdoptAPet from '@/components/AdoptAPet'
import LargeButton from '@/components/LargeButton'

export default function Results() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between lg:bg-gradient-to-b from-blue to-red`}>
            <Navbar />
            <AdoptAPet />
            <div className={`w-full lg:hidden`}>
                <div className={`flex justify-center mb-neg2 z-10`}>
                    <LargeButton
                        text="View Adoptable Dogs"
                        link='availableDogs'
                    />
                </div>
                <div className={`bg-red rounded-t-xl h-20 flex justify-center w-full`}></div>
            </div>
        </main>
    )
}
