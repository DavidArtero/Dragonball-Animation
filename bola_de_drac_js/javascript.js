navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        
    var x = document.getElementById("audio"); 
    x.play();
 
     // stop microphone stream acquired by getUserMedia
     stream.getTracks().forEach(function (track) { track.stop(); });
 });



//CountDown
window.onload = Show_Countdown;
var counter = 3;

function Show_Countdown() {

    var countDown_overlay = 'position:absolute;' +
        'top:50%;' +
        'left:50%;' +
        'z-index:1002;' +
        'overflow:auto;' +
        'width:400px;' +
        'text-align:center;' +
        'height:400px;' +
        'margin-left:-200px;' +
        'margin-top:-200px';

    $('body').append('<div id="overLay" style="' + countDown_overlay + '"><span id="time"></span></div>');

    var timer = setInterval(function () {
        document.getElementById("time").innerHTML = counter;
        counter = (counter - 1);

        if (counter < 0) 
        {            
            clearInterval(timer);
            document.getElementById("overLay").style.display = 'none';
            document.getElementById("examplecontent").style.display = 'none';
        }

    }, 1000);
}


//kamehame attack sound
function PlaySound(melody) {
    var path = "audio/"
    var snd = new Audio(path + melody + ".mp3");
    snd.play();
}


//Goku
function gokuMoviment(){
    let goku = document.getElementById('characGoku');
    var position = 0;
    let intervaloGoku = setInterval(movement,0.1);
    let finalMovement = false;
    
    function movement(){
        gokuGirar();
        if(position<=100 && finalMovement == false){
            position++;
        goku.style.marginLeft = position +'px';
        }
        else{
            finalMovement = true;
            
        }if(finalMovement==true && position>0){
            position--;
            goku.style.marginLeft =  +'px';
        }else{
            if(position == 0){
                clearInterval(intervaloGoku);
            }
        }
    }
}

function gokuGirar(){
    let goku = document.getElementById('characGoku');
    goku.setAttribute("style", "transform: rotate(" + -20 + "deg)");
    setTimeout(function(){
        goku.setAttribute("style", "transform: rotate(" + 0 + "deg)"); 
        }, 1000);
}


/*attack goku*/
function gokuAttack(){
    funcioAttackGoku();
    PlaySound('kamehame');
}

function check() {
    document.getElementById("myCheck").checked = true;
}


function myTimer() {

    document.getElementById("myCheck").checked = false;
}

var myVar = setInterval(myTimer, 3500);


function funcioAttackGoku() {
    check();
    myVar;
  }

/*attack Gohan*/
  function gohanAttack(){
    funcioAttackGohan();
    PlaySound('kamehame');
}

function check2() {
    document.getElementById("myCheck2").checked = true;
}


function myTimer2() {

    document.getElementById("myCheck2").checked = false;
}

var myVar2 = setInterval(myTimer2, 3500);


function funcioAttackGohan() {
    check2();
    myVar2;
  } 

  //Girar Gohan
  function gohanMoviment(){
    let gohan = document.getElementById('characGohan');
    var posit = 0;
    let intervalGohan = setInterval(movement,0.1);
    let finalMovement = false;
    
    function movement(){
        gohanGirar();
        if(posit<=100 && finalMovement == false){
            posit++;
            gohan.style.marginLeft = position +'px';
        }
        else{
            finalMovement = true;
            
        }if(finalMovement==true && posit>0){
            posit--;
            gohan.style.marginLeft = posit +'px';
        }else{
            if(posit == 0){
                clearInterval(intervalGohan);
            }
        }
    }
}

function gohanGirar(){
    let gohan = document.getElementById('characGohan');
    gohan.setAttribute("style", "transform: rotate("+  -50+ "deg)");
    setTimeout(function(){
        gohan.setAttribute("style", "transform: rotate(" + 0 + "deg)"); 
        }, 1200);
}



/*attack Trunks*/
function trunksAttack(){
    funcioAttackTrunks();
    PlaySound('kamehame');
}

function check3() {
    document.getElementById("myCheckTrunks").checked = true;
}


function myTimer3() {

    document.getElementById("myCheckTrunks").checked = false;
}

    var myVar3 = setInterval(myTimer3, 3500);


function funcioAttackTrunks() {
    check3();
    myVar3;
  } 

  //Girar Trunks
  function trunksMoviment(){
    let trunks = document.getElementById('characTrunks');
    var posit = 0;
    let intervalTrunks = setInterval(movement,0.1);
    let finalMovement = false;
    
    function movement(){
        trunksGirar();
        if(posit<=100 && finalMovement == false){
            posit++;
            trunks.style.marginLeft = position +'px';
        }
        else{
            finalMovement = true;
            
        }if(finalMovement==true && posit>0){
            posit--;
            trunks.style.marginLeft = posit +'px';
        }else{
            if(posit == 0){
                clearInterval(intervalTrunks);
            }
        }
    }
}

function trunksGirar(){
    let trunks = document.getElementById('characTrunks');
    trunks.setAttribute("style", "transform: rotate("+  -50+ "deg)");
    setTimeout(function(){
        trunks.setAttribute("style", "transform: rotate(" + 0 + "deg)"); 
        }, 1200);
}


/*attack Vegeta*/
function vegetaAttack(){
    funcioAttackVegeta();
    PlaySound('kamehame');
}

function check4() {
    document.getElementById("myCheckVegeta").checked = true;
}


function myTimer4() {

    document.getElementById("myCheckVegeta").checked = false;
}

function check5() {
    document.getElementById("myCheckVegeta3").checked = true;
}

    var myVar4 = setInterval(myTimer4, 3500);

function myTimer5() {

        document.getElementById("myCheckVegeta3").checked = false;
    }

    var myVar5 = setInterval(myTimer5, 4500);


function funcioAttackVegeta() {
    check4();
    myVar4;
    
    check5();
    myVar5;
  } 

  //Girar Vegeta (aquest el deixo així aposta perquè queda top)
  function vegetaMoviment(){
    let vegeta = document.getElementById('characVegeta');
    var posit = 0;
    let intervalVegeta = setInterval(movement,0.1);
    let finalMovement = false;
    
    function movement(){
        vegetaGirar();
        if(posit<80 && finalMovement == false){
            posit++;
            vegeta.style.marginLeft = posit +'px';
        }
        else{
            finalMovement = true;
            
        }if(finalMovement==true && posit>0){
            posit--;
            vegeta.style.marginLeft = posit +'px';
        }else{
            if(posit == 0){
                clearInterval(intervalVegeta);
            }
        }
    }
}

function vegetaGirar(){
    let vegeta = document.getElementById('characVegeta');
    vegeta.setAttribute("style", "transform: rotate("+  15+ "deg)");
    setTimeout(function(){
        vegeta.setAttribute("style", "transform: rotate(" + 0 + "deg)"); 
        }, 1200);
}