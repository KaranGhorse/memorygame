/* ****************************************************** */

var scoreCount = 0;

var arr = [
    "assets/Babybear.jpg",
    "assets/TommatoCouple.png",
    "assets/umbrella.jpg",
    "assets/Sherkhan.png",
    "assets/owel.jpg",
    "assets/umbrella.jpg",
    "assets/Burrger.jpg",
    "assets/GreenApple.jpg",
    "assets/RedApple.jpg",
    "assets/TommatoCouple.png",
    "assets/Burrger.jpg",
    "assets/Sherkhan.png",
    "assets/owel.jpg",
    "assets/GreenApple.jpg",
    "assets/Babybear.jpg",
    "assets/RedApple.jpg"
]

function refresh() {
    arr.sort(()=>Math.random()- 0.5)
    
    for (let index = 0; index < arr.length; index++) {
        var back = document.getElementById(`b${index+1}`)
        back.src =`${arr[index]}`;
        }
    }

refresh()
// timer for game
var gameTimeMin = document.getElementById("min")
var gameTimeSec = document.getElementById("sec")
var t=0
var countTime = 0;
function timer() {

    var startTime = setInterval(() => {
        if (countTime < 60) {
            countTime++;
            if (countTime<10) {
                gameTimeSec.innerHTML = ("0"+countTime);
            }else{
            gameTimeSec.innerHTML = countTime;
            }
            
            if (scoreCount == 80) {
                clearInterval(startTime)
            }

        }
        else {
            
            clearInterval(startTime)
            t++
            gameTimeMin.innerHTML=t
            countTime=0
            timer();
            // restart()
        }
    }, 1000);
}
timer()
var resBox = document.getElementById('restart')
var winBox = document.getElementById('win')
var wfinalScore = document.getElementById('Wf-score');
var rfinalScore = document.getElementById('Rf-score');
var over = document.getElementById('over')


function restart() {
    resBox.style.display = 'block';
    over.style.display = 'block';
    rfinalScore.innerText = scoreCount;
}


function Win() {
    var winRate = document.querySelector(".win-rate");
    var starSolid = '<i class="fa-solid fa-star"></i>'
    var starReg = '<i class="fa-regular fa-star"></i>'
    winBox.style.display = 'block';
    over.style.display = 'block';
    wfinalScore.innerText = scoreCount;

    if (miss>=18) {
        winRate.innerHTML=''
        winRate.innerHTML=starSolid;
        for(let i=0;i<4;i++){
            winRate.innerHTML += starReg;
        }
    }
    else if (miss>=14 && miss<18) {
        winRate.innerHTML=''
        for(let i=0;i<2;i++){
            winRate.innerHTML += starSolid;
        }
        for(let i=0;i<3;i++){
            winRate.innerHTML += starReg;
        }
    }
    else if (miss>=9 && miss<14) {
        winRate.innerHTML=''
        for(let i=0;i<3;i++){
            winRate.innerHTML += starSolid;
        }
        for(let i=0;i<2;i++){
            winRate.innerHTML += starReg;
        }
    }
    else if (miss>=7 && miss<9) {
        winRate.innerHTML=''
        for(let i=0;i<4;i++){
            winRate.innerHTML += starSolid;
        }
        for(let i=0;i<1;i++){
            winRate.innerHTML += starReg;
        }
    }
    else{
        winRate.innerHTML=''
        for(let i=0;i<5;i++){
            winRate.innerHTML += starSolid;
        }
      
    }
    
}

// game images open, close, misstakes logic
var game = document.getElementById("game")
var frontimgs = [2];
var backimgs = [2];
var arr = [2]
var flag = 0
game.addEventListener("click", function palat(dets) {
    frontimgs[flag] = document.getElementById(`${dets.target.id}`)
    frontimgs[flag].style.transform = "rotateY(90deg)"
    backimgs[flag] = document.getElementById(`${dets.target.offsetParent.childNodes[0].id}`)
    backimgs[flag].style.transform = "rotateY(0deg)"
    arr[flag] = backimgs[flag].getAttribute("src");
    flag = flag + 1;

    if (flag == 2) {
        closeImg();
    }

})
var miss = 0;
var missVal = document.getElementById("miss-count");
var scoreVal = document.getElementById("score-count");
// console.log(missVal);
function closeImg() {
    setTimeout(() => {
        if (arr[0] == arr[1]) {
            scoreCount += 10;
            if (scoreCount == 80) {
                refresh()
                Win();
            }
            scoreVal.innerText = scoreCount;
        }
        else {
            backimgs[0].style.transform = "rotateY(90deg)"
            backimgs[1].style.transform = "rotateY(90deg)"
            frontimgs[0].style.transform = "rotateY(0deg)"
            frontimgs[1].style.transform = "rotateY(0deg)"
            miss++;
            if (miss<10) {
                missVal.innerText = "0"+miss
            }
            else if (miss>=10 && miss <= 15) {
                missVal.innerText = miss
            }
            else{
                restart();
                refresh();                
            }
        }
        flag = 0
    }, 500);
}
/*********************************************** */

