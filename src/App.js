import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transactionadd from "./pages/Transaction/Components/Addtransaction";
import Mainfinance from "./pages/Transaction/Components/MainTransaction";
import Viewtransaction from "./pages/Transaction/Components/viewtra";
import Edittransaction from "./pages/Transaction/Components/edit";
import Login from "./pages/Register/Components/Login";
import Register from "./pages/Register/Components/Register";
import Authguard from "./pages/authguard";
import { ErrorBoundary } from "react-error-boundary";
function App() {
  function ErrorFallback({error}) {
    return (
      <div role="alert">
       <pre style={{color: 'red'}}>{error.message}</pre>
      </div>
    )
  }
  
  return (
    <div>
     <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <Routes>
          <Route path="/register" element={<Authguard public={true} cmp={<Register />}/>} />
          <Route path="/login" element={<Authguard public={true} cmp={<Login />}/>} />
            
            {/* <Route path="/" element={<Authenticationlogin />}> */}
            {/* <Route path="/" element={<Mainfinance />} /> */}
            {/* </Route>  */}
           <Route path="/" element={<Authguard public={false} cmp={<Mainfinance />}/>} />
           <Route path="/addtransaction" element={<Authguard public={false} cmp={<Transactionadd />}/>} />
           <Route path="/transaction/view/:index" element={<Authguard public={false} cmp={<Viewtransaction />}/>} />
           <Route path="/transaction/edit/:index" element={<Authguard public={false} cmp={<Edittransaction />}/>} />
          

            {/* <Route path="/alltransaction" element={<Alltransaction />} >
          <Route path=":id" element={<Alltransaction />} />  */}
            {/* </Route>
          <Route path="/View" element={<View />} />
        </Route> */}
          </Routes>
        </BrowserRouter>
        </ErrorBoundary>
    
    </div>
  );
}

export default App;
