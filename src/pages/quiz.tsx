import Navbar from '@/components/Navbar'
import QuizContainer from '@/components/QuizContainer'


export default function Quiz() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue to-red`}>
            <Navbar />
           
            <div className={`mt-20`} >
                <h1  className={`text-3xl font-extrabold mb-8`}>Find your perfect match!</h1>
                <QuizContainer/>
            </div>
        </main>
    )
}
