import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Viewtransaction from './pages/Transaction/viewtra';
import Transactionadd from './pages/Transaction/addtransaction';
import Mainfinance from './pages/Transaction/MainTransaction';
import Edittransaction from './pages/Transaction/edit';
function App() {
  return (
 

    <BrowserRouter>
 <Routes>
 <Route path="/" element = {< Mainfinance />} />
 <Route path="/addtransaction" element={<Transactionadd />} />
 <Route path="/transaction/view/:id" element={<Viewtransaction />} />
 <Route path="/transaction/edit/:id" element={<Edittransaction />} />
 </Routes>
 </BrowserRouter>
   
    
  );
}

export default App;
