import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  //alert(inputText);

  const newli = document.createElement("li");
  const newdiv = document.createElement("div");
  newdiv.className = "list-row";
  const newp = document.createElement("p");
  newp.innerText = inputText;
  newp.className = "list-name";

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  const dellButton = document.createElement("button");
  dellButton.innerText = "削除";
  dellButton.addEventListener("click", () => {
    const dellTagetdiv = dellButton.parentNode;
    console.log(dellTagetdiv);
    const dellTagetli = dellTagetdiv.parentNode;
    console.log(dellTagetli);
    document.getElementById("incomplet-list").removeChild(dellTagetli);
  });

  //  console.log(dellButton);

  newdiv.appendChild(newp);
  newdiv.appendChild(completeButton);
  newdiv.appendChild(dellButton);
  newli.appendChild(newdiv);

  document.getElementById("incomplet-list").appendChild(newli);

  //  console.log(newli);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
