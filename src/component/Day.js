import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Word from "./Word";

export default function Day() {
  //   const day = useParams().day;
  const { day } = useParams();

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  const [days, setDay] = useState({day});

  const navigate = useNavigate();

  function del() {
    /** 날짜 삭제 함수 */
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/days/${days.day}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application.json",
        },
      }).then((res) => {
        if(res.ok){
          setDay({id: 0});
          navigate(`/`);
        }
      })
    }
  }

  if(days.id === 0){
    return null;
  }

  return (
    <div>
      <div>
        <h3 className="btn_h3">Day {day}</h3>
        <button onClick={del} className="day_btn_del">
          삭제
        </button>
      </div>
      {words.map((word) => (
        <Word word={word} key={word.id} />
      ))}
    </div>
  );
}
