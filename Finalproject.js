$(function() {
$("#button4").on("click", function(event){
var number = 1 + Math.floor(Math.random() * 6);
console.log(number);
if(number == 1 || number == 2 || number == 3) {
    alert("you lose");

}
else {
    alert("you win")
}
});
});


