/*// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

*/

window.onload = function() {
    var canvas = new fabric.Canvas('overlayCanvas', { selection: false });

    // Set canvas size to screen size
    canvas.setWidth(window.innerWidth);
    canvas.setHeight(window.innerHeight);

    // Customize drawing brush properties
    var currentColor = 'blue'; // Default color
    canvas.freeDrawingBrush.color = currentColor;
    canvas.freeDrawingBrush.width = 5; // Set pen width

    // Variable to track drawing mode
    var isDrawingEnabled = false;

    // Function to toggle drawing mode
    function toggleDrawingMode() {

        isDrawingEnabled = !isDrawingEnabled;
        canvas.isDrawingMode = isDrawingEnabled;

        // Toggle class to hide/show canvas based on drawing mode
        if (!isDrawingEnabled) {

            canvas.getElement().classList.add('canvas-hidden');
            decreaseZIndex('.canvas-container');
        } else {
            canvas.getElement().classList.remove('canvas-hidden');
          
            increaseZIndex('.canvas-container');
        }
    }

    // Function to change pen color
    function changePenColor(color) {
        currentColor = color;
        canvas.freeDrawingBrush.color = currentColor;
    }

    function increaseZIndex(className) {
        var element = document.querySelector(className);
        var zIndex = parseInt(window.getComputedStyle(element).getPropertyValue('z-index')) || 0;
        element.style.zIndex = zIndex + 5;
    }

    function decreaseZIndex(className) {
        var element = document.querySelector(className);
        var zIndex = parseInt(window.getComputedStyle(element).getPropertyValue('z-index')) || 0;
        element.style.zIndex = zIndex - 5;
    }

    // Event listener for keydown event
    document.addEventListener('keydown', function(event) {
        // Ch3eck if the pressed key is "c"
        if (event.key === 'c') {
canvas.clear(); // Clear the canvas
            toggleDrawingMode(); // Toggle drawing mode

        }
        // Check if the pressed key is "d"
        else if (event.key === 'd') {
            canvas.clear(); // Clear the canvas
   
        }
        // Check if the pressed key is a number between 1 and 9
        else if (event.key >= '1' && event.key <= '9') {
            // Change pen color based on the pressed key
            var colors = ['black', 'red', 'green', 'blue', 'orange', 'purple', 'yellow', 'cyan', 'magenta'];
            var index = parseInt(event.key) - 1;
            if (index < colors.length) {
                changePenColor(colors[index]);
            }
        }
        // Check if the pressed key is "Backspace"
        else if (event.key === 'Backspace') {
            canvas.clear(); // Clear the canvas
        }
    });
};
