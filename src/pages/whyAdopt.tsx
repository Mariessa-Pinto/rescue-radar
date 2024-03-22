import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton';
import BarChart from '@/components/BarChart'

export default function WhyAdopt() {
    return (
        <>
            <main className={`flex min-h-screen w-full flex-col items-center md:justify-between`}>
                <Navbar />
                <div className={`hidden lg:block`}>
                    <Image
                        src="/whyimgs/banner.jpg"
                        width={1200}
                        height={100}
                        layout="responsive"
                        alt='banner'
                    />
                </div>
                <div className={`w-11/12 flex flex-col items-start gap-4`}>
                    <h1 className={`mt-5 font-outfit text-h1 md:text-th1 font-extrabold lg:text-wh1`}>Why Rescue</h1>
                    <div className={`w-full lg:w-3/4`}>
                        <p className={`font-outfit text-base lg:text-lg`}>Rescuing dogs is a compassionate and socially responsible choice that positively impacts both the individual and the broader community.</p>
                        <p className={`font-outfit text-base lg-text-lg mt-5`}>By adopting a dog from a shelter or rescue organization, you provide a loving home to an animal in need, offering them a second chance at a fulfilling life.</p>
                    </div>
                    <h3 className={`font-outfit text-tbase font-semibold lg:text-3xl`}>Reasons to Rescue</h3>
                    <div className={`flex flex-row items-center gap-4 lg:gap-20`}>
                        <div className={`flex flex-col items-center pt-1`}>
                            <Image
                                className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`}
                                src='/whyimgs/smiledog.jpg'
                                height={100}
                                width={100}
                                layout="fixed"
                                alt='dog'
                            />
                            <p className={`font-outfit text-base lg:text-xl`}>Find Happiness</p>
                        </div>
                        <div className={`flex flex-col items-center pt-1`}>
                            <Image
                                className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`}
                                src='/whyimgs/labs.jpg'
                                height={100}
                                width={100}
                                layout="fixed"
                                alt='dog'
                            />
                            <p className={`font-outfit text-base lg:text-xl`}>Make a Difference</p>
                        </div>
                        <div className={`flex flex-col items-center pt-1`}>
                            <Image
                                className={`rounded-md lg:w-80 lg:h-80 object-cover shadow-lg`}
                                src='/whyimgs/golden.jpg'
                                height={100}
                                width={100}
                                layout="fixed"
                                alt='dog'
                            />
                            <p className={`font-outfit text-base lg:text-xl`}>Feel Unconditional love</p>
                        </div>
                    </div>
                    <h3 className={`font-outfit text-tbase font-semibold lg:text-3xl`}>Backed By Research</h3>
                    <BarChart />
                </div>
                <div className={`mb-neg2 z-10`}>
                    <LargeButton
                        text="View Adoptable Dogs"
                        link='availableDogs'
                    />
                </div>
                <div className={`bg-red rounded-t-xl h-20 flex justify-center w-full`}></div>
            </main>
        </>
    )
}
