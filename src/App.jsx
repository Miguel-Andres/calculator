import './styles.css'
import {useState,useEffect} from "react"
function App() {
  
  const [number1, setNumber1] = useState("")
  const [number2, setNumber2] = useState("")
  const [currentOperation , setCurrentOperation] = useState("")
  const [result,setResult] = useState(0)


  const clickNumber=(number)=>{
    currentOperation ==="" ?
    setNumber1(number1 + number) 
    : setNumber2 (number2 + number)
  }
  
  const clickOperation = (value)=>{
    
    setCurrentOperation(value)
  }

  const allClear =()=>{
    setNumber2("")
    setNumber1("")
    setResult("")
    setCurrentOperation("")
  }
  const lastClear =()=>{
   !currentOperation ?
    setNumber1(number1.slice(0,-1) )
    
    :setNumber2(number2.slice(0,-1) )
    

  }

  const getResult =()=>{
    switch (currentOperation) {
      case "+":
        setResult(Number(number1)+ Number(number2))
        break ;
        case "-":
          setResult(Number(number1)- Number(number2))
          break ;
          case "*":
            setResult(Number(number1)* Number(number2))
            break ;
              case "÷":
            setResult(Number(number1) / Number(number2))
            break ;
          
    }

  }
  return (
    <div className="calculator-grid " >

      <div className="output">
        <div className="previus-operand"> {currentOperation? number1 + currentOperation: ""}</div>
        <div className="current-operand">{result ? result : (!currentOperation  ? number1 : number2)}</div>
      </div>

      <button className="span-two" onClick={allClear}>AC</button>
      <button onClick={lastClear}>DEL</button>
      <button onClick={()=>clickOperation("÷")}> ÷ </button>
      <button onClick={()=>clickNumber(1)}> 1 </button>
      <button onClick={()=>clickNumber(2)}> 2 </button>
      <button onClick={()=>clickNumber(3)}> 3 </button>
      <button onClick={()=>clickOperation("*")}> * </button>
      <button onClick={()=>clickNumber(4)} > 4 </button>
      <button onClick={()=>clickNumber(5)}> 5 </button>
      <button onClick={()=>clickNumber(6)}> 6 </button>
      <button onClick={()=>clickOperation("+")}> + </button>
      <button onClick={()=>clickNumber(7)}> 7 </button>
      <button onClick={()=>clickNumber(8)}> 8 </button>
      <button onClick={()=>clickNumber(9)}> 9 </button>
      <button onClick={()=>clickOperation("-")}> - </button>
      <button onClick={()=>clickNumber(".")}> . </button>
      <button  onClick={()=>clickNumber(0)}> 0 </button>
      <button className="span-two" onClick={getResult}> = </button>
    
    </div>
  )
}

export default App
