import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "./views.css";
import { navigate } from "react-router-dom";
const Viewtransaction = (index) => {
const navigate = useNavigate()
  const viewdata = useLocation(index);
  console.log(viewdata);
  console.log(viewdata.state.receipt, "Sfsfsfsf");
  const backtransactionpage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <div>
          <span>Transaction Details </span>
        </div>
        <div className="viewmain">
{/*         
              <div>
              <label>ID: {viewdata.state.id}</label>
              
              </div> */}
            {viewdata.state.id}
              <div>

              <label>Transaction Date :- {viewdata.state.transactiondate}  </label>
                {/* <p>Transaction Date : - {viewdata.state.transactiondate} </p> */}
              </div>
            
            <div>
            <label>Month Year :- {viewdata.state.monthyear}  </label>
              {/* <p>Month Year : - {viewdata.state.monthyear}</p> */}
            </div>
            <div>
            <label>transactiontype :- {viewdata.state.transactiontype}  </label>
              {/* <p>Transaction Type : - {viewdata.state.transactiontype}</p> */}
            </div>
            <div>
            <label>From Account :- {viewdata.state.fromaccount}  </label>
              {/* <p>From Account : - {viewdata.state.fromaccount}</p> */}
            </div>
            <div>
            <label>To Acccount :- {viewdata.state.toaccount}  </label>
              {/* <p>To Acccount : - {viewdata.state.toaccount} </p> */}
            </div>
            <div>
            <label>Receipt :-  </label>
              <img src={viewdata.state.receipt} className="IMGWIDTH"></img>
            </div>
            <div>
            <label>Notes :- {viewdata.state.notes}  </label>
              {/* <p>Notes: - {viewdata.state.notes} </p> */}
            </div>
            <p className="addtransactionback" onClick={backtransactionpage}>
                    Back
                  </p>
        </div>
      
       
      </div>
    </div>
  );
};
export default Viewtransaction;
