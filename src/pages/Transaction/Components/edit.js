import Transactionadd from "./Addtransaction";
import { useEffect } from "react";
import { Formdata } from "../../../Context/context-transaction";
import { useContext } from "react";
 import { useLocation, useNavigate } from "react-router-dom";
 import { transactondataadd } from "../../../store/slices/Tradet";
 import { useSelector } from "react-redux";

const Edittransaction = (index) => {
  const transactiondata = useSelector((state) => state.transactions);

    const navigate = useNavigate();
      const editdata = useLocation(index);
      console.log(editdata.state,"121");
      const id = editdata.state
      var editdata1 = [...transactiondata]
      console.log( editdata1[id-1],"iddd");
      console.log(editdata1," ");
      const index0 = editdata1.findIndex((item) => item.id === id)
      console.log(index0,"index0");
      var editdatavalue = editdata1[index0]
      console.log(editdatavalue,"valuee");
           
  
  
  return(
  
  
    <Transactionadd  all={editdatavalue} />
    
  )
  
  } 
   export default Edittransaction;