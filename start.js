let boxes= document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Resetbtn");
let newbtnn = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#messg");

let turn0= true;

const winpatterns= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        
        if (turn0){
            box.innerText = "O";
            turn0=false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const showwinner =(winner)=>{
    msg.innerHTML = `Congratulations...The winner is.... ${winner}`;
    disableboxe();
    msgcontainer.classList.remove("hide");
}

const checkwinner = () => {
    for(pattern of winpatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1!=""&& pos2!=""&&pos3!=""){
            if(pos1==pos2&&pos2==pos3){
                console.log("winner",pos1);
                showwinner(pos1);

            }
        }
    }
}
const disableboxe =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxe =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
    }
}

const resetgame =() =>{
    turn0=true;
    enableboxe();
    msgcontainer.classList.add("hide")
}

newbtnn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
