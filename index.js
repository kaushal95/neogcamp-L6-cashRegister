const denoms = [2000, 500, 100, 20, 10, 5, 1];
const billAmountElement = document.querySelector("#bill-amount");

const tableCaptionElement = document.querySelector("caption");
const cashAmountElement = document.querySelector("#cash-amount");

const cashContainerElement = document.querySelector(".cash-container");

const nextBtn = document.querySelector("#next");
const checkBtn = document.querySelector("#check");

const msgElement = document.querySelector("#error-msg");
const tableElement = document.querySelector("table");

hideCashContainer();
hideTable();
hideMsg();

nextBtn.addEventListener("click", () => {
  hideMsg();
  hideCashContainer();
  const billAmount = Number(billAmountElement.value);
  if (!billAmount && billAmount !== 0) {
    showMsg("Bill Amount should be a number");
  } else if (billAmount <= 0) {
    showMsg("Bill Amount should be greater than zero");
  } else {
    hideNext();
    showCashContainer();
  }
});

checkBtn.addEventListener("click", () => {
  hideMsg();
  hideTable();
  const billAmount = Number(billAmountElement.value);
  const cashAmount = Number(cashAmountElement.value);

  if (!billAmount && billAmount !== 0) {
    showMsg("Bill Amount should be a number");
  } else if (billAmount <= 0) {
    showMsg("Bill Amount should be greater than zero");
  } else if (!cashAmount && cashAmount !== 0) {
    showMsg("Cash Amount should be a number");
  } else if (cashAmount < billAmount) {
    showMsg("Bill Amount should be less than cash given");
  } else {
    calculateNotes(billAmount, cashAmount);
    showTable();
  }
});
function calculateNotes(bill, cash) {
  let diffAmount = cash - bill;

  tableCaptionElement.innerText = "Return Change : " + diffAmount + " ✅";
  const tdElement = document.querySelectorAll("td");
  for (let i = 0; i < denoms.length; i++) {
    tdElement[i].innerText = Math.trunc(diffAmount / denoms[i]);
    diffAmount %= denoms[i];
  }
}
function showMsg(msg) {
  msgElement.style.display = "block";
  msgElement.innerText = msg;
}
function hideMsg() {
  msgElement.style.display = "none";
}
function showCashContainer() {
  cashContainerElement.style.display = "block";
}
function hideCashContainer() {
  cashContainerElement.style.display = "none";
}
function showTable() {
  tableElement.style.display = "table";
}
function hideTable() {
  tableElement.style.display = "none";
}
function hideNext() {
  nextBtn.style.display = "none";
}
