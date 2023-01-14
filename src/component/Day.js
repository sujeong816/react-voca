import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Word from "./Word";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  function del() {
    /** 날짜 삭제 함수 */
    if (window.confirm("삭제하시겠습니까?")) {
    }
  }
  return (
    <div>
      <div>
        <h3>Day {day}</h3>
        <button onClick={del} className="btn_del">
          삭제
        </button>
      </div>
      {words.map((word) => (
        <Word word={word} key={word.id} />
      ))}
    </div>
  );
}
