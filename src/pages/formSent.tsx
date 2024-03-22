import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'

export default function FormSent() {
    return (
        <div className={`flex flex-col min-h-screen items-center justify-start lg:bg-gradient-to-b from-blue to-red`}>
            <Navbar />
            <div className={`flex flex-col justify-start mt-8 w-11/12 md:w-9/12`}>
                <h1 className={`font-outfit text-h1 md:text-th1 font-extrabold lg:text-wh1`}>Adoption Form Sent!</h1>
                <div className={`flex flex-col mt-8 bg-white h-full rounded-lg items-center lg:p-10`}>
                    <div className={`flex flex-col items-start gap-5 `}>
                        <h2 className={`font-outfit text-wh2 font-semibold`}>Form Received!</h2>
                        <p className={`font-outfit text-h4 font-medium`}>You will receive a confirmation email that your form was sent.</p>
                        <p className={`font-outfit text-h4 font-medium`}>The shelter will reach back to you personally for further adoption instructions.</p>
                    </div>
                    <div className={`mt-8`}>
                        <RedButton
                            text="Back To Home"
                            link='/'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
