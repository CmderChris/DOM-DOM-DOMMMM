document.addEventListener('DOMContentLoaded', button);
function button() {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Add a square!');
    button.className = 'button';
    button.appendChild(btnText);
    document.body.appendChild(button);

    let boxDiv = document.createElement('div')
    document.body.appendChild(boxDiv);

    let id = 0;

    document.getElementsByClassName('button')[0].addEventListener('click', function () {
        let square = document.createElement('div');
        boxDiv.appendChild(square);
        square.id = id++;
        square.className = 'box';
        let p = document.createElement('p');
        let squareText = document.createTextNode(id);
        p.appendChild(squareText);
        square.appendChild(p);
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
                if (square.previousSibling === null) {
                    Swal.fire(
                        'There is no previous square!',
                        )
                } else {
                    square.previousSibling.remove();
                }
            } else {
                if (square.nextSibling === null) {
                    Swal.fire(
                        'There is no next square!',
                        )
                } else {
                    square.nextSibling.remove();
                }
            }

        });

        
    });

    function getRandomColor() {
        let myColors = ['#F766C6', '#F7667D', '#F79766', '#F7E066', '#C6F766', '#7DF766'];
        let myRandomColor = myColors[Math.floor(Math.random() * myColors.length)];
        return myRandomColor;
    };

}