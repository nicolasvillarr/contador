import './App.css';
import { Button, ButtonGroup } from 'reactstrap';
import { useState, useEffect } from 'react';
function App() {

  const [contador, setContador] = useState(0)

    useEffect(()=>{
      document.title = `${contador}`;
    })
  return (
    <header className='App-header'>
      
    <div className="App">
      <ButtonGroup>
        <Button onClick={()=> setContador(contador - 1)}>
          -
        </Button>
        <Button onClick={()=> setContador(0)}>
        REINICIAR
        </Button>
        <Button onClick={()=> setContador(contador + 1)}>
          +
        </Button>
      </ButtonGroup>
        <div className='contador'>{ contador !== 0 ? 
          <div className='contP'>Contador: {contador}</div> : 
        <div className='contC'>Contador: 0</div>}
      </div>
    </div>
    </header>
  );
}
 
export default App;
