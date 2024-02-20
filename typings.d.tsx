interface ILargeButton {
    text: string;
    link: string;
}

interface IDog {
  id: number; 
  name: string;
  age: string;
  breed: string;
  gender: string;
  weight: string;
  location: string;
  state: string;
  img: string; 
  description?: string; 
  size?: string; 
}

interface IAdopt {
    name: string;
    max_weight_female: number;
    max_weight_male: number;
    shedding: number;
    energy: number;
    good_with_other_dogs: number;
    good_with_children: number;
  }

  interface IPetFinderProps {
    searchQuery: string;
    onDogClick: (dog: IDog) => void;
}

interface IViewDogProps {
  dog: IDog;
  onClose: () => void;
}
  