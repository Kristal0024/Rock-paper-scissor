const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const usersscore=document.querySelector(".userscore");
const computerscore=document.querySelector(".computerscore");

let userscore=0;
let compscore=0;

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice =choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});
const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice=gencomputerchoice();
    console.log("computer choice =",compchoice);
    if(userchoice===compchoice){
        msg.innerText="Draw, make another move";
        msg.style.backgroundColor="";
    }else{
        let userwin=true;
    if(userchoice==="Rock"){
        userwin=compchoice==="Paper"?false:true;
    }else if(userchoice==="Paper"){
        userwin=compchoice==="Scissor"?false:true;
    }else {
        userwin=compchoice==="Rock"?false:true;
    }
    showwinner(userwin, userchoice, compchoice);
    }
};

const gencomputerchoice=()=>{
    const options=["Rock" , "Paper" , "Scissor"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        msg.innerText=`You Won! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        usersscore.innerText=userscore;
    }else{
        msg.innerText=`You lose! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="Red";
        compscore++;
        computerscore.innerText=compscore;
    }
}