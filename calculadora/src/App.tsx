import { use, useEffect, useState } from 'react';
import './App.css'

const App = () => {

   const [textoOperacion,graficado] = useState<string>("") //los estados siempre tienen que tener valor inicial
   let [numero1,setNum1] = useState<string|null>(null)
   let [numero2,setNum2] = useState<string|null>(null)
   let [operacion,setOperacion] = useState<string|null>(null)
   let [resultado,setResultado] = useState<boolean> (false) 
    useEffect(()=>{
     let textoGraficado = " "
     if(numero1) textoGraficado = textoGraficado+numero1
     if(operacion) textoGraficado=textoGraficado+operacion
     if(numero2) textoGraficado=textoGraficado+numero2
     graficado(textoGraficado)
    },[numero1,numero2,operacion]);


    useEffect(()=>{
      console.log(numero1, numero2, operacion)
     if(numero1 && operacion && numero2){
      const numero1Real=Number(numero1);
      const numero2Real  =Number(numero2);
      
      if(operacion==="+"){
          graficado(String(numero1Real+numero2Real))
      }
      if(operacion==="-"){
        graficado(String(numero1Real-numero2Real));

      }
      if(operacion==="/"){
        graficado(String(numero1Real/numero2Real));
      }
      if(operacion==="*"){
        graficado(String(numero1Real*numero2Real));

      }
    }
    },[resultado])
const handleClick = (miString: string) =>{
  if(!numero1 && miString !== "+" && miString !== "-" && miString !== "*" && miString !== "/" && miString !== "="){
    setNum1((miString))
  }
 else if(!operacion && (miString === "+" || miString === "-" || miString == "*" || miString == "/" || miString == "=")){
    setOperacion((miString))
    
  }
  else if(!numero2 && miString !== "+" && miString !== "-" && miString !== "*" && miString !== "/" && miString !== "="){
    setNum2((miString))

  }
}
const handleIgual = (miIgual : string) =>{
  if(miIgual==="="){
    setResultado(true);
  }
}
const limpiarPantalla = () =>{
  setNum1(null);
  setNum2(null);
  setOperacion(null);
  graficado(" ")

}

  return (
   <div className="mainContainer">
   <div className='Visor'> 
        <h1> {textoOperacion}</h1> 
   </div> 
  <div>
    <div className="operaciones">
      <div className="numeros">
        <div>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
        </div>
        <div>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
        </div>
        <div>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
        </div>
      </div>
      <div className="caja">
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
       
      </div>
    </div>
    <div className="operacionesextra">
       <button onClick={limpiarPantalla}>AC</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button className="igual"onClick={() => handleIgual("=")}>=</button>
    
    </div>
  </div>
</div>
  )
}

export default App;
