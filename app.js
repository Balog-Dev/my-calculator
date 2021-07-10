const displayE1 = document.querySelector('.display-1')
const displayE2 = document.querySelector('.display-2')
const tempResultE1 = document.querySelector('.temp-result')
const numberE1 = document.querySelectorAll('.number')
const operationE1 = document.querySelector('.operation')
const equalE1 = document.querySelector('.equal')
const clearE1 = document.querySelector('.all-clear')
const clearLastE1 = document.querySelector('.last-entity-clear')

let dis1Num = '';
let dis2Num = '';
let result = 'null';
let lastOperation = '';
let haveDot = 'false';

numberE1.forEach(number => {
    number.addListener('click', (e) =>{
        if( e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if( e.target.innerText === '.'&& !haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        displayE1.innerText = dis2Num;
    })
});

operationE1.forEach( operation => {
    operation.addListener('click', (e)=>{
        if(!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result = parseFloat{dis2Num};
            console.log(result);
        }
    }

    )
}
     
)