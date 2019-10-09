let div = document.createElement("div");
div.className = "header-container";
document.body.appendChild(div);


let btn = document.createElement("button"); 
let btnTxt = document.createTextNode("Add Square"); 
btn.appendChild(btnTxt);
btn.className = "btn btn-lg btn-primary";
div.appendChild(btn);

document.getElementsByClassName('btn')[0].addEventListener('click', function() {

    let boxDiv = document.createElement('div');
    document.body.appendChild(boxDiv);
    boxDiv.id = 'box';
});