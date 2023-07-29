import React from "react";
import '../component.styles/FunctionCalcu.css';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function FunctionCalcu(){
  const [input, setInput] = useState('');
  const calcularResul = () =>{
        setInput(evaluate(input));
    };
    const negaPosit = () =>{
        if(input > 0){
          setInput(input * -1);
        }else{
          setInput(input * -1);
        }
    }
    //Open/Close calcu with icon
    const [statecalcu, setStatecalcu] = useState('calcuOff');
    const calcuOn = ()=>{
      setStatecalcu('contenedor-calculadora');
    }
    const calcuOff = ()=>{
      setStatecalcu('calcuOff');
    }
    //contenedor-calculadora

    return(
        <div className="functCalcu-app"> 
        <img className="calcu-img-icon" src={require("../img/calculadora.png")} alt='img-icon' onClick={calcuOn} />
        <div className={statecalcu} >
          <bottom className="btn-close" onClick={calcuOff}>X</bottom>
          <div className="fila-input">{input}</div>
          <div className="rows">
          <bottom className="fila-btn-oper btn" onClick={()=>setInput('')}>AC</bottom>
          <bottom className="fila-btn-oper btn" onClick={negaPosit}>+/-</bottom>
          <bottom className="fila-btn-oper btn" onClick={()=>setInput(input + "%")}>%</bottom>
          <bottom className="fila-btn-operation btn"onClick={()=>setInput(input + "/")}>/</bottom>
          </div>
          <div className="rows">
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 7)}>7</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 8)}>8</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 9)}>9</bottom>
          <bottom className="fila-btn-operation btn" onClick={()=>setInput(input + '*')}>x</bottom>
          </div>
          <div className="rows">
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 4)}>4</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 5)}>5</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 6)}>6</bottom>
          <bottom className="fila-btn-operation btn" onClick={()=>setInput(input + "-")}>-</bottom>
          </div>
          <div className="rows">
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 1)} >1</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 2)}>2</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + 3)}>3</bottom>
          <bottom className="fila-btn-operation btn" onClick={()=>setInput(input + "+")}>+</bottom>
          </div>
          <div className="rows">
          <bottom className="fila-btn0 btn" onClick={()=>setInput(input + 0)}>0</bottom>
          <bottom className="fila-btn btn" onClick={()=>setInput(input + ".")}>.</bottom>
          <bottom className="fila-btn-operation btn" onClick={calcularResul}>=</bottom>
          </div>    
        </div>
        </div>
    )
}
export default FunctionCalcu;