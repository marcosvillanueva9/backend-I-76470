import fs from 'fs';

fs.writeFile('file.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error al crear el archivo:', err);
        return;
    }
    console.log('El archivo se ha creado correctamente.');

    fs.readFile('file.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }
        console.log('Contenido del archivo:', data);

        fs.appendFile('file.txt', '\n¡Adiós, Mundo!', (err) => {
            if (err) {
                console.error('Error al añadir contenido al archivo:', err);
                return;
            }
            console.log('Se ha añadido contenido al archivo.');

            fs.readFile('file.txt', 'utf8', (err, updatedData) => {
                if (err) {
                    console.error('Error al leer el archivo actualizado:', err);
                    return;
                }
                console.log('Contenido actualizado del archivo:', updatedData);

                fs.unlink('file.txt', (err) => {
                    if (err) {
                        console.error('Error al eliminar el archivo:', err);
                        return;
                    }
                    console.log('El archivo se ha eliminado correctamente.');
                });
            });
        });
    });
})