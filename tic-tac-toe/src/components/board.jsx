import { useState } from "react";
import Col from "./col";

function Board(){
    const [state,setState] = useState(Array(9).fill(null));
    const [isXturn,setIsXturn]= useState(true);
    const checkWinner = ()=>{
        const WinnerLogic =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
    ];

    for(let logic of WinnerLogic ){
        const [a,b,c]= logic;
        if(state[a]!==null && state[a]=== state[b] && state[a] === state[c]){
            return state[a];
        }
        
    }
    return false;
    }

    const winner = checkWinner();

    const handleClick = (index) =>{
         const copyState = [...state];
         copyState[index]= isXturn ? "X" : "O";
         setState(copyState);
         setIsXturn(!isXturn);
    };

    return (
        <div className="board">
            {winner ? <h1> {winner} won</h1> :(<>
            <div className="brow">
                <Col onClick={()=>handleClick(0)} value={state[0]} />
                <Col onClick={()=>handleClick(1)}  value={state[1]} />
                <Col  onClick={()=>handleClick(2)} value={state[2]} />
            </div>
            <div className="brow">
                <Col onClick={()=>handleClick(3)} value={state[3]} />
                <Col onClick={()=>handleClick(4)} value={state[4]} />
                <Col onClick={()=>handleClick(5)} value={state[5]} />
            </div>
            <div className="brow">
                <Col onClick={()=>handleClick(6)} value={state[6]} />
                <Col onClick={()=>handleClick(7)} value={state[7]} />
                <Col onClick={()=>handleClick(8)} value={state[8]} />
            </div></>)}
            
        </div>
    )
}

export default Board;