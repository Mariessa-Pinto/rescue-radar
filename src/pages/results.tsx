import Navbar from '@/components/Navbar'
import AdoptAPet from '@/components/AdoptAPet'
import LargeButton from '@/components/LargeButton'


export default function Results() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-5`}>
        
            <Navbar />
           
            <AdoptAPet/>
            <div className={` flex bg-red rounded-t-xl h-full flex justify-center w-400`}>
                    <div className={`h-full w-12 bg-red rounded-full rounded-lg`}> 
                    <div className={`flex justify-center`}>
                    <LargeButton
                        text="View Adoptable Dogs"
                        link='availableDogs'
                    />
                    </div>
                    </div>
                </div>
        </main>

    )
}
