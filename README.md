# Aplicación de Gestión de Usuarios

Esta aplicación permite gestionar usuarios mediante una API REST y una interfaz web desarrollada en Angular. Incluye funcionalidades para listar y crear usuarios.

---

## Requisitos Previos

### Para la API:
- [.NET 6 o superior](https://dotnet.microsoft.com/download)
- [SQLite](https://www.sqlite.org/download.html) (preconfigurado en el proyecto)

### Para la aplicación web:
- [Node.js 16 o superior](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli) instalado globalmente

---

## Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/DavidZeballos/IDWM_Prueba2_Web
```

La API estará disponible en: `http://localhost:5056`

### 2. Configurar la Aplicación Web

1. Cambia al directorio de la app web:
   ```bash
   cd UserWebClient
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```

La aplicación estará disponible en: `http://localhost:4200`

---

## Uso

### Funcionalidades Principales

1. **Lista de Usuarios**
   - Accede a la lista de usuarios existentes desde la página principal.
   - Botón en la barra de navegación: "Lista de Usuarios".

2. **Crear Usuario**
   - Completa el formulario para añadir un nuevo usuario con los siguientes campos:
     - Nombre (entre 3 y 20 caracteres).
     - Correo Electrónico (formato válido).
     - Fecha de Nacimiento (antes de la fecha actual).
     - Género (opciones predefinidas).
   - Botón en la barra de navegación: "Crear Usuario".