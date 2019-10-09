document.addEventListener('DOMContentLoaded', button);
function button() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add a square!');
    button.className = 'button';
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id = 0;

    document.getElementsByClassName('button')[0].addEventListener('click', function () {
        let square = document.createElement('div');
        document.body.appendChild(square);
        square.id = id++;
        square.className = 'boxColor';
        let p = document.createElement('p');
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
        document.body.appendChild(square);
        p.style.opacity = '0';

        square.addEventListener('mouseenter', hover);
        function hover() {
            p.style.opacity = '1';
        }

        square.addEventListener('mouseleave', noHover);
        function noHover() {
            p.style.opacity = '0';
        }

        square.addEventListener('click', function () {
            let myRandomColor = getRandomColor();
            square.style.backgroundColor = myRandomColor;
        });

        square.addEventListener('dblclick', function () {
            if (square.id % 2 === 0) {
                square.previousSibling.remove();
            } else {
                square.nextSibling.remove();
            }
            

            
        });
    });

    function getRandomColor() {
        let myColors = ['#F766C6', '#F7667D', '#F79766', '#F7E066', '#C6F766', '#7DF766'];
        let myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    };

}