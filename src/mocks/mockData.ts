import { PersonStructure } from "../store/types";

const mockPeople: PersonStructure[] = [
  {
    id: 1,
    name: "Harry",
    surname: "Potter",
    origin: "Half-Blood",
    house: "Gryffindor",
    wand: "11 inches, Holly, Phoenix feather",
    pet: "Hedwig",
    patronus: "Stag",
    isEnemy: false,
    image:
      "https://raw.githubusercontent.com/annarosesmarti/202309-w9chwe-api-anna-roses/main/public/images/id-1.webp",
  },
  {
    id: 2,
    name: "Hermione",
    surname: "Granger",
    origin: "Muggle-Born",
    house: "Gryffindor",
    wand: "10 ¾ inches, Vine, Dragon heartstring",
    pet: "Crookshanks",
    patronus: "Otter",
    isEnemy: false,
    image:
      "https://raw.githubusercontent.com/annarosesmarti/202309-w9chwe-api-anna-roses/main/public/images/id-2.webp",
  },
];

export default mockPeople;
