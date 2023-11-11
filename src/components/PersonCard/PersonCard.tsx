import { PersonStructure } from "../../store/types";
import PersonCardStyled from "./PersonCardStyled";

interface PersonCardProps {
  person: PersonStructure;
}

const PersonCard = ({ person }: PersonCardProps): React.ReactElement => {
  return (
    <PersonCardStyled className="card">
      <img src={person.image} alt={person.name} className="card__image" />
      <ul className="card__list">
        <li className="card__item card__name">Name: {person.name}</li>
        <li className="card__item card__surname">Surname: {person.surname}</li>
        <li className="card__item card__origin">Origin: {person.origin}</li>
        <li className="card__item card__house">House: {person.house}</li>
        <li className="card__item card__wand">Wand: {person.wand}</li>
        <li className="card__item card__pet">Pet: {person.pet}</li>
        <li className="card__item card__patronus">
          Patronus: {person.patronus}
        </li>
      </ul>
    </PersonCardStyled>
  );
};

export default PersonCard;
