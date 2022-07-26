let toggle = document.querySelector(".switch");
let input = document.querySelectorAll("input");
let themes = document.querySelector(".theme-number span");

let body = document.querySelector("body");
let header = document.querySelector("header");

let screen = document.querySelector(".screen");
let keypad = document.querySelector(".keypad");
let specialKey = document.querySelectorAll(".spe-key");
let equalButn = document.querySelector(".equal-key");
let buttons = document.querySelectorAll(".key");

let attribution = document.querySelector(".attribution");
let link = document.querySelector(".attribution a");


[...input].forEach((e,i) => {
    e.addEventListener('click', () => {
        if (i === 0) {
            e.classList.add("selected")
            input[1].classList.remove("selected");
            input[2].classList.remove("selected");

            // -----------HEADER & SWITCH-----------//
            body.style.backgroundColor = "hsl(222, 26%, 31%)";
            header.style.color = "white";
            toggle.style.backgroundColor = "hsl(223, 31%, 20%)";
            // input.style.backgroundColor = "hsl(6, 63%, 50%)";
            themes.style.color = "white";
            // ---------------SCREEN--------------//
            screen.style.backgroundColor = "hsl(224, 36%, 15%)";
            screen.style.color = "white";
            // --------------KEYPAD--------------//
            keypad.style.backgroundColor = "hsl(223, 31%, 20%)";
            specialKey.style.backgroundColor = "hsl(225, 21%, 49%)";
            specialKey.style.color = "white";
            specialKey.style.boxShadow = "inset 0 -5px 0 0 hsl(224, 28%, 35%)";
            equalButn.style.backgroundColor = "hsl(6, 63%, 50%)";
            equalButn.style.color = "white";
            equalButn.style.boxShadow = "inset 0 -5px 0 0 hsl(6, 70%, 34%)";

            [...buttons].forEach((e) => {
                e.style.color = "hsl(221, 14%, 31%)";
                e.style.backgroundColor = "hsl(30, 25%, 89%)";
                e.style.boxShadow = "inset 0 -5px 0 0 hsl(28, 16%, 65%)";
            });

            // --------------FOOTER-------------//
            attribution.style.color = "hsl(30, 25%, 89%)";
            link.style.color = "hsl(30, 25%, 89%)";


        } 
        
        else if ( i === 1) {
            e.classList.add("selected")
            input[0].classList.remove("selected");
            input[2].classList.remove("selected");

             // -----------HEADER & SWITCH-----------//
             body.style.backgroundColor = "hsl(0, 0%, 90%)";
             header.style.color = "black";
             toggle.style.backgroundColor = "hsl(0, 5%, 81%)";
            //  input.style.backgroundColor = "hsl(25, 98%, 40%)";
             themes.style.color = "black";
             // ---------------SCREEN--------------//
             screen.style.backgroundColor = "hsl(0, 0%, 93%)";
             screen.style.color = "black";
             // --------------KEYPAD--------------//
             keypad.style.backgroundColor = "hsl(0, 5%, 81%)";
             specialKey.style.backgroundColor = "hsl(185, 42%, 37%)";
             specialKey.style.boxShadow = "inset 0 -5px 0 0 hsl(185, 58%, 25%)";
             equalButn.style.backgroundColor = "hsl(25, 98%, 40%)";
             equalButn.style.color = "white";
             equalButn.style.boxShadow = "inset 0 -5px 0 0 hsl(25, 99%, 27%)";

            [...buttons].forEach((e) => {
                e.style.color = "hsl(60, 10%, 19%)";
                e.style.backgroundColor = "hsl(45, 7%, 89%)";
                e.style.boxShadow = "inset 0 -5px 0 0 hsl(28, 16%, 65%)";
            });

             // --------------FOOTER-------------//
             attribution.style.color = "hsl(60, 10%, 19%)";
             link.style.color = "hsl(185, 58%, 25%)";
        }

        else {
            e.classList.add("selected")
            input[1].classList.remove("selected");
            input[0].classList.remove("selected");

             // -----------HEADER & SWITCH-----------//
             body.style.backgroundColor = "hsl(268, 75%, 9%)";
             header.style.color = "hsl(52, 100%, 62%)";
             toggle.style.backgroundColor = "hsl(268, 71%, 12%)";
            //  input.style.backgroundColor = "hsl(176, 100%, 44%)";
             themes.style.color = "hsl(52, 100%, 62%)";
             // ---------------SCREEN--------------//
             screen.style.backgroundColor = "hsl(268, 71%, 12%)";
             screen.style.color = "hsl(52, 100%, 62%)";
             // --------------KEYPAD--------------//
             keypad.style.backgroundColor = "hsl(268, 71%, 12%)";
             specialKey.style.backgroundColor = "hsl(281, 89%, 26%)";
             specialKey.style.boxShadow = "inset 0 -5px 0 0 hsl(285, 91%, 52%)";
             equalButn.style.backgroundColor = "hsl(176, 100%, 44%))";
             equalButn.style.color = "hsl(268, 75%, 9%)";
             equalButn.style.boxShadow = "inset 0 -5px 0 0 hsl(177, 92%, 70%)";

            [...buttons].forEach((e) => {
                e.style.color = "hsl(52, 100%, 62%)";
                e.style.backgroundColor = "hsl(268, 47%, 21%)";
                e.style.boxShadow = "inset 0 -5px 0 0 hsl(290, 70%, 36%)";
            });

             // --------------FOOTER-------------//
             attribution.style.color = "white";
             link.style.color = "hsl(176, 100%, 44%)";
        }
    });

});
