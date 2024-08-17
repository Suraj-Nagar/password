// let stringg = '1234567890!@#$%^&*()-_=+[]{};:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
// const getv=document.getElementById('comments');
// let result='';
// function generateR(){
//     const count=getv.value;
//     result='';
//     const strlen=stringg.length;
//     for(let i=0;i<=count;i++){
//         const randomnumber=Math.floor(Math.random() * strlen);
//         result += stringg[randomnumber];
//     }
//     document.getElementById('resul').textContent=`${result}`;
// }
// const up='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// const lo='abcdefghijklmnopqrstuvwxyz';
// const nu='1234567890';
// const sy='!@#$%^&*()-_=+[]{};:,.<>?/';
// const upper=document.getElementById('upper');
// const lower=document.getElementById('lower');
// const number=document.getElementById('number');
// const symbol=document.getElementById('symbol');

// upper.disabled = !/[A-Z]/.test(result);
// lower.disabled = !/[a-z]/.test(result);
// number.disabled = !/[0-9]/.test(result);
// symbol.disabled = !/[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]/.test(result);
let stringg = '1234567890!@#$%^&*()-_=+[]{};:,.<>?/ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const getv = document.getElementById('comments');

function generateR() {
  let result = ''; // Reset result
  const count = parseInt(getv.value) || 0;
  const strlen = stringg.length;

  for (let i = 0; i < count; i++) {
    const randomnumber = Math.floor(Math.random() * strlen);
    result += stringg[randomnumber];
  }
  
  document.getElementById('resul').textContent = result;

  // Check and enable checkboxes based on the result
  const upper = document.getElementById('upper');
  const lower = document.getElementById('lower');
  const number = document.getElementById('number');
  const symbol = document.getElementById('symbol');
  

  upper.checked = /[A-Z]/.test(result);
  lower.checked = /[a-z]/.test(result);
  number.checked = /[0-9]/.test(result);
  symbol.checked = /[!@#$%^&*()_+\-=\[\]{};:'",.<>\/?]/.test(result);
}
function copyToClipboard() {
    const resultText = document.getElementById('resul').textContent;
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(resultText)
        .then(() => {
          alert('Copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
     } 
  }