const extractButton = document.querySelector("#extraction-number");
const noneNumbers = document.querySelector("#none-numbers");
const lotoNumbers = document.querySelector(".loto-numbers");

const MAX = 45;
const MIN = 1;

// let lotoList = [];

function showNumber() {
    noneNumbers.classList.add("none");
    while ( lotoNumbers.hasChildNodes() ) { lotoNumbers.removeChild( lotoNumbers.firstChild ); }

    const lotoNums =  getLotoNum();
    lotoNums.map((x,i) => {
        const li = document.createElement('li');
        li.classList.add("number");
        li.innerText = x;
        setTimeout(lotoNumbers.appendChild(li),30000);
        
    }
       
        )
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