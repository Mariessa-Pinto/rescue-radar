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
    max_weight_female: string;
    max_weight_male: string;
    shedding: string;
    energy: string;
    good_with_other_dogs: string;
    good_with_children: string;
  }

  interface IPetFinderProps {
    searchQuery: string;
    onDogClick: (dog: IDog) => void;
}

interface IViewDogProps {
  dog: IDog;
  onClose: () => void;
}
  