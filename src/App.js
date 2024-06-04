import imagen0 from './rey_sisebuto.png';
import imagen1 from './rey_atanagildo.png';
import './App.css';
import { useRef } from 'react';

function App() {
const tipoCambio = 23.16;
const refCaja = useRef(); 
const aumentarConteo=(e)=>{
    e.target.innerHTML = Number(e.target.innerHTML) + 1; 
    if(Number(e.target.innerHTML) > 7){    
      e.target.style.backgroundColor = "red";
      if(Number(e.target.innerHTML) === 10){
        e.target.style.backgroundColor = "white";
        e.target.innerHTML = 1;
      }
    }    
  }
const convertirValor=(e)=>{
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * tipoCambio;
  }
const cambiarImagen=(j)=>{
  if( j.target.src.includes("atanagildo")){
    j.target.src = imagen0;    
  }else{
    j.target.src = imagen1;   
  }  
}
const replicarTexto=(e)=>{
  refCaja.current.innerHTML = e.target.value;
}
  return (
    <>      
      <div ref={refCaja} className="caja" onClick={aumentarConteo}>1</div>
      <button onClick={convertirValor}>Aceptar</button>      
      <div><img onClick={cambiarImagen} src={imagen0} alt='rey_sisebuto'></img></div>
      <input onChange={replicarTexto} className="campo"></input>      
    </>
  );
}

export default App;
