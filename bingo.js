var enters = [];

if (enters.length > 8) {
  alert("No more Number can be added plz verify your Bingo board");
}
$("#het").click(() => {
  if (enters.length > 8) {
    alert("No more Number can be added plz verify your Bingo board");
    $("#number").disabled();
  }
  var enter = $("#number").val();
  if (enter > 0 && enter < 100) {
    $("#inputs").append(`<div class="grid-item">${enter}</div>`);
    enters.push(enter);
  } else {
    alert("plz insert number between 1 and 99");
  }
});
$("#number").keypress(() => {
  if (enters.length > 8) {
    alert("No more Number can be added plz verify your Bingo board");
    $("#number").disabled();
  }
  if (event.key === "Enter") {
    var enter = $("#number").val();
    if (enter > 0 && enter < 100) {
      $("#inputs").append(`<div class="grid-item">${enter}</div>`);
      enters.push(enter);
    } else {
      alert("plz insert number between 1 and 99");
    }
  }
});

function randGen() {
  return Math.ceil(Math.random() * 100);
}
let bingos = [];
//   function display(array) {
//     for (let i = 0; i < array.length; i++) {
//         setTimeout(()=>{
//             $("#outputs").append(`<div class="grid-item">${array[i]}</div>`);

//         }, 600)
//     }
//   }

function display() {
  if (bingos.length) {
    setTimeout(() => {
      $("#outputs").append(`<div class="grid-item">${bingos[0]}</div>`);
      bingos.shift();
      return display();
    }, 60);
  }
  else {
    return;
  }
}
let chicken=null
$("#generator").click(function () {
  if (enters.length < 9) {
    alert("Finish your board Whigga");
    ;
  }
 
    
  
  for (let i = 0; i < 99; i++) {
    bingos[i] = randGen();
  }
  $("#outputs").empty();
  display(bingos);
});
$("#verify").click(() => {
  chicken = enters.reduce((x) => bingos.includes(x), true);  
console.log(chicken);
  if (chicken && enters.length > 8) {
    $("body").empty();
    $("body").append(
      `<img class="cute" src="https://media1.tenor.com/m/fdHoO91iioMAAAAC/boss-bitch-grandma.gif">`
    );
  }
  if (chicken===false && enters.length > 8) {
    $("body").empty();
    $("body").append(
      `<img class="cute" src="https://media1.tenor.com/m/y7lQ9Pu0XDsAAAAC/sucker-such-a-sucker.gif">`
    );
    alert("Bro!!!!!! Complete the Board");
  }
  
});
