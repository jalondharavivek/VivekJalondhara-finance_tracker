import AddTransaction from "./Addtransaction";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom"
import { validation } from "./validation";
const Edittransaction = (index) => {
  const navigate = useNavigate();
  const editdata = useLocation(index);
console.log(editdata,"1111");
  console.log(editdata.state.id,"3232");
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
const id = editdata.state
  // let { id } = useParams();
console.log(addtransaction.amount
  ,"00001");

  useEffect(()=>{

  if (id === undefined) { 
      console.log(id, "mm")
  } else {
      var editdata1 = JSON.parse(localStorage.getItem("addtransaction") || "[]");
      console.log(editdata1[id-1]);
      setAddtransaction(editdata1[id-1])

      console.log("sanjay");
  }
     

}, [])
  // const [id,setId] = useState()
 

  const [alltransaction, setAlltransaction] = useState([]);
  useEffect(() => {
    setAlltransaction(
      JSON.parse(localStorage.getItem("addtransaction") || "[]")
    );
  
  }, []);



  console.log(alltransaction.map((data,index)=>{
        return 
  }));




  const [error, setErrors] = useState({});
  // console.log(error, "vivek");
  const handleInput = (event) => {
    const transactionvalue = {
      ...addtransaction,
      [event.target.name]: event.target.value,
    };
    setAddtransaction(transactionvalue);
    const editvalue = {
      ...addtransaction,
      [event.target.name]: event.target.value,
    };
    setAddtransaction(editvalue);
    console.log(editvalue, "voiveeeee");
    // console.log(setAddtransaction(transactionvalue), "transaction values");
    // console.log(transactionvalue, "trans value");
  };

  const addtransactionsubmit = (event) => {
    event.preventDefault();
    const errors = validation(addtransaction);
    // console.log(editdata.id,"editid");
    if (Object.values(errors).length > 0) {
      // console.log(editdata.state.id,"editid");
      setErrors(validation(addtransaction));
    } else {
      // const data = [...addtransaction]
      // setAddtransaction(addtransaction);
    //   console.log(data[id],"vcvcvcvcvcv");
    //   var get = JSON.parse(localStorage.getItem("addtransaction") || "[]");
    //   console.log(get.id,"vivekkkkkkk");
    //   console.log(get,"vv");
    //    let get1 = get[id]
    
    //   get1.push(addtransaction);
      
    //  console.log(get1.push(addtransaction),"datapush");
    //   // localStorage.setItem('Transaction', JSON.stringify(get));
    //   localStorage.setItem("addtransaction", JSON.stringify(get1));


      var editdata1 =  JSON.parse(localStorage.getItem("addtransaction") || "[]");

      editdata1[addtransaction.id-1]= addtransaction;
console.log(addtransaction.id,"iddd");
       localStorage.setItem('addtransaction', JSON.stringify(editdata1));
      //  console.log(editdata,"dsds");
      navigate("/");

      // if (addtransaction.id === undefined) {
      //   var data =  JSON.parse(localStorage.getItem("addtransaction") || "[]");

      //   var id =  data.length + 1;
     
      //   transaction.id = id;

      //   data.push(addtransaction);
           
      //   localStorage.setItem('Transaction', JSON.stringify(data));
      //   } 
      //   else {

      //       var editdata =  JSON.parse(localStorage.getItem("addtransaction") || "[]");

      //       editdata[transaction.id-1]= transaction;

      //       localStorage.setItem('Transaction', JSON.stringify(editdata));

      //   }

      
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
      console.log(base64, "base64");
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
                  value={addtransaction.transactiondate}
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
                  value={addtransaction.monthyear}
                >
                  <option value="Select Month Year">Select Month Year</option>
                  <option value="Jan 2023">Jan 2023</option>
                  <option value="feb 2023">feb 2023</option>
                  <option value="March 2023">March 2023</option>
                  <option value="April 2023">April 2023</option>
                  <option value="May 2023">May 2023</option>
                  <option value="June 2023">June 2023</option>
                  <option value="July 2023">July 2023</option>
                  <option value="August 2023">August 2023</option>
                  <option value="September 2023">September 2023</option>
                  <option value="October 2023">October 2023</option>
                  <option value="November 2023">November 2023</option>
                  <option value="December 2023">December 20232</option>
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
                  value={addtransaction.transactiontype}
                >
                  <option value="Select Transaction Type">
                    Select Transaction Type
                  </option>
                  <option value="Home Expense">Home Expense</option>
                  <option value="Personal Expense">Personal Expense</option>
                  <option value="Income">Income</option>
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
                  value={addtransaction.fromaccount}
               
                >
                  <option value="Select From Account">
                    Select From Account
                  </option>
                  <option value="Personal Acccount">Personal Acccount</option>
                  <option value="Real Leaving ">Real Leaving </option>
                  <option value="My Dream Home">My Dream Home</option>
                  <option value="Full Circle">Full Circle</option>
                  <option value="Core Realtors">Core Realtors</option>
                  <option value="Big Block">Big Block</option>
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
                  value={addtransaction.toaccount}
                >
                  <option value="Select To Account">Select To Account</option>
                  <option value="Personal Acccount">Personal Acccount</option>
                  <option value="Real Leaving">Real Leaving</option>
                  <option value="My Dream Home">My Dream Home</option>
                  <option value="Full Circle">Full Circle</option>
                  <option value="Core Realtors">Core Realtors</option>
                  <option value="Big Block">Big Block</option>
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
                  type="text"
                  value={addtransaction.amount}
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
                <img src={addtransaction.receipt} className="width"></img>
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
                  value={addtransaction.notes}
                ></input>
                <div>
                  {error.notes && <p className="valicolor">{error.notes}</p>}
                </div>
              </div>
              <div>
                <input className="addtransactionback1" type="submit"></input>

                {/* <p className="addtransactionback" onClick={backtransactionpage}>
                    Back
                  </p>
                 */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Edittransaction;
