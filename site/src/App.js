import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {CursoIndex} from './curso'
import {ContatoIndex} from './contato'



function App() {

  return (  
    <div>
    <CursoIndex/>
    <ContatoIndex/>
    </div>
  )
}



export default App;
