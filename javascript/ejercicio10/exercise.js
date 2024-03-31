// // repaso para entender el ejercicio

// const condicion1= true;
// const condicion2= false;

// if (condicion1 && !condicion2){
//   console.log("ambas condiciones son: true");
// } else {
//   console.log("no se cumplen las condificiones");
// }



// ejercicio real

const order = {
  costumer: {
    adress: {
      // city: "madrid",
    },
  },
};

if (!order.costumer?.adress?.city) {
  console.log("City is required");
}
