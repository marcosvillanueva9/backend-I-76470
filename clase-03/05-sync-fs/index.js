import fs from 'fs';

fs.writeFileSync('file.txt', 'Hello, World!');
if (fs.existsSync('file.txt')) {
    console.log('El archivo se ha creado correctamente.');

    const data = fs.readFileSync('file.txt', 'utf8');
    console.log('Contenido del archivo:', data);

    fs.appendFileSync('file.txt', '\n¡Adiós, Mundo!');
    console.log('Se ha añadido contenido al archivo.');

    const updatedData = fs.readFileSync('file.txt', 'utf8');
    console.log('Contenido actualizado del archivo:', updatedData);

    fs.unlinkSync('file.txt');
    console.log('El archivo se ha eliminado correctamente.');
}