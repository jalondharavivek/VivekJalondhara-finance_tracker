
import './App.css';
import Financetrackerform from './pages/Transaction/Components/Financemain';
import AddTransaction from './pages/Transaction/Components/Addtransaction';
import { Route, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     
      {/* <div className='mainclassapp'>
          <Financetrackerform />
      </div> */}
        
   <Routes>
      
      <Route  path='/' element={<Financetrackerform />}/> 
      <Route  path='/addtransaction' element={<AddTransaction />}/>  

  </Routes>
    </div>
  );
}

export default App;
