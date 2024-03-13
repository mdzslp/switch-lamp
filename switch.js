lamp = [{color: "red"}, {color: "yellow"}, {color: "green"}];

let colorIndex = 1;

const colors = document.querySelectorAll('.back_color div');

function switchColor() {
    colors[colorIndex].style.backgroundColor = lamp[colorIndex].color;
    for (let i = 0; i < colors.length; i++) {
        if (i !== colorIndex) {
            colors[i].style.backgroundColor = 'gray';
        }
    }
}

switchColor();

document.querySelector('.minus').addEventListener('click', function() {
    colorIndex = (colorIndex + 1);
    switchColor();
});

document.querySelector('.plus').addEventListener('click', function() {
    colorIndex = (colorIndex - 1 ) ;
    switchColor();
});

