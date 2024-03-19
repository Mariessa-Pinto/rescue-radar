import Navbar from '@/components/Navbar'
import QuizContainer from '@/components/QuizContainer'


export default function Quiz() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-blue to-red`}>
            <Navbar />
           
            <div className={`mt-20`} >
             
                <div className={`lg:bg-white lg:h-full lg:rounded-lg lg:shadow-lg flex flex-col justify-center items-center lg:mb-12 lg:pb-4`}>
                <h1  className={`text-3xl font-extrabold mb-8 p-4`}>Find your perfect match!</h1>
                <QuizContainer/>
                </div>
              
            </div>
        </main>
    )
}
