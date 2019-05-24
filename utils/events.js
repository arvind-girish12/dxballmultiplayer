const Events = function () {
    const movement = {
        up: false,
        down: false,
        left: false,
        right: false
    }
    document.addEventListener('keydown', function (event) {
        switch (event.keyCode) {
            case 37: // Left arrow
                movement.left = true;
                break;
            case 38: // Up arrow
                movement.up = true;
                break;
            case 39: // Right arrow
                movement.right = true;
                break;
            case 40: // Down arrow
                movement.down = true;
                break;
        }
    });

    document.addEventListener('keyup', function (event) {
        switch (event.keyCode) {
            case 37: // Left arrow
                movement.left = false;
                break;
            case 38: // Up arrow
                movement.up = false;
                break;
            case 39: // Right arrow
                movement.right = false;
                break;
            case 40: // Down arrow
                movement.down = false;
                break;
        }
    });
    return movement;
}

export default Events;