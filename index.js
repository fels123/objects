// //******************Basics */********************* */
// // app for drawing different kind of shapes like sq,rectangle....

// // let radius = 1;
// // let x = 1;
// // let y = 1;
// // instead of above we use object

// // let circle = {
// //   //This is OOP style of Programming
// //   radius: 1,
// //   location: {
// //     x: 1,
// //     y: 1,
// //   },
// //   isVisible: true,
// //   draw: function draw() {
// //     console.log("draw");
// //   },
// // };

// // circle.draw(); //here instead of funtion we say method of circle object
// // **************************************************************************

// //Factory Functions ************************************

// function createCircle(radius) {
//   return {
//     radius,

//     draw() {
//       //function is written like this inside an object
//       console.log("draw");
//     },
//   };
// }

// const circle1 = createCircle(1);
// console.log(circle1);

// const circle2 = createCircle(2);
// console.log(circle2);

// //Constructor Function *****************************

// function circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

// const circle = new circle(1); //new create empty obj and set circle point to that

// //Dynamic nature of objects ***********************************

const circle = {
  radius: 1,
};

circle.color = "Yellow";
circle.draw = function () {};
