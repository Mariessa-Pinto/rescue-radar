import Image from 'next/image';
import RedButton from '../RedButton';

const ViewDog = ({ dog, onClose }: IViewDogProps) => {
    return (
        <div className="fixed top-20 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white w-full h-full flex flex-col items-center p-10 gap-10 bg-no-repeat bg-halfCircle bg-top-right">
                <button className="absolute top-2 right-2 text-white font-outfit font-outfit text-h1 font-extrabold" onClick={onClose}>
                    X
                </button>
                <div className={`flex flex-row w-full items-end justify-between mt-28`}>
                    <div className={`flex flex-col`}>
                        <p className={`font-outfit text-h1 font-extrabold md:text-th1 lg:text-wh1`}>{dog.name}</p>
                        <p className={`font-outfit text-h3 font-semibold md:text-th3 lg:text-wh3`}>{dog.breed}</p>
                        <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>{dog.location}, {dog.state}</p>
                    </div>
                    <div>
                        <Image
                            className={`object-cover`}
                            src={dog.img}
                            alt={dog.name}
                            width={200}
                            height={200} />
                    </div>
                </div>
                <div className={`flex flex-row justify-between w-full mt-24`}>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}>Age: {dog.age}</p>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> | </p>
                    <p className={`font-outfit text-h4 font-medium md:text-th4 lg:text-wh4`}> Size: {dog.size}</p>
                </div>
                <p className={`font-outfit text-base mb-5`}>{dog.description}</p>
                <RedButton
                    text="Adopt Now"
                    link='/adoptionForm'
                />
            </div>
        </div>
    );
};

export default ViewDog;