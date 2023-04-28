
import './App.css';
import Financetrackerform from './pages/Transaction/Components/Financemain';
import AddTransaction from './pages/Transaction/Components/Addtransaction';
import Viewtransaction from './pages/Transaction/Components/Viewtransaction';
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
      <Route  path='/transaction/view/:index' element={<Viewtransaction />}/>  
  </Routes>
    </div>
  );
}

export default App;
