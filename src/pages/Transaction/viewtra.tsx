import { useNavigate } from "react-router-dom";
import React from "react";
import "../../assets/style/view.css"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const Viewtransaction = () => {
  const navigate = useNavigate();
  // const viewdata = useLocation(index);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const params = useParams();
  const transactionalldata = useSelector((state : any) => state.transactions);
console.log(transactionalldata,"dataview");
  console.log();
  
  console.log("log");
  
  console.log(params.id,"log");
const id : any =  params.id;
      // let index = state.findIndex((x) => x.id === deleteid);

const viewid = id - 1

 
   
 const tradara = transactionalldata[viewid] 

  
  const backtransactionpage = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="mainclassaddtransaction">
        <div>
          <span className="tradetailsview">Transaction Details </span>
        </div>
        <div className="viewmain">
          <table className="vvv">
            <tr>
              <td> Id:{tradara.id}</td>
            </tr>
            <tr>
              <td>
                <label>

                  Transaction Date :- {tradara.transactiondate}{" "}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label>Month Year :- {tradara.monthyear} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>
                  transactiontype :- {tradara.transactiontype}{" "}
                </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>From Account :- {tradara.fromaccount} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>To Acccount :- {tradara.toaccount} </label>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Receipt :- </label>
                <img src={tradara.receipt} alt="" className="IMGWIDTH"></img>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <label>Notes :- {tradara.notes} </label>
              </td>
            </tr>
          </table>
          <p className="addtransactionback" onClick={backtransactionpage}>
            Back
          </p>
        </div>
      </div>
    </div>
  );
};
export default Viewtransaction;
