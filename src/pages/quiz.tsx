import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import QuizContainer from '@/components/QuizContainer'

export default function Quiz() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`} style={{ background: 'linear-gradient(#1fcbff, #c41c4c)' }}>
            <Navbar />
            <div className={`mt-20`}>
                <h1  className={`text-3xl font-extrabold mb-8`}>Find your perfect match!</h1>
                <QuizContainer/>
            </div>
        </main>
    )
}
