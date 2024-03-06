import Image from 'next/image';
import RedButton from '../RedButton';

const ViewDog = ({ dog, onClose }: IViewDogProps) => {
    return (
        <div className="fixed top-20 left-0 w-full h-full flex flex-col items-center md:items-start justify-center bg-white-800 bg-opacity-75 z-50 lg:w-full lg:h-dvh">
            <div className="bg-white w-full h-full flex flex-col items-center lg:justify-center md:items-start lg:items-center p-10 gap-10 bg-no-repeat bg-halfCircle bg-top-right md:bg-100% lg:bg-70%">
                <button className="absolute top-2 md:right-4 lg:right-64 lg:top-10 right-2 text-white font-outfit font-outfit text-h1 font-extrabold" onClick={onClose}>
                    X
                </button>
                <div className={`flex flex-row w-full items-end lg:items-start lg:w-8/12 justify-between mt-28 md:mt-60 lg:mt-0`}>
                    <div className={`flex flex-col`}>
                        <p className={`font-outfit text-h1 font-extrabold md:text-th1 lg:text-wh1`}>{dog.name}</p>
                        <p className={`font-outfit text-h3 font-semibold md:text-th3 lg:text-wh3 lg:mt-2`}>{dog.breed}</p>
                        <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4 md:mt-5 lg:mt-10`}>{dog.location}, {dog.state}</p>
                        <div className={`lg:flex kg:flex-row lg:justify-between lg:w-6/12 mt-24 hidden lg:block lg:justify-start`}>
                        <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Age: {dog.age}</p>
                        <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> | </p>
                        <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> Size: {dog.size}</p>
                    </div>
                    <p className={`font-outfit text-base mb-5 md:w-6/12 hidden lg:block`}>{dog.description}</p>
                    </div>
                    <div>
                        <Image
                            className={`object-cover lg:w-400 `}
                            src={dog.img}
                            alt={dog.name}
                            width={200}
                            height={200} />
                    </div>
                </div>
                <div className={`flex flex-row justify-between w-full md:w-6/12 mt-24 block lg:hidden`}>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Age: {dog.age}</p>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> | </p>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> Size: {dog.size}</p>
                </div>
                <p className={`font-outfit text-base mb-5 md:w-6/12 block lg:hidden`}>{dog.description}</p>
                <div className='flex justify-center w-full lg:justify-start lg:w-8/12'>
                    <RedButton
                        text="Adopt Now"
                        link='/adoptionForm'
                    />
                </div>
            </div>
        </div>
    );
};

export default ViewDog;