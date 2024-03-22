import Navbar from '@/components/Navbar'
import QuizContainer from '@/components/QuizContainer'

export default function Quiz() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue to-red`}>
            <Navbar />
            <div className={`mt-10 md:w-full flex flex-col items-center md:justify-start`} >
                <div className={`w-11/12 md:w-9/12 md:mb-5 lg:bg-white lg:h-full lg:rounded-lg lg:shadow-lg flex flex-col items-center justify-center lg:mb-12 lg:py-4`}>
                    <h1 className={`font-outfit text-h1 font-extrabold md:text-th1 lg:text-wh1 lg:max-w-2xl`}>Find your perfect match!</h1>
                </div>
                <QuizContainer />
            </div>
        </main>
    )
}
