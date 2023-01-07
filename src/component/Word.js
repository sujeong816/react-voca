import { useState } from "react";

export default function Word({ word }) {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(word.isDone);

  function toggleIsShow(){
    setIsShow(!isShow)
  }

  function toggleIsDone(){
    setIsDone(!isDone)
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleIsDone}/>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td> {/** isShow가 true일 때만 단어 뜻이 보임 */}
      <td>
        <button onClick={toggleIsShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
