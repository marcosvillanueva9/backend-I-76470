import moment from 'moment';

const hoy = moment();
const nacimiento = moment('1999-03-21', 'YYYY-MM-DD');

if (!nacimiento.isValid()) {
  console.log('Fecha inválida');
  process.exit();
}

const dias = hoy.diff(nacimiento, 'days');
console.log(`Han pasado ${dias} días desde que naciste.`);
