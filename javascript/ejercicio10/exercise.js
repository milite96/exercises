// repaso para entender el ejercicio 

const condicion1= true;
const condicion2= false;

if (condicion1 && !condicion2){
  console.log("ambas condiciones son: true");
} else {
  console.log("no se cumplen las condificiones");
}

// ejercicio real

const order = {
  costumer
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}
