import Navbar from '@/components/Navbar'
import AdoptAPet from '@/components/AdoptAPet'
import Header from '@/components/Header'

export default function Results() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
            <Header/>
            <Navbar />
            <AdoptAPet/>
        </main>

    )
}
