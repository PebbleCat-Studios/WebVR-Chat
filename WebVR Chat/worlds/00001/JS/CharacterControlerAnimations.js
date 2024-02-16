function PlayerRun() {
    var characterEntity = document.querySelector('#Avitar');
    if (characterEntity) {
        characterEntity.setAttribute('animation-mixer', {
            clip: 'Running',
            loop: 'repeat',
            crossFadeDuration: .2 // Adjust the cross fade duration as needed
        });
    } else {
        console.error('Character entity not found');
    }
}

function PlayerIdle() {
    var characterEntity = document.querySelector('#Avitar');
    if (characterEntity) {
        characterEntity.setAttribute('animation-mixer', {
            clip: 'Idle',
            loop: 'repeat',
            crossFadeDuration: .2 // Adjust the cross fade duration as needed
        });
    } else {
        console.error('Character entity not found');
    }
}

function PlayerStrifeLeft() {
    var characterEntity = document.querySelector('#Avitar');
    if (characterEntity) {
        characterEntity.setAttribute('animation-mixer', {
            clip: 'StrifeLeft',
            loop: 'repeat', // Assuming strife animations are played once
            crossFadeDuration: .2 // Adjust the cross fade duration as needed
        });
    } else {
        console.error('Character entity not found');
    }
}

function PlayerStrifeRight() {
    var characterEntity = document.querySelector('#Avitar');
    if (characterEntity) {
        characterEntity.setAttribute('animation-mixer', {
            clip: 'StrifeRight',
            loop: 'repeat', // Assuming strife animations are played once
            crossFadeDuration: .2 // Adjust the cross fade duration as needed
        });
    } else {
        console.error('Character entity not found');
    }
}

function PlayerRunningBack() {
    var characterEntity = document.querySelector('#Avitar');
    if (characterEntity) {
        characterEntity.setAttribute('animation-mixer', {
            clip: 'RunningBack',
            loop: 'repeat',
            crossFadeDuration: .2 // Adjust the cross fade duration as needed
        });
    } else {
        console.error('Character entity not found');
    }
}

//POV Changing Logic

var POV = '3rd'; // Initial point of view
var POVRY = 180;
var POVLY = 7.5;
var POVLZ = 2;
  
AFRAME.registerComponent('change-pov', {
  init: function () {
    var self = this;
    var cameraEntity = document.getElementById('viewCameraRig');



    
    // Event listener for the "P" key
    window.addEventListener('keydown', function (event) {
      if (event.key === 'p' || event.key === 'P') {
        switch (POV) {
          case '1st':
            POVRY = 180;
            POVLY = 7.5;
            POVLZ = 2;
            POV = '3rd';
            break;
          case '2nd':
            POVRY = 0;
            POVLY = 11;
            POVLZ = 10;
            POV = '1st';
            break;
          case '3rd':
            POVRY = 180;
            POVLY = 11;
            POVLZ = -10;
            POV = '2nd';
            break;
        }
        console.log('Changed POV to: ' + POV);
      }
    });
  }
});