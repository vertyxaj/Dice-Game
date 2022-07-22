function big(number) {
    if (number>100) {
        return "big"
    }
}

for (var i = 0; i < 1000; i++) {
    console.log(i);
}
var color = prompt("give me a color");

$(function() {
    $("body").css("background-color", color);
});

$(function() {
$("#my-button").on('click', function(event) {
    alert("you clicked the button!");
});
});


$(function() {
    $('ol li').each(function(index, element) { 
        if (index%2==0) {
            $(element).css('color', 'red');
        }
        else {
            $(element).css('color', 'blue');
        }
    })
});

function buildCounter() {
    var c =0;
    function counter() {
        c=c+1
        return c;
    };
    return counter;
}
counter = buildCounter();
console.log(counter());
console.log(counter());


$(function() {

$("#button1").on("click", function(event){
    $("body").css("background-color", "blue");
})

$("#button2").on("click", function(event){
        $("body").css("background-color", "red");
})

$("#button3").on("click", function(event){
    $("body").css("background-color", "orange");
})
});

$(function() {
$("#buttion").on('click', function(event) {
    var string = $("#text-field").val();
    alert(string);
});


});