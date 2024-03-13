let lamp = [{color: "red"}, {color: "yellow"}, {color: "green"}, {color: "blue"}];
    let colorIndex = 0;

    let colorsContainer = document.querySelector('.back_color');

    for (let i = 0; i < lamp.length; i++) {
        let colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = lamp[i].color;
        colorsContainer.appendChild(colorDiv);
    }

    let colors = document.querySelectorAll('.back_color div');

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
        colorIndex = (colorIndex + 1) % lamp.length;
        switchColor();
    });

    document.querySelector('.plus').addEventListener('click', function() {
        colorIndex = (colorIndex - 1 + lamp.length) % lamp.length;
        switchColor();
    });
