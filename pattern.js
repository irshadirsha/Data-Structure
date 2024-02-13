// for(let i = 0; i < 5; i++) {
//     let row = '';
//     for(let j = 0; j < 5 - i - 1; j++) {
//         row += ' ';
//     }
//     for(let k = 0; k <= i; k++) {
//         row += '*';
//     }
//     console.log(row); 
// }


for(let i=0;i<5;i++){
    let row=""
    for(j=0;j<5-i-1;j++){
        row+=" "
    }
    for(let k=0;k<=i;k++){
        row+=k+1
        row+=" "
    }
    console.log(row)
}