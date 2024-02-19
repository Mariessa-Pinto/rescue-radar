import Image from 'next/image';
import RedButton from '../RedButton';

const ViewDog = ({ dog, onClose }: IViewDogProps) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-8 rounded-lg">
                <button className="absolute top-2 right-2 text-gray-600" onClick={onClose}>
                    Close
                </button>
                <div className="flex justify-center mb-4">
                    <Image src={dog.img} alt={dog.name} width={200} height={200} />
                </div>
                <p>Name: {dog.name}</p>
                <p>Breed: {dog.breed}</p>
                <p>Location: {dog.location}, {dog.state}</p>
                <p>Age: {dog.age}</p>
                <p>Size: {dog.size}</p>
                <p>Description: {dog.description}</p>
            </div>
            <RedButton
            text="Adopt Now"
            link='/adoptionForm'
            />
        </div>
    );
};

export default ViewDog;