import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import styles from '../styles/why.module.css'
import BarChart from '@/components/BarChart'
import { useState, useEffect } from 'react'


export default function WhyAdopt() {
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
        <>
            <main className={`flex flex-col items-center justify-between`}>
                <Navbar />
                <div className={`w-full`}>
                        <Image 
                            src="/whyimgs/banner.jpg"
                            width={1200} 
                            height={100} 
                            layout="responsive"
                            alt='banner'
                        />
                 </div>
              
          
                <div className={`flex flex-col p-10 items-start gap-4`}>
                    <h1 className={`text-3xl font-extrabold ${isLargeScreen ? 'text-4xl' : 'text-3xl'}`}>Why Rescue</h1>
                    <div className={`w-full lg:w-3/4`}> 
                        <p className={`${isLargeScreen ? 'text-lg' : 'text-base'}`}>Rescuing dogs is a compassionate and socially responsible choice that positively impacts both the individual and the broader community. </p>
                        <p style={{marginTop:'20px'}} className={`${isLargeScreen ? 'text-lg' : 'text-base'}`}>By adopting a dog from a shelter or rescue organization, you provide a loving home to an animal in need, offering them a second chance at a fulfilling life</p>
                    </div>

                    <h3 className={`text-2xl font-semibold ${isLargeScreen ? 'text-3xl' : 'text-2xl'}`}>Reasons to Rescue</h3>
                    <div className={`flex flex-row p-10 items-center gap-4 lg:gap-20`}>
    <div className={`flex flex-col items-center pt-1`}>
        <Image
            className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`} // Adjust dimensions for large screens
            src='/whyimgs/smiledog.jpg'
            height={100}
            width={100}
         
            alt='dog'
        />
        <p className={`text-${isLargeScreen ? 'xl' : 'base'} ${isLargeScreen ? 'font-semibold' : 'font-normal'}`}>Find Happiness</p>
    </div>
    <div className={`flex flex-col items-center pt-1`}>
        <Image
            className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`} // Adjust dimensions for large screens
            src='/whyimgs/labs.jpg'
            height={60}
            width={100}
            
            alt='dog'
        />
        <p className={`text-${isLargeScreen ? 'xl' : 'base'} ${isLargeScreen ? 'font-semibold' : 'font-normal'}`}>Make a Difference</p>
    </div>
    <div className={`flex flex-col items-center pt-1`}>
        <Image
            className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`} 
            src='/whyimgs/golden.jpg'
            height={60}
            width={100}
       
            alt='dog'
        />
        <p className={`text-${isLargeScreen ? 'xl' : 'base'} ${isLargeScreen ? 'font-semibold' : 'font-normal'}`}>Feel Unconditional love</p>
    </div>
</div>
                    <h3 className={`text-2xl font-semibold ${isLargeScreen ? 'text-3xl' : 'text-2xl'}`}>Backed By Research</h3>
                    <BarChart/>
                </div>
             
                <div className={`bg-red rounded-t-xl h-full flex justify-center w-full`}>
                    <div className={`h-full w-12 bg-red rounded-full rounded-lg`}> </div>
                    <LargeButton
                            text="View Adoptable Dogs"
                            link='availableDogs'
                        />
                </div>
            </main>
        </>
    )
}
