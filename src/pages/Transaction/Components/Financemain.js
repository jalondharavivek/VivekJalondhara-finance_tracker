import React from "react";
import { useState } from "react";
import "./financemain.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Financetrackerform = () => {
  const [alltransaction, setAlltransaction] = useState([]);
  console.log(alltransaction, "vivekvalue");
  const [order, setOrder] = useState("default");
  const [order1, setOrder1] = useState("default");
  const [search, seatSearch] = useState();
  console.log("datttttttttttttttt length ", alltransaction.length);
  const [filterval, setFilval] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage, "vivek");
  const recordsPerPage = 3;
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(0);
  console.log(page, "vivek3");
  console.log(page, "fgggggggggggggggggg");
  // const records = alltransaction.slice(firstindex, lastindex);

  useEffect(() => {
    const lastindex = currentPage * recordsPerPage;
    const firstindex = lastindex - recordsPerPage;

    if (filterval) {
      const searchdata = alltransaction.filter(
        (item) =>
          item.monthyear.toLowerCase().includes(filterval.toLowerCase()) ||
          item.transactiondate
            .toLowerCase()
            .includes(filterval.toLowerCase()) ||
          item.transactiontype
            .toLowerCase()
            .includes(filterval.toLowerCase()) ||
          item.notes.toLowerCase().includes(filterval.toLowerCase()) ||
          item.fromaccount.toLowerCase().includes(filterval.toLowerCase()) ||
          item.toaccount.toLowerCase().includes(filterval.toLowerCase()) ||
          item.amount.toLowerCase().includes(filterval.toLowerCase())
      );
      setRecords(searchdata.slice(firstindex, lastindex));

      setPage(Math.ceil(searchdata.length / recordsPerPage));
    } else {
      setRecords(alltransaction.slice(firstindex, lastindex));
      setPage(Math.ceil(alltransaction.length / recordsPerPage));
    }
  }, [currentPage, alltransaction, filterval]);

  console.log(records, "dfgf");
  console.log(records, "yeryyyyyyyyyyyyyy");
  console.log(page, "ffffffffffffffffffffffffffffff");
  const number = [...Array(page + 1).keys()].slice(1);
  console.log(number, "sfaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  const navigate = useNavigate();

  const [data1, setData] = useState([]);
  console.log(data1, "inittt");
  const addtransaction = () => {
    navigate("/addtransaction");
  };
  console.log(data1, "array of object");
  useEffect(() => {
    setAlltransaction(
      JSON.parse(localStorage.getItem("addtransaction") || "[]")
    );
    setData(JSON.parse(localStorage.getItem("addtransaction") || "[]"));
  }, []);

  // const datagrph = (event) => {
  //   console.log(event,"vivek valyueeeee");
  //   const transactionvalue = {
  //     ...grpby,
  //     [event.target.name]: event.target.value,
  //   };
  //   setgrpby(datagrp(transactionvalue));
  // };

  // function handleSearchClick() {
  //   const key = {
  //     monthyear: "monthyear",
  //     transactiondate: "transactiondate",
  //     transactiontype: "transactiontype",
  //     amount: "amount",
  //   };
  //   // console.log(searchVal);
  //   if (searchVal === "") {
  //     setData(alltransaction);
  //     return;
  //   }
  //   const filterBySearch = data1.filter((key) => {
  //     if (key.toLowerCase().includes(searchVal.toLowerCase())) {
  //       return key;
  //     }
  //   });
  //   setData(filterBySearch);
  // }

  const datagrph = (val) => {
    const p = val.target.value;
    if (p === "None") {
      const GROUPBY1 = [...records];
      // console.log("vivekkkk", GROUPBY1);
      setData(GROUPBY1);
    } else {
      // console.log("valll", p, "vvdvsvsvsvsv");
      const GROUPBY = [...alltransaction];
      // console.log(GROUPBY, "valueeeeeee");
      const key = {
        monthyear: "monthyear",
        transactiondate: "transactiondate",
        transactiontype: "transactiontype",
        amount: "amount",
      };
      let cats = GROUPBY.reduce((datagroupby, key) => {
        (datagroupby[key[p]] = datagroupby[key[p]] || []).push(key);

        return datagroupby;
      }, {});

      setData(cats);
      // console.log(cats, "dgdg");
      // console.log("heeeeee", cats);
      // console.log(datagrp, "vviviviviv");
    }
  };

  // console.log(datagrp, "onnnnn");

  const sortdatacolumn = (col) => {
    console.log(col, "1212");
    if (order === "default") {
      // console.log(col, "dtaaaaaa");
      const sorted = [...records].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      const lastindex = currentPage * recordsPerPage;
      const firstindex = lastindex - recordsPerPage;
      setRecords(sorted.slice(firstindex, lastindex));
      // console.log(sorted, "dtaaaaaa");
      // setRecords(sorted);
      setOrder("DSC");
    } else if (order === "DSC") {
      // console.log(col, "dtaaaaaa");
      const sorted = [...records].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      const lastindex = currentPage * recordsPerPage;
      const firstindex = lastindex - recordsPerPage;
      setRecords(sorted.slice(firstindex, lastindex));
      // console.log(sorted, "dtaaaaaa");
      // setRecords(sorted);
      setOrder("fordefault");
    } else if (order === "fordefault") {
      // console.log(col, "dtaaaaaa");
      // const sorted = [...alltransaction]
      // console.log(sorted, "dtaaaaaa");
      const lastindex = currentPage * recordsPerPage;
      const firstindex = lastindex - recordsPerPage;
      setRecords(
        JSON.parse(localStorage.getItem("addtransaction") || "[]").slice(
          firstindex,
          lastindex
        )
      );
      setOrder("default");
    }

    // for (let key of Object.keys(sorted)) {
    //   console.log(key);
    //   return [key, sorted[key]];

    // }
    // console.log(sorted,"sfsfsfsf");
    // const conv = Object.keys(sorted)
    // console.log(conv,"vvvvvv");
    // conv.map((d,e)=>{
    //   d.map((a,b) => {

    //     console.log(a,"vvvvvvvvvvv");
    //   });
    // })
    // console.log(conv,"object of arrrrrrr");
  };
  const changepage = (id) => {
    setCurrentPage(id);
  };
  const sortdatacolumn1 = (col, item) => {
    const sorted = { ...data1 };
    // console.log( item,col,"segggsg");
    // console.log("firsttttt", sorted);
    //  console.log("ddvdvgd",Object.keys(data1));
    // Object.keys(data1).map((a,b)=>{

    // console.log("vvvvvvv", data1[a]);
    [addtransaction[item]].map((d, e) => {
      if (order1 === "default") {
        const st = d.sort((p, q) =>
          p[col].toLowerCase() > q[col].toLowerCase() ? 1 : -1
        );
        // console.log( "dtaaaaaa");
        setData(st);
        setOrder1("DSC");
        // console.log(st,"gdgdgdg");
      }
    });

    // })
    // console.log("aonly",Object.keys(sorted));
    //  console.log("bonly"onl");

    // if (order === "default") {
    //   const sorted = [data1].sort((a, b) =>
    //     Object.keys(a[col].toLowerCase()) > Object.keys(b[col].toLowerCase())
    //       ? 1
    //       : -1
    //   );
    //   console.log(sorted, "dtaaaaasssa");
    //   console.log(data1, "dtaaaaaa");
    //   setAlltransaction(sorted);
    //   setOrder("DSC");
    // }
  };
  const editdata = (AddTransaction, i, ireceipt) => {
    console.log("traaaaa", AddTransaction, i, ireceipt, "view details");
    navigate(`/transaction/edit/${AddTransaction.id}`, {
      state: AddTransaction.id,
      AddTransaction,
      i,
    });
  };
  const viewd = (AddTransaction, i, ireceipt) => {
    console.log("bbbbbbbbb", AddTransaction.id, ireceipt, "view details");
    navigate(`/transaction/view/${AddTransaction.id}`, {
      state: AddTransaction,
      i,
    });
  };

  return (
    <div className="maindisplay">
      <div className="financetrackerheading">
        <span className="headingfinancetracker">Finance Tracker</span>
      </div>
      <div className="addandgroupby">
        <div>
          <p className="addtransaction" onClick={addtransaction}>
            ADD +
          </p>
        </div>
        <input
          value={filterval}
          onInput={(e) => setFilval(e.target.value)}
        ></input>
        <div>
          <span>Group By : </span>
          <select name="groupbya" onInput={(event) => datagrph(event)}>
            <option value="None">None</option>
            <option value="monthyear">monthyear</option>
            <option value="transactiondate">transactiondate</option>
            <option value="amount">Amount</option>
            <option value="transactiontype">transactiontype</option>
          </select>
        </div>
      </div>
      {Array.isArray(data1) ? (
        <div className="Tablefinancem">
          <table class="vvv">
            <tr>
              <th>id</th>
              <th onClick={() => sortdatacolumn("transactiondate")}>
                Transaction Date{" "}
                {order === "default" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}{" "}
              </th>
              <th onClick={() => sortdatacolumn("monthyear")}>
                Month Year{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}{" "}
              </th>
              <th onClick={() => sortdatacolumn("transactiontype")}>
                Transacton Type{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("fromaccount")}>
                From Account{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("toaccount")}>
                To Acccount{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("amount")}>
                Amount{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("receipt")}>
                Receipt{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th onClick={() => sortdatacolumn("notes")}>
                Notes{" "}
                {order === "ASC" ? (
                  <i class="arrow up"></i>
                ) : (
                  <i class="arrow down"></i>
                )}
              </th>
              <th>Action </th>
              <th>Action </th>
            </tr>

            {records.map((addtransaction, index) => (
              <tr key={index}>
                <td>{index}</td>
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
                <td
                  onClick={() =>
                    viewd(addtransaction, index, addtransaction.receipt)
                  }
                >
                  View
                </td>
                <td
                  onClick={() =>
                    editdata(addtransaction, index, addtransaction.receipt)
                  }
                >
                  edit
                </td>
              </tr>
            ))}
          </table>
          <nav>
            <ul className="paggination">
              {/* {           number.map((n,i)=>{

<select>
  <option key={i}>
    {n}
  </option>
</select>

})
} */}
              <li className="page-item1">
                <a href="#" className="page-link">
                  previous
                </a>
              </li>

              {number.map((n, i) => (
                <li className="page-item" key={i}>
                  <a
                    onClick={() => changepage(n)}
                    className="page-item1"
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
      ) : (
        <div>
          <div className="Tablefinancem">
            {/* {Object.keys(data1).map((item, index) =>
            data1[item].map((groupbydata) => (
              <table>
                <tr key={index}>
                  <th>Transaction Date</th>
                  <th>Month year</th>
                  <th>transactiontype</th>
                  <th>fromaccount</th>
                  <th>toaccount</th>
                  <th>amount</th>
                  <th>notes</th>
                </tr>
                <tr>
                  <td>{groupbydata.transactiondate}</td>
                  <td>{groupbydata.monthyear}</td>
                  <td>{groupbydata.transactiontype}</td>
                  <td>{groupbydata.fromaccount}</td>
                  <td>{groupbydata.toaccount}</td>
                  <td>{groupbydata.amount}</td>
                  <td>{groupbydata.notes}</td>
                </tr>
              </table>
            ))
          )} */}
            {Object.keys(data1).map((item, index) => (
              <table className="vvv">
                <div className="groupbyrow">
                  <tr className="itemd" key={index}>
                    {item}
                  </tr>
                </div>
                <tr key={index}>
                  <th> Transaction Date </th>
                  <th>Month year</th>
                  <th>transactiontype</th>
                  <th>fromaccount</th>
                  <th>toaccount</th>
                  <th>amount</th>
                  <th onClick={() => sortdatacolumn1("notes", item)}>notes</th>
                </tr>

                {data1[item].map((groupbydata, key) => (
                  <tr key={key}>
                    <td>{groupbydata.transactiondate}</td>
                    <td>{groupbydata.monthyear}</td>
                    <td>{groupbydata.transactiontype}</td>
                    <td>{groupbydata.fromaccount}</td>
                    <td>{groupbydata.toaccount}</td>
                    <td>
                      {" "}
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        groupbydata.amount
                      )}
                    </td>
                    <td>{groupbydata.notes}</td>
                  </tr>
                ))}
              </table>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Financetrackerform;
