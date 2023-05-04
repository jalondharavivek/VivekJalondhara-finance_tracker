import "./App.css";
import Financetrackerform from "./pages/Transaction/Components/Financemain";
import AddTransaction from "./pages/Transaction/Components/Addtransaction";
import Viewtransaction from "./pages/Transaction/Components/Viewtransaction";
import Edittransaction from "./pages/Transaction/Components/edittransaction";
import Mainfinance from "./pages/Transaction/Components/Groupby";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Register/Components/Login";
import Register from "./pages/Register/Components/Register";
import Authguard from "./pages/Register/Components/authguard";
import Unauthguard from "./pages/Register/Components/Unauthguard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Authguard> {<Mainfinance />}</Authguard>} />
        <Route
          path="/addtransaction"
          element={<Authguard> {<AddTransaction />}</Authguard>}
        />
        <Route
          path="/transaction/view/:index"
          element={<Authguard> {<Viewtransaction />}</Authguard>}
        />
        <Route
          path="/transaction/edit/:index"
          element={<Authguard>{<Edittransaction />} </Authguard>}
        />

        <Route  path="/register" element={ <Register />} />
      </Routes>
    </div>
  );
}

export default App;
