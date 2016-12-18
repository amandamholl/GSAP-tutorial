// Following this TweenLite tutorial: https://ihatetomatoes.net/simple-greensock-tutorial-your-first-steps-with-gsap/#final-demo
// TweenLite: can animation 1 or more properties of a single element
// or an arrary of objects (elements)


// 1. Create a variable:
// Element we apply animations to

var $box = $('#box');


// 2. Create a First .to() Tween:
// Move box from its current position (defined in the stylesheet) to
// the left edge of the body over the duration of 7s
// Note: Can animate multiple CSS properties with comma separated list

// TweenLite.to($box, 0.7, { left: 0, x: 0 });


// 3. Create a .from() Tween:
// Animates from the specified position to the position defined in the
// stylesheet. Here, moves the box 200px to the left of the stylesheet
// position and then moves to the stylesheet position over a duration
// of 2 seconds.
// Note: autoAlpha combines opacity & visibility into 1 property.
// GSAP assumes that opacity is 0 when visibility: hidden is set.

//TweenLite.from($box, 2, { x: '-=200px', autoAlpha: 0 });


// 4. Create a .set() TweenLite:
// Set a property on an element without any animation (resetting a
// position). Delay in seconds from when the first transformation
// occurs to when subsequent transformations occur giving the
// illusion of the actions happening in "sequence"
// Note: relative positions ('-=200px') are relative to the default
// CSS position/position set by prior Tweens, whereas absolute
// positions ('-50%') set CSS properties to an absolute value

// TweenLite.set($box, { x: '-=200px', scale: 0.3 });
// TweenLite.set($box, { x: '+=100px', scale: 0.6, delay: 1 });
// TweenLite.set($box, { x: '-50%', scale: 1, delay: 2 });


// 5: Create a .fromTo() Tween:
// Defines the starting and ending positions of an element in 1
// Tween. { x: 150 } overwrites the default CSS transformation
// `transform: translate(–50%, –50%)` and sets a new value of
// `transform: matrix(1, 0, 0, 1, 150, -50);`

// TweenLite.fromTo($box, 2, { x: '-=200px' } , { x: 150 });


// 6: Easing:
// Easing function goes inide of curly braces (like delay)
// Note: RoughEase, SlowMo, and SteppedEase can be configured to get
// a specific effect

// TweenLite.fromTo($box, 2, { x: '-=200px' } , { x: 150, ease: Power4.easeInOut });
// TweenLite.to($box, 0.4, {top: '100%', y: '-100%', ease: Bounce.easeOut, delay: 2});
// TweenLite.to($box, 0.7, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 3});
// TweenLite.to($box, 0.8, {x: '-=200px', y: '-100%', ease: Back.easeInOut, delay: 4.2});
// TweenLite.to($box, 2.5, {top: '50%', y: '-50%', ease: Power0.easeNone, delay: 5});
// TweenLite.to($box, 2.5, {x: '+=400px', ease: Elastic.easeInOut, delay: 7.7});
// TweenLite.to($box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});


// 7. Callback Functions
// onStart fires at the start of an animation, onUpdate fires on every
// frame of the animations, and onComplete fires only once at the end of
// the Tween

TweenLite.fromTo($box, 2, { x: '-=200px' } , { x: 150, ease: Power4.easeInOut, onStart: start, onUpdate: update, onComplete: complete });

function start() {
  console.log('start');
}

function update() {
  console.log('animating');
}

function complete() {
  console.log('end');
}
