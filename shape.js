const questions=document.getElementById("questions");
const verdict=document.getElementById("correct");
const finalScore=document.getElementById("incorrect");
const score=document.getElementById("score");
const shapes=document.querySelectorAll(".shapes");

let Q=[
        // square
        "Q] What is the name of a regular quadrilateral whose diagonals bisect each other at right angles and are of equal length?",
        "Q] What is the name of the four-sided shape on a chessboard that houses each individual piece?",
        "Q] Which geometric shape is prominently featured in Kazimir Malevich's famous painting 'Black Square'?",
         // circles
        "Q] Which geometric shape is a central element in Wassily Kandinsky's abstract compositions and often symbolizes harmony and infinity in art?",
        "Q] What shape is traditionally used for the design of a clock face?",
        //triangles
        "Q] What shape is commonly used to represent a yield sign in road traffic?",
        "Q] What is the name of a three-sided figure used in chemistry to represent the structure of a molecule?",
        //rectangle
        "Q] What is the name of a quadrilateral with opposite sides that are equal in length and four right angles, but with diagonals that are not necessarily equal?",
        "Q] What is the geometric shape commonly used to describe the layout of DNA sequences in genetic research?",
        "Q] What shape best represents the structure of a bacterial cell when viewed from the top down, considering its morphology and internal organization?"
];
let i=0;
let n=Math.floor(Math.random()*Q.length);
questions.textContent= Q[n];
console.log(n);
function updateQuestion(){
    n=Math.floor(Math.random()*Q.length);
    questions.textContent=Q[n];
}
function updateScore(){
    score.textContent=i;
};
shapes[0].addEventListener("click",()=>{
    if( (questions.textContent===Q[3]) || (questions.textContent==Q[4])){
        verdict.textContent="CORRECT!!!"
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i++;
        updateScore();
 }
else if((questions.textContent===Q[0]) || (questions.textContent==Q[1])||(questions.textContent===Q[2]) || (questions.textContent==Q[5])||(questions.textContent===Q[6]) || (questions.textContent==Q[7])||(questions.textContent===Q[8]) || (questions.textContent==Q[9])){
        verdict.textContent="INCORRECT!!!";
        verdict.style.color="whitesmoke";
        setTimeout(() => {
            verdict.style.opacity = 1;
            setTimeout(() => {
                verdict.style.opacity = 0;
            }, 850);
        }, 100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        
    }
    i--;
    updateScore();
})

shapes[1].addEventListener("click",()=>{
    if( (questions.textContent===Q[7]) || (questions.textContent==Q[8])||(questions.textContent===Q[9])){
        verdict.textContent="CORRECT!!!"
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i++;
        updateScore();
        checkWin();
    }
    else if((questions.textContent===Q[0]) || (questions.textContent==Q[1])||(questions.textContent===Q[2]) || (questions.textContent==Q[3])||(questions.textContent===Q[4]) || (questions.textContent==Q[5])||(questions.textContent===Q[6])){
        verdict.textContent="INCORRECT!!!";
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i--;
        updateScore();
        checkWin();
    }
})
shapes[2].addEventListener("click",()=>{
    if((questions.textContent===Q[0]) || (questions.textContent==Q[1])||(questions.textContent===Q[2])){
        verdict.textContent="CORRECT!!!"
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i++;
        updateScore();
        checkWin();
    }
    else if((questions.textContent===Q[3]) || (questions.textContent==Q[4])||(questions.textContent===Q[5]) || (questions.textContent==Q[6])||(questions.textContent===Q[7]) || (questions.textContent==Q[8])||(questions.textContent===Q[9])){
        verdict.textContent="INCORRECT!!!";
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i--;
        updateScore();
        checkWin();
    }
})
shapes[3].addEventListener("click",()=>{
    if((questions.textContent===Q[5]) || (questions.textContent===Q[6])){
        verdict.textContent="CORRECT!!!"
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i++;
        updateScore();
        checkWin();
    }
    else if((questions.textContent==Q[0])||(questions.textContent===Q[1]) || (questions.textContent==Q[2])||(questions.textContent===Q[3]) || (questions.textContent==Q[4])||(questions.textContent===Q[7]) || (questions.textContent==Q[8])||(questions.textContent===Q[9])){
        verdict.textContent="INCORRECT!!!";
        verdict.style.color="whitesmoke";
        setTimeout(()=>{
            verdict.style.opacity=1;
            setTimeout(()=>{
                verdict.style.opacity=0;
            },850);
        },100);
        setTimeout(()=>{
            updateQuestion();
        },350);
        i--;
        updateScore();
        checkWin();
    }
})
function checkWin(){
    if(i>=5){
        finalScore.textContent="You won!!";
        finalScore.style.opacity=1;
        setTimeout(()=>{
            location.reload();
        },1000);
    }
}
// made some changes in the code here