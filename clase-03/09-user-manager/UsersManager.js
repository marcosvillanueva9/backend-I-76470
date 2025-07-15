import { promises as fs } from 'fs';

export class UsersManager {
  static file = 'Usuarios.json';

  static async crearUsuario(usuario) {
    try {
      let usuarios = [];

      try {
        const data = await fs.readFile(this.file, 'utf-8');
        usuarios = JSON.parse(data);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw new Error('Error al leer el archivo de usuarios: ' + error.message);
        }
      }

      usuarios.push(usuario);

      await fs.writeFile(this.file, JSON.stringify(usuarios, null, 2));
    } catch (error) {
      throw new Error('Error al crear usuario: ' + error.message);
    }
  }

  static async consultarUsuarios() {
    try {
      const data = await fs.readFile(this.file, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      throw new Error('Error al leer usuarios: ' + error.message);
    }
  }
}
