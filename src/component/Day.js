import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Word from "./Word";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <div>
      <h2>Day {day}</h2>
      {words.map((word) => (
        <Word word={word} key={word.id} />
      ))}
    </div>
  );
}
