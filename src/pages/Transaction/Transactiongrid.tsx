import React from "react";
import { useState } from "react";

import "../../assets/style/Finance.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { deletetransactiondata } from "../../../src/store/slice/transactionsl";
import { useDispatch } from "react-redux";
// import { number, number } from "yup";

// import AddTransaction from "./Addtransaction";
const Financetrackerform = (prop: any) => {
  console.log(prop, "prop");

  const [alltransaction, setAlltransaction] = useState([]);
  const [sortprevalue, setPrevalue] = useState("");
  const [order, setOrder] = useState(0);

  const [shorto, setShorto] = useState("");
  const [shortonum, setShortonum] = useState("");
  const [filterval, setFilval] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [] = useState(0);
  const recordsPerPage = 3;
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(0);
  const dispatch: any = useDispatch();

  useEffect(() => {
    const lastindex = currentPage * recordsPerPage;
    const firstindex = lastindex - recordsPerPage;

    let data = [];

    console.log("order=", order);
    if (filterval) {
      const searchdata = alltransaction.filter((item: any) => {
        console.log(item.amount,"item");
        
        return (
          item.monthyear.toLowerCase().includes(filterval?.toLowerCase()) ||
          item.transactiontype
            .toLowerCase()
            .includes(filterval?.toLowerCase()) ||
          item.notes.toLowerCase().includes(filterval?.toLowerCase()) ||
          item.fromaccount.toLowerCase().includes(filterval?.toLowerCase()) ||
          item.toaccount.toLowerCase().includes(filterval?.toLowerCase())
        ||
           item.amount.toString().toLowerCase().includes(filterval?.toLowerCase())

       
        
        );
      });
      data = searchdata;
    } else {
      data = alltransaction;
    }
if(filterval){
}
    if (shorto) {
      const col = shorto;

      if (order === 1) {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
        );
        data = sorted;
      } else if (order === 2) {
        const sorted = [...data].sort((a: any, b: any) =>
          a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        );
        data = sorted;
      }
    }
    if (shortonum) {
      if (order === 1) {
        const sorted = [...data].sort((a: any, b: any) => a[shorto]?.amount - b[shorto]?.amount);
        data = sorted;
      } else if (order === 2) {
        const sorted = [...data].sort((a: any, b: any) => b[shorto].amount - a[shorto].amount);
        data = sorted;
      }
    }

    setRecords(data?.slice(firstindex, lastindex));
    setPage(Math.ceil(data?.length / recordsPerPage));
  }, [currentPage, alltransaction, filterval, shorto, order]);

  const number = [...Array(page + 1).keys()].slice(1);

  const navigate = useNavigate();


  useEffect(() => {
    setAlltransaction(prop.all);
  }, [prop]);

  //   // for (let key of Object.keys(sorted)) {
  //   //   return [key, sorted[key]];

  const shortfun = (sort: any) => {
    console.log("sortprevalue=", sortprevalue);
    console.log("sort", sort);
    if (sortprevalue === "") {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue === sort) {
      if (order === 1) {
        setOrder(2);
      } else if (order === 2) {
        setOrder(0);
      } else {
        setOrder(1);
      }

      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue !== sort) {
      setOrder(1);
      setShorto(sort);
      setPrevalue(sort);
    } else {
      setOrder(0);
      setShorto(sort);
      setPrevalue(sort);
    }
  };

  const numericamount = (sort: any) => {
    console.log("sortprevalue=", sortprevalue);
    console.log("sort", sort);
    if (sortprevalue === "") {
      setOrder(1);
      setShortonum(sort);
      setPrevalue(sort);
    } else if (sortprevalue === sort) {
      if (order === 1) {
        setOrder(2);
      } else if (order === 2) {
        setOrder(0);
      } else {
        setOrder(1);
      }

      setShorto(sort);
      setPrevalue(sort);
    } else if (sortprevalue !== sort) {
      setOrder(1);
      setShortonum(sort);
      setPrevalue(sort);
    } else {
      setOrder(0);
      setShortonum(sort);
      setPrevalue(sort);
    }
  };

  // };
  const changepage = (id: number) => {
    setCurrentPage(id);
  };

  const editdata = (AddTransaction: any, i: any, ireceipt: any) => {
    navigate(`/transaction/edit/${AddTransaction.id}`, {
      state: AddTransaction.id,
      //   AddTransaction
    });
  };
  const viewd = (AddTransaction: any) => {
    navigate(`/transaction/view/${AddTransaction.id}`, {
      state: AddTransaction,
    });
  };
  function deleterecord(delet_id: number) {
    console.log(delet_id, "delet_id");
    //  let deletedata = [...datastate];

    // let filterdata = deletedata.filter(item => item.id !== delet_id)
    dispatch(
      deletetransactiondata(
        delet_id,
      )
    );
    //  setDatastate(filterdata)
  }
  // function deleterecord(delet_id) {
  //   setDelet(delet_id);
  //   console.log(delet_id, "delet_id");
  //   let deletedata = [...prop.all];
  //   console.log(deletedata, "prop");
  //   let filterdata = deletedata.filter((item) => item.id !== delet_id);

  //   console.log(filterdata, "vv");
  //   setDatastate(filterdata);
  // }
  return (
    <div className="maindisplay">
      <div className="addandgroupby">
        <label>Search :</label>{" "}
        <input
          value={filterval}
          onInput={(e: any) => setFilval(e.target.value)}
        ></input>
      </div>

      <div className="Tablefinancem">
        <table className="vvv">
          <thead>
            <tr>
              <th>id</th>
              <th onClick={() => shortfun("transactiondate")}>
                Transaction Date{" "}
              </th>
              <th
                onClick={() => {
                  shortfun("monthyear");
                }}
              >
                Month Year{" "}
              </th>
              <th onClick={() => shortfun("transactiontype")}>
                Transacton Type{" "}
              </th>
              <th onClick={() => shortfun("fromaccount")}>From Account </th>
              <th onClick={() => shortfun("toaccount")}>To Acccount </th>
              <th onClick={() => numericamount("amount")}>Amount </th>
              <th onClick={() => shortfun("receipt")}>Receipt </th>
              <th onClick={() => shortfun("notes")}>Notes </th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {records.map((addtransaction: any, index) => (
              <tr key={index}>
                <td>{addtransaction.id}</td>
                <td>{addtransaction.transactiondate} </td>
                <td>{addtransaction.monthyear}</td>
                <td>{addtransaction.transactiontype}</td>
                <td>{addtransaction.fromaccount}</td>
                <td>{addtransaction.toaccount}</td>
                <td>
                  ₹{" "}
                  {new Intl.NumberFormat("en-IN").format(addtransaction.amount)}
                </td>
                <td>
                  <img src={addtransaction.receipt} className="imgwidth" />
                </td>
                <td>{addtransaction.notes}</td>
                <td>
                  {" "}
                  <p
                    className="actionbutton"
                    onClick={() =>
                      viewd(addtransaction)
                    }
                  >
                    View
                  </p>
                  <p
                    className="actionbutton"
                    onClick={() =>
                      editdata(addtransaction, index, addtransaction.receipt)
                    }
                  >
                    edit{" "}
                  </p>
                  <p
                    className="actionbutton"
                    onClick={() => deleterecord(addtransaction.id)}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="paggination">
            <li className="page-item1">
              <a className="page-link">previous</a>
            </li>

            {number.map((n: any, i: any) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  className={`page-item page-item1 ${
                    currentPage === n ? "active" : ""
                  }`}
                  onClick={() => changepage(n)}
                  href="#"
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item1">
              <a href="#" className="page-link">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Financetrackerform;
