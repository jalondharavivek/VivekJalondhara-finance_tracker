
export const validation = (addtransaction) => {
    const error = {};
    // console.log(addtransaction.notes.length, "valueeeeee");
    // console.log(addtransaction, "addtransaction values in validation");
    // console.log(new Intl.NumberFormat("en-IN").format(addtransaction.amount));
    const currentdate = new Date();

    if (addtransaction.transactiondate === "") {
      error.transactiondate = "Enter A Transaction Date";
    } else if (addtransaction.transactiondate > currentdate.toISOString()) {
      error.transactiondate = "Enter A Valid Transaction Date";
    }

    if (
      addtransaction.monthyear === "" ||
      addtransaction.monthyear === "Select Month Year"
    ) {
      error.monthyear = "Select Month Year";
    }

    if (
      addtransaction.transactiontype === "" ||
      addtransaction.transactiontype === "Select Transaction Type"
    ) {
      error.transactiontype = "Select Transaction Type";
    }
    if (
      addtransaction.fromaccount === "" ||
      addtransaction.fromaccount === "Select From Account"
    ) {
      error.fromaccount = "Select From Account";
    }
    if (
      addtransaction.toaccount === "" ||
      addtransaction.toaccount === "Select To Account"
    ) {
      error.toaccount = "Select To Account";
    } else if (addtransaction.toaccount === addtransaction.fromaccount) {
      error.toaccount = "Select To and From Diffrent Account";
    }

    if (addtransaction.amount <= 0) {
      error.amount = "Enter Valid amount";
    }
    if (addtransaction.receipt === "") {
      error.receipt = "Upload Receipt";
    }
    //  else if (!addtransaction.receipt.match(/(\.jpg|\.jpeg|\.png|\.gif)$/i)
    // ) {
    //   error.receipt = "Upload Only jpg/jpeg/png/gif file";
    // }
    if (addtransaction.notes.trim() === "") {
      error.notes = "Enter A Notes";
    } else if (addtransaction.notes.length >= 251) {
      error.notes = "Notes less Than 250 char";
    }
    return error;
  };
