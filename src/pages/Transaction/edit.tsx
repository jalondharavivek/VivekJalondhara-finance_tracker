import Transactionadd from "./addtransaction";
 import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Edittransaction = ()  => {
  const transactiondata = useSelector((state : any) => state.transactions);
const params = useParams()
console.log(params.id,"id");
  
    //   /const editdata = useLocation(index);
    //   console.log(editdata.state,"121");
      const id : any = params.id
      console.log(id,"editid");
      const editvalueid =  id - 1 
      var editdata1 = [...transactiondata]
    //   console.log( editdata1[id-1],"iddd");
    //   console.log(editdata1," ");
      const editdatavalue = editdata1[editvalueid]
    //   /.findIndex((item) => item.id === id)
    //   console.log(index0,"c");
    //   var editdatavalue = editdata1[index0]
      console.log(editdatavalue,"editvalue");
      
      console.log(editdatavalue,"valuee");
           
  
  
  return(
  
  
    <Transactionadd  all={editdatavalue} />
    
  )
  
  } 
   export default Edittransaction;