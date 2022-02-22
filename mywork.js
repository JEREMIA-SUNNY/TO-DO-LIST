const btn = document.querySelector(".btn");
const txt = document.querySelector(".textField");
const adds = document.querySelector(".todolist");
let currenttodo = "";

txt.addEventListener("change", (event) => {

    currenttodo = event.target.value;
    console.log(currenttodo)
});

    btn.addEventListener("click", () => {
        if (currenttodo) {
        console.log(currenttodo + "workig")
        const newElem = document.createElement("div");
        newElem.className = "list-item"
        const newPara = document.createElement("p")
        console.log(currenttodo + "this is  p")
        newPara.innerHTML = currenttodo;



        const btn = document.createElement("button");
        btn.innerHTML = "complete";
        const btnD = document.createElement("button")
        btnD.innerHTML = "Delete";
        btn.className = "listbtn";
        btnD.className = "listbtn";
        btn.addEventListener("click", () => {
            if (newPara.className === "list-comp") newPara.className = ""
            else
                newPara.className = "list-comp";
        })


        btnD.addEventListener("click", () => {

            adds.removeChild(newElem);

        });

        newElem.appendChild(newPara);
        newElem.appendChild(btn);
        newElem.appendChild(btnD);
        adds.appendChild(newElem);
        txt.value="";
        currenttodo=""
    }
    });


