let boxes= document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0 = true;//player x , pleyer y

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turn0=true;
    enableboxes();
msgcontainer.classList.add("hide");
}






 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
if(turn0){
    box.innerText=("O");
    turn0= false;
}else{
    box.innerText=("X");
    turn0=true;
}
box.disabled=true;
checkwinner();
    });
 });


const disableboxes =()=>{
    for (let box of boxes){
        box.disabled = true;
    }
}
    const enableboxes =()=>{
        for (let box of boxes){
            box.disabled = false;
            box.innerText="";
        }
}

 const showinner=(winner)=>{
    msg.innerText =`Congratulation! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
 }





 const checkwinner = () =>{
    for(let pattern of winpattern){
       let pos1Val =boxes[pattern[0]].innerText;
       let pos2Val =boxes[pattern[1]].innerText;
       let pos3Val =boxes[pattern[2]].innerText;
      
       if (pos1Val !="" && pos2Val!="" && pos3Val!=""){
        if (pos1Val===pos2Val && pos2Val===pos3Val){
            console.log("winner",pos1Val);
            
            showinner(pos1Val);

        }
       }
    }
 }
 newGameBtn.addEventListener("click",resetgame);
 resetBtn.addEventListener("click",resetgame);

