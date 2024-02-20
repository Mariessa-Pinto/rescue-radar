import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'
import Link from 'next/link'
import { useState, useEffect } from 'react';




export default function FormSent() {

    const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <main className={`flex flex-col items-center justify-between`}>
            <Navbar />
            <div  className={`flex flex-col justify-between mt-8 w-404 gap-8 `}>
            <h1 className={`text-3xl font-extrabold ${isLargeScreen ? 'text-4xl' : 'text-3xl'}`}>Adoption Form Sent!</h1>
            <h2>Form Recieved!</h2>
            <p>You will receive a confirmation email that your form was sent.</p>
            <p>The shelter will reach back to you personally for further adoption instructions.</p>
            </div>
            <div className={`mt-8`}>
            <RedButton
                text="Back To Home"
                link='/'
            />
            </div>
            
        </main>
    )
}
