let counts = {
    a:1,
    b:1,
    c:1,
    d:1,
    e:1,
    f:1,
    g:1,
    h:1
}

function senddata(data){
    const elements = document.getElementById(data)
    if(counts[data] % 2 !==0){
        elements.style.backgroundColor = "lightgreen"
        
    }
    else{
        elements.style.backgroundColor = "whitesmoke"
        
    }
    counts[data]++
    
}
const moi = document.getElementById("moi")
function submit(){
    
    let cal1 = 15
    let cal2 = 15
    for(let num in counts){
        
        if(counts[num] % 2 ===0){
            switch (num){
                case "a":
                    cal1 = cal1 - 1
                    break;
                case "b":
                    cal1 = cal1 - 2
                    break;
                case "c":
                    cal1 = cal1 - 4
                    break;
                case "d":
                    cal1 = cal1 - 8
                    break;
                case "e":
                    cal2 = cal2 - 1
                    break;
                case "f":
                    cal2 = cal2 -2
                    break;
                case "g":
                    cal2 = cal2 - 4
                    break;
                case "h":
                    cal2 = cal2 - 8
                    break;
                    
            }
        }
    }
    let letterCal2 = '';
    if (cal2 === 10) letterCal2 = "A";
    else if (cal2 === 11) letterCal2 = "B";
    else if (cal2 === 12) letterCal2 = "C";
    else if (cal2 === 13) letterCal2 = "D";
    else if (cal2 === 14) letterCal2 = "E";
    else if (cal2 === 15) letterCal2 = "F";


    let letterCal1 = '';
    if (cal1 === 10) letterCal1 = "A";
    else if (cal1 === 11) letterCal1 = "B";
    else if (cal1 === 12) letterCal1 = "C";
    else if (cal1 === 13) letterCal1 = "D";
    else if (cal1 === 14) letterCal1 = "E";
    else if (cal1 === 15) letterCal1 = "F";


    if (cal1 < 10 && cal2 < 10) {
        moi.textContent = `0x${cal2}${cal1}`;  
    } else if (cal1 >= 10 && cal2 <= 10) {
        moi.textContent = `0x${cal2}${letterCal1}`;
    } else if (cal2 >= 10 && cal1 <= 10) {
        moi.textContent = `0x${letterCal2}${cal1}`;
    } else{
        moi.textContent = `0x${letterCal2}${letterCal1}`;
    }
}





