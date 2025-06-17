const objetos = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4
  }
];

// Extraer los tipos de productos únicos de los objetos
const tiposProductos = [];

objetos.forEach(obj => {
  Object.keys(obj).forEach(producto => {
    if (!tiposProductos.includes(producto)) {
      tiposProductos.push(producto);
    }
  });
});

console.log("Tipos de productos únicos:", tiposProductos);

let totalProductos = 0;

objetos.forEach(obj => {
  const cantidades = Object.values(obj);
  cantidades.forEach(cantidad => {
    totalProductos += cantidad;
  });
});

console.log("Total de productos vendidos:", totalProductos);
