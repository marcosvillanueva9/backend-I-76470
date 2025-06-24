import { UsersManager } from './UsersManager.js';

const usuario = {
  nombre: 'Lucía',
  apellido: 'Fernández',
  edad: 24,
  curso: 'Backend'
};

await UsersManager.crearUsuario(usuario);

await UsersManager.crearUsuario({
  nombre: 'Carlos',
  apellido: 'Gómez',
  edad: 30,
  curso: 'Frontend'
});



const usuarios = await UsersManager.consultarUsuarios();
console.log(usuarios);
