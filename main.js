let btn = document.querySelector("section");
let launch1 = document.getElementById("btnn");
let close1 = document.getElementById("span");
let close2 = document.getElementById("btn1");

launch1.addEventListener('click', function () {
        btn.classList.toggle("active");
        launch1.style.opacity = "0.3";
        setTimeout(function() {
            btn.classList.toggle("active");
            launch1.style.opacity = "1";
        }, 4000);
});



close1.addEventListener('click', function(){
    btn.classList.toggle("active");
    launch1.style.opacity = "1";
});

close2.addEventListener('click', function(){
    btn.classList.toggle("active");
    launch1.style.opacity = "1";
});