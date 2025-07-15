import crypto from "crypto";
import fs from "fs";

class UsersManager {
  static usuarios = [];

  crearUsuario({ nombre, apellido, username, password }) {
    const hashedPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    const usuario = {
      nombre,
      apellido,
      username,
      password: hashedPassword,
    };

    UsersManager.usuarios.push(usuario);
    UsersManager.guardarUsuariosEnArchivo();
    console.log(`Usuario ${username} creado correctamente.`);
  }

  mostrarUsuarios() {
    console.log(UsersManager.usuarios);
  }

  validarUsuario(username, password) {
    UsersManager.cargarUsuariosDesdeArchivo();

    const usuario = UsersManager.usuarios.find((u) => u.username === username);
    if (!usuario) {
      console.log("Usuario no encontrado.");
      return;
    }

    const hashedInputPassword = crypto
      .createHash("sha256")
      .update(password)
      .digest("hex");

    if (usuario.password === hashedInputPassword) {
      console.log("Logueado");
    } else {
      console.log("Contraseña incorrecta");
    }
  }

  static guardarUsuariosEnArchivo() {
    fs.writeFileSync("usuarios.json", JSON.stringify(UsersManager.usuarios, null, 2));
  }

  static cargarUsuariosDesdeArchivo() {
    try {
      const data = fs.readFileSync("usuarios.json", "utf-8");
      UsersManager.usuarios = JSON.parse(data);
    } catch (error) {
      UsersManager.usuarios = [];
    }
  }
}

const manager = new UsersManager();
manager.crearUsuario({
  nombre: "Juan",
  apellido: "Pérez",
  username: "juanp",
  password: "secreto123"
});

manager.crearUsuario({
  nombre: "Ana",
  apellido: "García",
  username: "anag",
  password: "secreto456"
});

manager.mostrarUsuarios();

manager.validarUsuario("juanp", "secreto123");
manager.validarUsuario("juanp", "otra");
manager.validarUsuario("noexiste", "123");
