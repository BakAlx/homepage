'use strict';
function draw(n) {
    if(n < 1 || n > 52) throw new Error('you must draw between 1 and 52 cards!');
    const deck = []
    for(let suit of ['\u2660', '\u2663', '\u2665', '\u2666']) {
        for(let rank of 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',')) {
            deck.push(`${rank}${suit}`);
        }
    }
    const hand = [];
    while(n) {
        hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
        n--;
    }
    return hand;
}
console.log("Your hand:");
console.log(draw(5));

/*
(function() {
    'use strict' //See chapter 7 on what this means

    // your code will start here...
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    //onMouseDown (and possibly other ismilar events)
    //tell you the mouse was clicked and where the mouse was clicked

    // JavaScript: it’s able to ascertain information about the variables that are passed in
    tool.onMouseDown = function(event) { // function attached to the handler
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();


    console.log('main.js loaded');
    // ...and end here


}());
*/

