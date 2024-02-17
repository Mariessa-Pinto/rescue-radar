import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import styles from '../styles/why.module.css'
import BarChart from '@/components/BarChart'



export default function WhyAdopt() {
    return (
        <>
  
        <main className={`flex min-h-screen flex-col items-center justify-between`}>
        <Navbar />
            <div className={`flex flex-col p-10 items-start gap-4`}>
            <h1 className={`text-3xl font-extrabold`}>Why Rescue</h1>
            <div style={{ width: '314px' }}>
            <p>Rescuing dogs is a compassionate and socially responsible choice that positively impacts both the individual and the broader community. </p>
            <p style={{marginTop:'20px'}}>By adopting a dog from a shelter or rescue organization, you provide a loving home to an animal in need, offering them a second chance at a fulfilling life</p>
            </div>

            <h3 className={`text-2xl font-semibold`}>Reasons to Rescue</h3>
            <div className={`flex flex-row p-10 items-center gap-4`}>
            <div className={`flex flex-col items-center pt-1`}>
            
                <Image className={styles.dogimage}
                    src='/whyimgs/smiledog.jpg'
                    height={60}
                    width={100}
                    alt='dog'
                />
                <p>Find Happiness</p>
                
            </div>
            <div className={`flex flex-col items-center pt-1`}>
            
            <Image className={styles.dogimage}
                src='/whyimgs/labs.jpg'
                height={60}
                width={100}
                alt='dog'
            />
            <p>Make a Difference</p>
            
        </div>
        <div className={`flex flex-col items-center pt-1`}>
            
            <Image className={styles.dogimage}
                src='/whyimgs/golden.jpg'
                height={60}
                width={100}
                alt='dog'
            />
            <p>Feel Unconditional love</p>
            
        </div>

            </div>
            <h3 className={`text-2xl font-semibold`}>Backed By Research</h3>
       
            <BarChart/>
            </div>
        </main>
        </>
    )
}
