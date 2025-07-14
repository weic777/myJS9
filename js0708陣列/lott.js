// 排序前
let sortBefore = document.getElementById("sortBefore");
// 排序後
let sortAfter = document.getElementById("sortAfter");
// 第二區號碼
let secNo = document.getElementById("secNo");

// 威力彩

function lott1(){
    // 第一區:1-38取6
    // 建立存放號碼的空陣列
    let lott=[];
    
    // while
    while(1){
        if(lott.length == 6){
            break;
        }
        // 亂數取號碼
        let lottNo=Math.floor(Math.random()*38)+1;
        if(lott.includes(lottNo) == false){//沒有重複
            lott.push(lottNo);
        }
    }



    // 未排序
    sortBefore.textContent='排序前號碼:'+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
        sortAfter.textContent='排序前號碼:'+lott;

    // 第二區:1-8取1
    secNo.textContent="第二區號碼:"+(Math.floor(Math.random()*8)+1);
}

// 大樂透
function lott2(){
    // 第一區:1-49取6
    // 建立存放號碼的空陣列
    let lott=[];
    
    // while
    while(1){
        if(lott.length == 7){
            break;
        }
        // 亂數取號碼
        let lottNo=Math.floor(Math.random()*49)+1;
        if(lott.includes(lottNo) == false){//沒有重複
            lott.push(lottNo);
        }
    }
    // 取出陣列最後一個值後，並移除
    secNo.textContent="特別號:"+lott.pop();

    // 未排序
    sortBefore.textContent='排序前號碼:'+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
        sortAfter.textContent='排序前號碼:'+lott;
}

// 大樂透
function lott3(){
    // 第一區:1-39取5
    // 建立存放號碼的空陣列
    let lott=[];
    
    // while
    while(1){
        if(lott.length == 5){
            break;
        }
        // 亂數取號碼
        let lottNo=Math.floor(Math.random()*39)+1;
        if(lott.includes(lottNo) == false){//沒有重複
            lott.push(lottNo);
        }
    }

    // 未排序
    sortBefore.textContent='排序前號碼:'+lott;

    // 排序
    lott.sort((a,b)=>{
        return a-b;
    })
        sortAfter.textContent='排序前號碼:'+lott;
    // 今彩沒有第二區，所以要清除
    secNo.textContent="";
    }