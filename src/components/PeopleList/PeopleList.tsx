import mockPeople from "../../mocks/mockData";
import PersonCard from "../PersonCard/PersonCard";
import PeopleListStyled from "./PeopleListStyled";

const PeopleList = (): React.ReactElement => {
  const people = mockPeople;

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
