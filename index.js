// // // //******************Basics */********************* */
// // // // app for drawing different kind of shapes like sq,rectangle....

// // // // let radius = 1;
// // // // let x = 1;
// // // // let y = 1;
// // // // instead of above we use object

// // // // let circle = {
// // // //   //This is OOP style of Programming
// // // //   radius: 1,
// // // //   location: {
// // // //     x: 1,
// // // //     y: 1,
// // // //   },
// // // //   isVisible: true,
// // // //   draw: function draw() {
// // // //     console.log("draw");
// // // //   },
// // // // };

// // // // circle.draw(); //here instead of funtion we say method of circle object
// // // // **************************************************************************

// // // //Factory Functions ************************************

// // // function createCircle(radius) {
// // //   return {
// // //     radius,

// // //     draw() {
// // //       //function is written like this inside an object
// // //       console.log("draw");
// // //     },
// // //   };
// // // }

// // // const circle1 = createCircle(1);
// // // console.log(circle1);

// // // const circle2 = createCircle(2);
// // // console.log(circle2);

// // // //Constructor Function *****************************

// // // function circle(radius) {
// // //   this.radius = radius;
// // //   this.draw = function () {
// // //     console.log("draw");
// // //   };
// // // }

// // // const circle = new circle(1); //new create empty obj and set circle point to that

// // // //Dynamic nature of objects ***********************************

// // // const circle = {
// // //   radius: 1,
// // // };

// // // circle.color = "Yellow";
// // // circle.draw = function () {};

// // // delete circle.color;
// // // delete circle.draw;

// // // console.log(circle);

// // // *****************Constructor Property***********************

// // // let x = {};
// // //let x=new Object()
// // // new String(); //'',"",``
// // // new Boolean(); // true, false
// // // new Number(); // 1,2,3,....

// // //************Functions Are Objects */

// // // function Circle(radius) {
// // //   this.radius = radius;
// // //   this.draw = function () {
// // //     console.log("draw");
// // //   };
// // // }
// // // Circle.call({}, 1);
// // // Circle.apply({}, [1, 2, 3]);
// // // const another = new Circle(1);

// // // circle.name;
// // // circle.length;
// // // circle.constructor;

// // // const Circle1 = new Function(
// // //   "radius",
// // //   `
// // //    this.radius = radius;
// // //   this.draw = function () {
// // //     console.log("draw");
// // //   };
// // //   `
// // // );
// // // .

// // // ********Value types vs Reference types*************

// // //** */ @@Value Types Or Primitive Value types

// // // 1.Number
// // // 2.Boolean
// // // 3.undefined
// // // 4.null
// // //5.string
// // //6.symbol

// // // ****Reference Types
// // // 1.Objects
// // // 2.arrays
// // // 3.function

// // // 2 primitives
// // // let x = { value: 10 };
// // // let y = x;

// // // x.value = 20;

// // // let number = 10;
// // // function increase(number) {
// // //   number++;
// // // }
// // // increase(number); // this number parameter is different from the variavle number
// // // console.log(number);

// // // // see the difference

// // // let obj = { value: 10 };
// // // function increase(obj) {
// // //   obj.value++;
// // // }
// // // increase(obj);
// // // console.log(obj);

// // // Cloning an object &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// // const circle = {
// //   radius: 1,
// //   draw() {
// //     console.log("draw");
// //   },
// // };

// // // Old way
// // // const another = {};
// // // for (let key in circle) another[key] = circle[key];
// // // // another["radius"] = circle["radius"];
// // // console.log(another);

// // // New way
// // // const another = Object.assign({}, circle);
// // // console.log(another);

// // //Another way
// // const another = { ...circle };
// // console.log(another);

// // // ****note the out are all same

// // ************Enumerating Properties of an object *******************

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

// for (let key in circle) console.log(key, circle[key]);

// // for (let key of circle) console.log(key);//cannot be used here for off loop

// for (let key of Object.keys(circle)) console.log(key);
// for (let key of Object.entries(circle)) console.log(entry);

// Garbage Collection *************************************
// let circle = {}; //memory auto alocated and delocated memory when not in use
// console.log(circle);
