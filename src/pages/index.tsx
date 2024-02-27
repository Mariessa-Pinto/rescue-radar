import Image from 'next/image';
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';

export default function Home() {
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
    <main className={`flex min-h-screen flex-col items-center overflow-hidden md:justify-between`}>
      <Header/>
      <Navbar />
      <div className={`p-10 pt-5 pb-0`}>
        <h1 className={`font-outfit text-h1 font-extrabold md:text-th1 lg:text-wh1 lg:max-w-2xl`}>Find your perfect companion!</h1>
        <p className={`font-outfit text-base md:text-tbase lg:max-w-2xl`}>Take our quiz to learn which breed whould be best for you! Then find local rescues that fit your personality.</p>
      </div>
      <div className={`h-65`}>
        <div className={`flex justify-center mt-10 mb-neg2 md:mb-neg5 lg:mb-neg2`}>
          <LargeButton
            text="Take Quiz"
            link='/quiz'
            
          />
        </div>
        <div className={`w-screen h-full bg-red rounded-tr-xl rounded-tl-xl bg-no-repeat bg-bottom-right md:bg-bottom-right-md lg:bg-bottom-right-lg md:rounded-tr-2xl md:rounded-tl-2xl lg:rounded-tr-3xl lg:rounded-tl-3xl ${!isLargeScreen && 'bg-collie'}`}>
        <div className={`hidden lg:block absolute bottom-0 left-0 z-10`}>
            <Image
              src={'/home/dog1.png'}
              alt='Dog image'
              height={350}
              width={380}
            />
          </div>
          <div className={`hidden lg:block absolute bottom-0 right-0 z-10`}>
            <Image
              src={'/home/collie.png'}
              alt='Collie image'
              height={350}
              width={450}
            />
          </div>
          <div className={`flex flex-row justify-around h-90 items-end md:flex-col md:items-start md:justify-center md:gap-10 md:ml-32 md:pt-20 lg:flex-row lg:ml-0 lg:pt-52`}>
            <Link href={'/availableDogs'}>
              <div className={`rounded-button border-2 w-36 h-48 border-blue font-outfit text-xl font-medium bg-white flex flex-col items-center justify-center gap-4 pt-1 shadow-lg md:w-80 md:flex-row lg:flex-col lg:w-44`}>
                <Image
                  src={'/home/dogs.svg'}
                  alt='dog head'
                  height={81}
                  width={90}
                />
                <h2 className={`block lg:hidden`}>View Rescues</h2>
              </div>
              <h2 className={`hidden lg:block font-outfit text-base text-white font-semibold pl-10 pt-2`}>View Rescues</h2>
            </Link>
            <Link href={'/whyAdopt'}>
              <div className={`rounded-button border-2 w-36 h-48 border-blue font-outfit text-xl font-medium bg-white flex flex-col items-center justify-center gap-4 pt-1 shadow-lg md:w-80 md:flex-row lg:flex-col lg:w-44 z-20`}>
                <Image
                  src={'/home/why.svg'}
                  alt='paw rpint with heart'
                  height={87}
                  width={90}
                />
                <h2 className={`block lg:hidden`}>Why Adopt</h2>
              </div>
              <h2 className={`hidden lg:block font-outfit text-base text-white font-semibold pl-10 pt-2`}>Why Adopt</h2>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
