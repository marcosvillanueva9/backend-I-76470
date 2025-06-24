import fs from 'fs/promises';

fs.writeFile('file.txt', 'Hello, World!')
  .then(() => {
    console.log('El archivo se ha creado correctamente.');
    return fs.readFile('file.txt', 'utf8');
  })
  .then(data => {
    console.log('Contenido del archivo:', data);
    return fs.appendFile('file.txt', '\n¡Adiós, Mundo!');
  })
  .then(() => {
    console.log('Se ha añadido contenido al archivo.');
    return fs.readFile('file.txt', 'utf8');
  })
  .then(updatedData => {
    console.log('Contenido actualizado del archivo:', updatedData);
    return fs.unlink('file.txt');
  })
  .then(() => {
    console.log('El archivo se ha eliminado correctamente.');
  })
  .catch(err => {
    console.error('Error durante la operación de archivos:', err);
  });
