import './App.css';
import Kep from './components/Kep';
import { adatLista } from './components/adatok';
import React, {useState} from 'react';

function App() {

  const [kepIndex, setNagyKep] = useState(0); 

  function nagyKepCsere(id) {
    console.log(id);
    setNagyKep(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <div className="fokep">
        <h3>Kép címe</h3>
        <Kep src = {adatLista[kepIndex].src}/>
        <p>leirás</p>
      </div>
      <div className = "galeria">
        {
          adatLista.map( (elem, index) =>{
            return (
              <Kep src= {elem.src} id = {elem.id} alt = {elem.alt} key = {index} nagyKepCsere = {nagyKepCsere}/>
            )
            }
          )
        }
        
      </div>
    </div>
  );
}

export default App;
