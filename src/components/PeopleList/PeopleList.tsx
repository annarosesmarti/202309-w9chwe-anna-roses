import { useAppSelector } from "../../store/hooks";
import PersonCard from "../PersonCard/PersonCard";
import PeopleListStyled from "./PeopleListStyled";

const PeopleList = (): React.ReactElement => {
  const people = useAppSelector((state) => state.peopleState.people);

  return (
    <PeopleListStyled className="cards">
      {people.map((person) => (
        <li className="card" key={person.id}>
          <PersonCard person={person} />
        </li>
      ))}
    </PeopleListStyled>
  );
};

export default PeopleList;
