import Navbar from '@/components/Navbar'
import RedButton from '@/components/RedButton'


const FormSent = () => {
    return (
        <main className={`flex flex-col items-center justify-between`}>
            <Navbar />
            <div className={`flex flex-col justify-between mt-8 w-404 gap-8`}>
                <h1 className={`text-h1 md:text-th1 font-extrabold lg:text-wh1`}>Adoption Form Sent!</h1>
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

export default FormSent();