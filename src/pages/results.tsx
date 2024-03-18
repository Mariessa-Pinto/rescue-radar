import Navbar from '@/components/Navbar'
import AdoptAPet from '@/components/AdoptAPet'


export default function Results() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-10`}>
        
            <Navbar />
           
            <AdoptAPet/>
        </main>

    )
}
