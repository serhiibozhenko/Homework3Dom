let tableT = document.getElementById("table");
tableT.addEventListener("click", funcClick);

function funcClick(event) {
  let targetClick = event.target;
  let targetClickCont = targetClick.textContent;

  let xTextArea = document.createElement("textarea");
  xTextArea.innerHTML = targetClickCont;
  document.body.append(xTextArea);

  let butSav = document.createElement("button");
  butSav.innerHTML = "Save";
  document.body.append(butSav);

  butSav.addEventListener("click", () => {
    let am = xTextArea.value;
    console.log(am);
    targetClick.textContent = am;
    tableT.parentNode.removeChild(xTextArea);
    tableT.parentNode.removeChild(butSav);
    tableT.parentNode.removeChild(butCanc);
  });

  let butCanc = document.createElement("button");
  butCanc.innerHTML = "Cancel";
  document.body.append(butCanc);

  butCanc.addEventListener("click", () => {
    tableT.parentNode.removeChild(xTextArea);
    tableT.parentNode.removeChild(butSav);
    tableT.parentNode.removeChild(butCanc);
  });

  console.log(targetClickCont);
}
