import Navbar from '@/components/Navbar';
import { useState, MouseEvent } from 'react';
import { useRouter } from 'next/router';


enum FormFields {
    FIRST_NAME = 'first_name',
    PHONE_NUMBER = 'phone_number',
    EMAIL = 'email',
    LOCATION = 'location',
    FIT_REASON = 'fit_reason',
}

export default function AdoptionForm() {
    
    const router = useRouter();

    const initialFieldsState: { [key in FormFields]: string } = {
        [FormFields.FIRST_NAME]: '',
        [FormFields.PHONE_NUMBER]: '',
        [FormFields.EMAIL]: '',
        [FormFields.LOCATION]: '',
        [FormFields.FIT_REASON]: '',
    };

    const [fields, setFields] = useState(initialFieldsState);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleFieldChange = (field: FormFields, value: string) => {
        setFields({ ...fields, [field]: value });

        const allFieldsFilled = Object.values(fields).every(fieldValue => fieldValue.trim() !== '');
        setIsFormValid(allFieldsFilled);
    };

    const handleSubmit = (e: MouseEvent) => {
        e.preventDefault();

        const allFieldsFilled = Object.values(fields).every(fieldValue => fieldValue.trim() !== '');

        if (allFieldsFilled) {
            router.push('/formSent');
        } else {
            setErrorMessage('Please fill in all fields.');
        }
    };

    return (
        <main>
            <Navbar />
            <div className={`flex flex-col items-center justify-between `}>
                <h1 className={`text-h1 md:text-th1 font-extrabold lg:text-wh1`}>Adoption Form</h1>
                <form className={`flex flex-col mt-8 w-404`}>
                    <div className={`flex flex-col gap-4`}>
                        <label>First Name</label>
                        <input
                            className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`}
                            type="text"
                            placeholder="Name"
                            value={fields[FormFields.FIRST_NAME]}
                            onChange={(e) => handleFieldChange(FormFields.FIRST_NAME, e.target.value)}
                        />
                        <label>Phone Number</label>
                        <input
                            className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`}
                            type="tel"
                            placeholder="Phone Number"
                            value={fields[FormFields.PHONE_NUMBER]}
                            onChange={(e) => handleFieldChange(FormFields.PHONE_NUMBER, e.target.value)}
                        />
                        <label>Email</label>
                        <input
                            className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`}
                            type="email"
                            placeholder="Email"
                            value={fields[FormFields.EMAIL]}
                            onChange={(e) => handleFieldChange(FormFields.EMAIL, e.target.value)}
                        />
                        <label>Location</label>
                        <input
                            className={`border border-gray-300 rounded-lg py-2 px-4 mb-4`}
                            type="text"
                            placeholder="Location"
                            value={fields[FormFields.LOCATION]}
                            onChange={(e) => handleFieldChange(FormFields.LOCATION, e.target.value)}
                        />
                        <label>Why are you a good fit</label>
                        <textarea
                            className={`border border-gray-300 rounded-lg py-2 px-4 mb-4 h-20`}
                            placeholder="Why would you be a good fit for adoption?"
                            value={fields[FormFields.FIT_REASON]}
                            onChange={(e) => handleFieldChange(FormFields.FIT_REASON, e.target.value)}
                        />
                    </div>
                </form>
                <div className={`mt-8`}>
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <button
                        className={`rounded-full border-2 w-60 h-14 border-red font-outfit text-h4 font-medium text-white bg-red shadow-lg lg:w-96 lg:h-16 lg:text-wh2`}
                        onClick={handleSubmit}
                        id="submit"
                        value="Submit"
                    >
                        Send Form
                    </button>
                </div>
            </div>
        </main>
    );
}
