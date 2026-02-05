// const printHello = (facebook) => {
//   console.log("hi");
//   facebook();
// };

// const printGoodNight = () => {
//   console.log("Hi Namastey! I am aaryan and welcome to my facebook page.");
// };

// // const printGoodMorning = () => {
// //   console.log("Goodmorning");
// // };

// // const printBye = () => {
// //   console.log("Bye");
// // };

// printHello(printGoodNight);

const onClick = () => {
  // sayHello();
};

const sayHello = () => {
  console.log(
    "Hi! Namastey I am from Daraz , is there any enquiry regarding us! Please feel free to ask. Contact: email@email.com",
  );
};

onClick(sayHello());

const sayHelloo = (sayGoodnight) => {
  console.log("Hello");
  sayGoodnight();
};

const saySomething = () => {
  console.log("Goodnight Aaryan");
};

sayHelloo(saySomething);
