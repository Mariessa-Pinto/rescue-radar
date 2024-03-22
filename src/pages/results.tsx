import Navbar from '@/components/Navbar'
import AdoptAPet from '@/components/AdoptAPet'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function Results({ selectedBreeds }: IQuizResultFilter) {
    
    const router = useRouter();

    const handleApplyFilters = () => {
        router.push({
            pathname: '/availableDogs',
            query: {
                selectedBreeds: encodeURIComponent(JSON.stringify(selectedBreeds)),
            },
        });
    };

    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-5`}>
            <Navbar />
            <AdoptAPet />
            <div className={` flex bg-red rounded-t-xl h-full flex justify-center w-400`}>
                <div className={`h-full w-12 bg-red rounded-full rounded-lg`}>
                    <div className={`flex justify-center`}>
                        <Link
                            href="/availableDogs"
                            onClick={handleApplyFilters}
                        >
                            <button className={`rounded-full border-2 w-60 h-14 border-blue font-outfit text-h4 font-medium bg-white shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}>
                                View Adoptable Dogs
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>

    )
}
