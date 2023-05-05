import React from "react";
import { useState } from "react";
import "./addtransaction.css";
import { monthyearoptins } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
import { transactionTypeOptions } from "../../../utils/constant";
import { accountOptions } from "../../../utils/constant";
import { validation } from "./validation";
const AddTransaction = () => {
  const navigate = useNavigate();
  const [addtransaction, setAddtransaction] = useState({
    transactiondate: "",
    monthyear: "",
    transactiontype: "",
    fromaccount: "",
    toaccount: "",
    amount: "",
    receipt: "",
    notes: "",
  });

  console.log(monthyearoptins, "monthyear");

  const backtransactionpage = () => {
    navigate("/");
  };
  // console.log(addtransaction, "vivek add tra data");
  // const [datastore, setDatastore] = useState([
  //   {
  //     transactiondate: "",
  //     monthyear: "",
  //     transactiontype: "",
  //     fromaccount: "",
  //     toaccount: "",
  //     amount: "",
  //     receiptfile: "",
  //     notes: "",
  //   },
  // ]);
  // console.log(datastore, "vivek datat store");
  console.log(addtransaction, "first");
  //   useEffect(() => {
  //   var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
  //   console.log(get, "loggg");
  //   console.log(addtransaction, "second");
  //   console.log();
  //   get.push({ addtransaction });

  //   // localStorage.setItem('Transaction', JSON.stringify(get));
  //   localStorage.setItem("addtransaction", JSON.stringify(get));
  //   console.log(localStorage, "third");
  // }, [addtransaction]);

  const [error, setErrors] = useState({});
  // console.log(error, "vivek");
  const handleInput = (event) => {
    const transactionvalue = {
      ...addtransaction,
      [event.target.name]: event.target.value,
    };
    setAddtransaction(transactionvalue);
    // console.log(setAddtransaction(transactionvalue), "transaction values");
    // console.log(transactionvalue, "trans value");
  };

  const addtransactionsubmit = (event) => {
    event.preventDefault();
    const errors = validation(addtransaction);

    if (Object.values(errors).length > 0) {
      setErrors(validation(addtransaction));
    } else {
      setAddtransaction(addtransaction);
      var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      var id = get.length + 1;
      addtransaction.id = id;
      get.push(addtransaction);

      // localStorage.setItem('Transaction', JSON.stringify(get));
      localStorage.setItem("addtransaction", JSON.stringify(get));
      navigate("/");
    }
  };
  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const fileupload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      const newobj = { ...addtransaction, receipt: base64 };
      setAddtransaction(newobj);
      console.debug("file stored", base64);
    });
  };

  
  return (
    <div>
      <div className="mainclassaddtransaction">
        <div>
          <span className="addtransactionheading">Add transaction</span>
        </div>
        <div className="formmain">
          <form onSubmit={(e) => addtransactionsubmit(e)}>
            <div className="transactiondateclass">
              <div className="divpadding">
                <label className="transactiondatelabel">
                  Transaction Date :{" "}
                </label>
              </div>
              <div>
                <input type="hidden" id="custId" name="custId" value="3487" />
                <input
                  className="allinputbox"
                  type="date"
                  onInput={handleInput}
                  name="transactiondate"
                ></input>
                <div>
                  {error.transactiondate && (
                    <p className="valicolor">{error.transactiondate}</p>
                  )}
                </div>
              </div>

              <div className="divpadding">
                <label>Month Year :</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="monthyear"
                  onInput={handleInput}
                >
                  {monthyearoptins.map((data) => (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                  ))}
                </select>
                <div>
                  {error.monthyear && (
                    <p className="valicolor">{error.monthyear}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>Transaction Type : </label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="transactiontype"
                  onInput={handleInput}
                >
                  {transactionTypeOptions.map((data) => (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                  ))}
                </select>
                <div>
                  {error.transactiontype && (
                    <p className="valicolor">{error.transactiontype}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>From Account :-</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="fromaccount"
                  onInput={handleInput}
                >
                  {accountOptions.map((data) => (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                       ))}
                </select>
                <div>
                  {error.fromaccount && (
                    <p className="valicolor">{error.fromaccount}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>To Account :-</label>
              </div>
              <div>
                <select
                  className="allinputbox"
                  name="toaccount"
                  onInput={handleInput}
                >
                  {accountOptions.map((data) => (
                    <option key={data.label} value={data.value}>
                      {data.label}
                    </option>
                       ))}
                </select>
                <div>
                  {error.toaccount && (
                    <p className="valicolor">{error.toaccount}</p>
                  )}
                </div>
              </div>
              <div className="divpadding">
                <label>Amount :-</label>
              </div>
              <div>
                <input
                  placeholder="Amount"
                  name="amount"
                  onInput={handleInput}
                  className="allinputbox"
                  type="number"
                ></input>
                <div>
                  {error.amount && <p className="valicolor">{error.amount}</p>}
                </div>
              </div>
              <div className="divpadding">
                <label>Receipt :-</label>
              </div>
              <div>
                <input
                  onChange={fileupload}
                  className="allinputbox"
                  type="file"
                  name="receipt"
                ></input>
                <div>
                  {error.receipt && (
                    <p className="valicolor">{error.receipt}</p>
                  )}
                </div>
              </div>

              <div className="divpadding">
                <label>Note :-</label>
              </div>
              <div>
                <input
                  onInput={handleInput}
                  className="allinputbox"
                  type="text"
                  name="notes"
                  placeholder="Add Note"
                ></input>
                <div>
                  {error.notes && <p className="valicolor">{error.notes}</p>}
                </div>
              </div>
              <div>
                <input className="addtransactionback1" type="submit"></input>

                <p className="addtransactionback" onClick={backtransactionpage}>
                  Back
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
