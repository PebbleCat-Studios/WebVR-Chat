var keysPressed = {}; // Define keysPressed globally

AFRAME.registerComponent('keyboard-events', {
    init: function () {
        var el = this.el;

        // Function to run when key is pressed
        var onKeyPress = function (event) {
            if (event.key === 'w' || event.key === 'W' || 
                event.key === 's' || event.key === 'S' ||
                event.key === 'a' || event.key === 'A' ||
                event.key === 'd' || event.key === 'D') {
                if (!keysPressed[event.key]) {
                    keysPressed[event.key] = true;
                    el.emit(event.key.toLowerCase() + 'down');
                }
            }
        };
        
        // Function to run when key is released
        var onKeyRelease = function (event) {
            if (event.key === 'w' || event.key === 'W' || 
                event.key === 's' || event.key === 'S' ||
                event.key === 'a' || event.key === 'A' ||
                event.key === 'd' || event.key === 'D') {
                delete keysPressed[event.key];
                el.emit(event.key.toLowerCase() + 'up');
                
                // Check if all movement keys are released
                if (Object.keys(keysPressed).length === 0) {
                    el.emit('allkeysup');
                }
            }
        };
        
        // Add event listeners
        document.addEventListener('keydown', onKeyPress);
        document.addEventListener('keyup', onKeyRelease);
        
        // Clean up event listeners when component is removed
        this.el.addEventListener('componentremoved', function (evt) {
            if (evt.detail.name === 'keyboard-events') {
                document.removeEventListener('keydown', onKeyPress);
                document.removeEventListener('keyup', onKeyRelease);
            }
        });
    }
});

// Your A-Frame scene
AFRAME.registerComponent('scene-behavior', {
    init: function () {
        var el = this.el;
        
        // Function to run when 'W' key is pressed
        var onWDownFunction = function () {
            PlayerRun();
        };
        
        // Function to run when 'A' key is pressed
        var onADownFunction = function () {
            if (keysPressed['s'] || keysPressed['w']) {
                console.log('W or S Pressed!');
            } else {
                PlayerStrifeLeft();
            }
        };
        
        // Function to run when 'D' key is pressed
        var onDDownFunction = function () {
            if (keysPressed['s'] || keysPressed['w']) {
                console.log('W or S Pressed!');
            } else {
                PlayerStrifeRight();
            }
        };
        
        // Function to run when 'S' key is pressed
        var onSDownFunction = function () {
            PlayerRunningBack();
        };

        // Function to run when 'S' key is released
        var onSUpFunction = function () {
               if (keysPressed['a']) {
                console.log('A Pressed!');
                PlayerStrifeLeft();
            } else if (keysPressed['d']) {
                console.log('D Pressed!');
                PlayerStrifeRight();
            }
        };
        
        // Function to run when 'W' key is released
        var onWUpFunction = function () {
            if (keysPressed['a']) {
                console.log('A Pressed!');
                PlayerStrifeLeft();
            } else if (keysPressed['d']) {
                console.log('D Pressed!');
                PlayerStrifeRight();
            }
        };

        // Function to run when all movement keys are released
        var onAllKeysUp = function () {
            PlayerIdle();
        };
        
        // Add event listeners
        el.addEventListener('wdown', onWDownFunction);
        el.addEventListener('adown', onADownFunction);
        el.addEventListener('ddown', onDDownFunction);
        el.addEventListener('sdown', onSDownFunction);
        el.addEventListener('wup', onWUpFunction);
        el.addEventListener('sup', onSUpFunction);
        el.addEventListener('allkeysup', onAllKeysUp);
        
        // Clean up event listeners when component is removed
        this.el.addEventListener('componentremoved', function (evt) {
            if (evt.detail.name === 'scene-behavior') {
                el.removeEventListener('wdown', onWDownFunction);
                el.removeEventListener('adown', onADownFunction);
                el.removeEventListener('ddown', onDDownFunction);
                el.removeEventListener('sdown', onSDownFunction);
                el.removeEventListener('wup', onWUpFunction);
                el.removeEventListener('sup', onSUpFunction);
                el.removeEventListener('allkeysup', onAllKeysUp);
            }
        });
    }
});
