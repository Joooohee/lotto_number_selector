const extractButton = document.querySelector("#extraction-number");
const noneNumbers = document.querySelector("#none-numbers");
const lotoNumbers = document.querySelector(".loto-numbers");

const MAX = 45;
const MIN = 1;

// let lotoList = [];

function showNumber() {
    noneNumbers.classList.add("none");
    while ( lotoNumbers.hasChildNodes() ) { 
        lotoNumbers.removeChild( lotoNumbers.firstChild ); 
    }

    const lotoNums =  getLotoNum();
    lotoNums.map((x,i) => {
        if(i === lotoNums.length - 1 ) { 
            const li = document.createElement('li');
            li.classList.add("number","operator");
            li.innerText = "+";
            lotoNumbers.appendChild(li);
        }
        const backColor = getNumberColor(x);
        const li = document.createElement('li');
        li.classList.add("number");
        li.innerText = x;
        li.style.background = backColor;
        lotoNumbers.appendChild(li);      
    })
}

function getNumberColor(index) {
   if(index <= 10) {
      return "#f38f06";
   }else if(index <= 20) {
      return "#1563d6";
   }else if(index <=30) {
      return "#c23b1f";
   }else if(index <=40) {
       return "#575d65";
   }else {
       return "#1faa18";
   }
}

function getLotoNum() {
    const array = [];
    for(let i=0; array.length<6; i++)
    {
        const num = randomNum();
        if(array[array.length -1] !== num)
        {
            array.push(num);
        } 
    }
    return array;
}

function randomNum() {
   const num =  Math.floor(Math.random() * MAX) + MIN;
   return num;
}

function init() {
    extractButton.addEventListener("click",showNumber);

}

init();