import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'
import Link from 'next/link'
import { useState , useEffect} from 'react';


export default function AdoptionForm() {

    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Logic to handle form submission
    };
    return (
        <main>
        <Navbar />
        <div className={`flex flex-col items-center justify-between `}>
            <h1 className={`text-3xl font-extrabold ${isLargeScreen ? 'text-4xl' : 'text-3xl'}`}>Adoption Form</h1>
            <form onSubmit={handleSubmit} className={`flex flex-col mt-8 w-404`}>
                <div className={`flex flex-col gap-4`}>
                <label>First Name</label>
                <input  className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`} type="text" placeholder="Name"  />
                <label>Phone Number</label>
                <input className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`} type="tel" placeholder="Phone Number"  />
                    
                <label>Email</label>
                <input className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`} type="email" placeholder="Email"  />
                <label>Location</label>
                <input className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`}type="text" placeholder="Location"  />
                <label>Why are you a good fit</label>
                <textarea className={`border border-gray-300 rounded-lg py-2 px-4 mb-4 h-20`} placeholder="Why would you be a good fit for adoption?"  />
                </div>
         
       
            </form>
            <div className={`mt-8`}>
            <RedButton text="Send Form" link="/formSent" />
            </div>
            
        </div>
    </main>
    )
}
