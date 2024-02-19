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
    breed_name: string,
    weight: number,
    coat: string, 
    energy_level: number, 
    health_issues: number, 
    temperament: string
  }

  interface IPetFinderProps {
    searchQuery: string;
    onDogClick: (dog: IDog) => void;
}

interface IViewDogProps {
  dog: IDog;
  onClose: () => void;
}
  