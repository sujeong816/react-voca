import { Link } from "react-router-dom";

export default function Emptypage(){
    return(
        <div>
            <h2>잘못된 접근입니다.</h2>
            <Link to="/">처음으로</Link>
        </div>
    )
}