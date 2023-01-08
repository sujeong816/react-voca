import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

export default function DayList() {

    const days = useFetch("http://localhost:3001/days");
//   const [days, setDays] = useState([]);

//   useEffect(() => {
//     /** 의존성 배열: [] 값이 변경됐을 때만 useEffect 실행 */
//     fetch("http://localhost:3001/days")
//     .then((res) => { /** API */
//       return res.json();
//     }).then(data => {
//         setDays(data);
//     });
//   }, []);

  return (
    <div>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
