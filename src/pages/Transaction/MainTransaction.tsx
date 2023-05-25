import React, { useState, useEffect } from "react";
// import { useCookies } from "react-cookie";

import Financetrackerform from "./Transactiongrid";
                                                                                                                                                                                 
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { deletetransactiondata } from "../../../store/slices/Tradet";
import { selectgroupby } from "../../utills/constants";
const Mainfinance = () => {
  const transactionalldata = useSelector((state : any) => state.transactions);
  console.log(transactionalldata,"vivderjk");
  
  const [alltransaction, setAlltransaction] = useState([]);
  const [groupby, setGroupby] = useState([]);
  const [grp, setGrp] = useState(false);
//   const [cookies, setCookie, removeCookie] = useCookies(["Token"]);
  var Cookies = require("js-cookie");

  const navigate = useNavigate();
  useEffect(() => {
    setAlltransaction(transactionalldata );
  }, [transactionalldata]);

  const logout = () => {
    Cookies.remove("Token");

    navigate("/login");
  };
  const addtransaction = () => {
    navigate("addtransaction");
  };

  function group(event : any) {
    const grouptype = event.target.value;

    const groupBy = (array : any, key : any) => {
      let groupbydata = array.reduce((result : any, currentValue : any) => {
        (result[currentValue[key]] = result[currentValue[key]] || []).push(
          currentValue
        );
        return result;
      }, []);
      return groupbydata;
    };
    const personGroupedByColor = groupBy(alltransaction, grouptype);

    setGroupby(personGroupedByColor);
    setGrp(true);
  }
//   const transactiondata = useSelector((state) => state.transactions);

//   function deleterecord(delet_id) {
//     console.log(delet_id, "delet_id");
//     // let deletedata = [...datastate];

//     //  let filterdata = deletedata.filter(item => item.id !== delet_id)
//     dispatch(deletetransactiondata({ data: delet_id }));
//     //  setDatastate(filterdata)
//   }

  // useEffect(() => {

  //   setAlltransaction(datastate);
  // }, [datastate]);
  return (
    <div>
      <div className="financetrackerheading">
        <span className="headingfinancetracker">Finance Tracker</span>
      </div>
      <div className="grpby">
        <div className="addlogoutbuttonclass">
          <div>
            <p className="addtransaction" onClick={() => logout()}>
              logout
            </p>
          </div>
          <div>
            <p className="addtransaction" onClick={addtransaction}>
              ADD +
            </p>
          </div>
        </div>
        <div className="grpby">
          <span>Group By : </span>

          <select
            name="toaccount"
            defaultValue="default"
            className="searchspan"
            onChange={group}
          >
            <option value="default" disabled>
              select......{" "}
            </option>
            {selectgroupby.map((key) => (
              <option key={key.label} value={key.value}>
                {key.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="addtransactionmaindiv">
        {grp ? (
          <div>
            {Object.values(groupby).map((element, index) => (
              <div key={index}>
                <h1>{Object.keys(groupby)[index]}</h1>
                <Financetrackerform all={element} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            <Financetrackerform all={alltransaction} />
          </div>
        )}
      </div>
    </div>
  );
};
export default Mainfinance;
