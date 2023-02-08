$(document).ready(function(){

    //code to be written
    var code = '<!-- Project: wait -->\n \n<!-- Written by: Mr.mySelf -->\n <!-- Dont afraid with black terminal with green Font --> \n<html>\n    <head>\n        <meta charset="utf-8" />\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n    </head>\n\n    <body>\n\n        <center>\n            <section class="heart-container">\n                <section class="heart"></section>\n            </section>\n        </center>\n\n        <style> \n    @keyframes heartbeat{\n  10%{\n    transform: scale(0.9);\n                }\n                20%{\n                   transform: scale(0.75);\n                }\n                30%{\n                   transform: scale(1);\n                }\n                100%{\n                   transform: scale(0.75);\n                }\n            }\n            .heart-container{\n                width: 60%;\n                transform: scale(0.75);\n            }\n            .heart{\n                position: relative;\n                height: 90px; width: 90px;\n                margin: 0 auto;\n                background: Firebrick;\n                transform: rotate(-45deg);\n            }\n            .heart::before, .heart::after{\n                position: absolute;\n                content: "";\n                height: 90px; width: 90px;\n                border-radius: 50%;\n                background: Firebrick;\n            }\n            .heart::after{\n                top: -45px; left: 0;\n            }\n            .heart-container{\n                animation: heartbeat 1s infinite linear;\n            }\n        </style>\n\n    </body>\n</html>\n<!--\n    I hope you enjoyed watching \n    and learned something about animation! :)\n -AnkitPatelDev\n-->';
    

    var i = 0, //starting index
        textarea = $('.code'), //textarea
        output = $('.output-container'); //output container
        
    //type function
    function writeCode(){
        textarea.append(code.charAt(i));
        i++;
        //autoscroll textarea
        textarea.scrollTop(textarea[0].scrollHeight);
        
        if(i === code.length){
            clearInterval(interval);
            clearInterval(result);
        }
    }
    //type every 80 milliseconds
    var interval = setInterval(writeCode, 50);
    
    //updating the output function
    function updateResult(){
        output.html(textarea.val());
    }
    //updating the output every 1 second
    var result = setInterval(updateResult, 1000);
    
});