import fs from 'fs';

const operacionesAsincronas = async () => {

    await fs.promises.writeFile('file.txt', 'Hello, World!');
    console.log('El archivo se ha creado correctamente.');

    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log('Contenido del archivo:', data);

    await fs.promises.appendFile('file.txt', '\n¡Adiós, Mundo!');
    console.log('Se ha añadido contenido al archivo.');

    const updatedData = await fs.promises.readFile('file.txt', 'utf8');
    console.log('Contenido actualizado del archivo:', updatedData);

    await fs.promises.unlink('file.txt');
    console.log('El archivo se ha eliminado correctamente.');
}

operacionesAsincronas();