import { useState } from "react";
import Username from "./Username";

export default function Hello(props) {
  const [name, setName] = useState('Mike');
  const msg = props.age > 19 ? '성인입니다.' : '미성년자입니다.';

  return (
    <div>
        <h2 id="name">
            {name}({props.age}) : {msg}
        </h2>
        <Username name={name}/>
        <button onClick={() => {
            setName(name === "Mike" ? "Jane" : "Mike");
            }}
        >
            Change
        </button>
    </div>
  );
}
