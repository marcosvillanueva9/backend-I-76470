class TicketManager {
  #precioBaseDeGanancia
  #eventos
  #idCounter

  constructor() {
    this.#precioBaseDeGanancia = 0.15;
    this.#eventos = [];
    this.#idCounter = 1;
  }

  getEventos() {
    return this.#eventos;
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.#idCounter++,
      nombre,
      lugar,
      precio: precio + precio * this.#precioBaseDeGanancia,
      capacidad,
      fecha,
      participantes: []
    };
    this.#eventos.push(evento);
  }

  agregarUsuario(idEvento, idUsuario) {
    const evento = this.#eventos.find(e => e.id === idEvento);
    if (!evento) {
      console.error("Evento no encontrado");
      return;
    }
    if (evento.participantes.includes(idUsuario)) {
      console.warn("Usuario ya registrado en el evento");
      return;
    }
    evento.participantes.push(idUsuario);
  }

  ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
    const eventoOriginal = this.#eventos.find(e => e.id === idEvento);
    if (!eventoOriginal) {
      console.error("Evento original no encontrado");
      return;
    }

    const nuevoEvento = {
      ...eventoOriginal,
      id: this.#idCounter++,
      lugar: nuevaLocalidad,
      fecha: nuevaFecha,
      participantes: []
    };

    this.#eventos.push(nuevoEvento);
  }
}

// Ejemplo de uso:
const manager = new TicketManager();

manager.agregarEvento("Recital", "Mendoza", 1000);
manager.agregarEvento("Obra de Teatro", "CABA", 500);

manager.agregarUsuario(1, "usuario123");
manager.agregarUsuario(1, "usuario456");
manager.agregarUsuario(2, "usuario123");

manager.ponerEventoEnGira(1, "Córdoba", "2025-08-20");

console.log(manager.getEventos());
