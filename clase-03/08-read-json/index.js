import { promises as fs } from 'fs';

async function procesarArchivo() {
  try {
    const contenidoStr = await fs.readFile('./package.json', 'utf-8');
    const contenidoObj = JSON.parse(contenidoStr);
    const stats = await fs.stat('./package.json');

    const info = {
      contenidoStr,
      contenidoObj,
      size: stats.size
    };

    console.log(info);

    await fs.writeFile('./info.json', JSON.stringify(info, null, 2));
  } catch (error) {
    throw new Error('Error al procesar el archivo: ' + error.message);
  }
}

procesarArchivo();
