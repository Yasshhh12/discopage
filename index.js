
const randomColor = function(){
    const hex = '0123456789ABCDEF';

    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
startChangingColor = function(){

    intervalId = setInterval(changeColor,1000);

    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

stopChangingColor = function(){
    clearInterval(intervalId);
}

document.getElementById('Start').addEventListener('click',startChangingColor);
document.getElementById('Stop').addEventListener('click',stopChangingColor);
