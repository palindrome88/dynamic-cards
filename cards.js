



var cardRef = document.getElementById("card-holder");

var numOfCards = 0;



document.querySelector('#enter').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        
        cardRef.innerHTML += `<div id="card-${numOfCards}"> "THIS IS A CARD ${numOfCards++}. 
        ${event.target.value}
        </div>`;
    }
});

