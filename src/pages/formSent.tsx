import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'

export default function FormSent() {
    return (
        <div className={`flex flex-col min-h-screen items-center justify-between lg:bg-gradient-to-b from-blue to-red`}>
        <Navbar />
        <div className={`flex flex-col items-center mt-8 w-404 gap-8 flex-grow`}>
            <h1 className={`text-h1 md:text-th1 font-extrabold lg:text-wh1`}>Adoption Form Sent!</h1>
            <div className={`flex flex-col mt-8 w-404 bg-white h-full mb-8 p-12 rounded-lg items-center`}>
            <div className={`flex flex-col items-start`}>
                <h2>Form Received!</h2>
                <p>You will receive a confirmation email that your form was sent.</p>
                <p>The shelter will reach back to you personally for further adoption instructions.</p>
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
