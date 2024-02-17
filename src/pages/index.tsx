import Image from 'next/image'
import Navbar from '@/components/Navbar'
import LargeButton from '@/components/LargeButton'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center overflow-hidden`}>
      <Navbar />
      <div className={`p-10 pt-5 pb-0`}>
        <h1 className={`font-outfit text-h1 font-extrabold`}>Find your perfect companion!</h1>
        <p className={`font-outfit text-base`}>Take our quiz to learn which breed whould be best for you! Then find local rescues that fit your personality.</p>
      </div>
      <div className={`h-65`}>
        <div className={`flex justify-center mt-10 mb-neg2`}>
          <LargeButton 
            text="Take Quiz" 
            link='/quiz' 
          />
        </div>
        <div className={`w-screen h-full bg-red rounded-tr-xl rounded-tl-xl bg-collie bg-no-repeat bg-bottom-right`}>
          <div className={`flex flex-row justify-around h-90 items-end`}>
            <Link href={'/availableDogs'}>
              <div className={`rounded-button border-2 w-36 h-48 border-blue font-outfit text-xl font-medium bg-white flex flex-col items-center justify-center gap-4 pt-1 shadow-lg`}>
                <Image
                  src={'/home/dogs.svg'}
                  alt='dog head'
                  height={81}
                  width={90}
                />
                <h2>View Rescues</h2>
              </div>
            </Link>
            <Link href={'/whyAdopt'}>
              <div className={`rounded-button border-2 w-36 h-48 border-blue font-outfit text-xl font-medium bg-white flex flex-col items-center justify-center gap-4 pt-1 shadow-lg`}>
                <Image
                  src={'/home/why.svg'}
                  alt='paw rpint with heart'
                  height={87}
                  width={90}
                />
                <h2>Why Adopt</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
