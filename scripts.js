// $ is used for both querySelect and querySelectAll

// $("h1").css("color", "lightblue");


// this returns the value of color while ^^ sets it
$("h1").css("color");

$("h1").addClass("big-title randomclass")


// checks to see if exists
$("h1").hasClass("big-title");

// set text (change)
$("h1").text("ayo :)");

// get the text :)
// $(selector).text();

$("button").text("don't touch pls 👻");


// attribute change
$("a").attr("href", "https://www.google.com/");

// event listeners

$("h1").click(function () { 
    $("h1").css("color", "lightblue");
    
});

// add a function to all buttons(or element of choice)

$("button").click(function () { 
    $("h1").css("color", "lightblue");
    
});

// display any key pressed

$("body").keypress(function (e) { 
    $("h1").text(e.key);
});

// check to see if function is triggered

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

// before , after , prepend , append
// before h1
// after h1
// before hello in h1
// after hello in h1
// remove removes it lol

$(".slide").on("click", function () {
    $("h1").slideToggle();
});