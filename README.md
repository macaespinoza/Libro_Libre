# LibroLibre - Biblioteca Digital

## Descripción del Proyecto
LibroLibre es una plataforma web de biblioteca digital que permite a los usuarios buscar, explorar y registrarse para acceder a un catálogo de libros electrónicos y audiolibros.

## Estructura de Archivos
```
LibroLibre/
├── LibroLibre_grupo1.html    # Archivo HTML principal
├── styles.css                # Estilos y diseño responsivo
├── app.js                    # Lógica de la aplicación
└── README.md                 # Este archivo
```

## Características Implementadas

### 1. Navegación
- Sistema de navegación con tres secciones: Catálogo, Registro y Sobre nosotros
- Navegación sin recarga de página usando JavaScript
- Indicador visual de la sección activa

### 2. Búsqueda de Libros
- Búsqueda en tiempo real por título o autor
- Filtrado por género literario
- Búsqueda combinada (texto + género)
- Contador dinámico de resultados
- Mensaje cuando no hay resultados

### 3. Catálogo de Libros
- 15 libros precargados en la base de datos
- Visualización en tarjetas con:
  - Título del libro
  - Autor
  - Género
  - Sinopsis
- Diseño en grid responsivo
- Efectos hover interactivos

### 4. Formulario de Registro
- Validación en tiempo real de todos los campos
- Campos incluidos:
  - Nombre completo
  - Correo electrónico
  - Contraseña
  - Confirmación de contraseña
  - Género literario preferido
  - Términos y condiciones
- Mensajes de error específicos para cada campo
- Validación de formato de email
- Verificación de contraseñas coincidentes
- Mensaje de éxito tras registro

### 5. Diseño Responsivo
- Adaptable a dispositivos móviles, tablets y escritorio
- Breakpoints en 768px y 480px
- Grid flexible que se ajusta al tamaño de pantalla

## Funciones JavaScript Principales

### Manipulación del DOM
- `renderBooks(books)`: Renderiza las tarjetas de libros
- `createBookCard(book)`: Crea elementos HTML para cada libro
- `updateResultsCount(count)`: Actualiza el contador de resultados

### Búsqueda y Filtrado
- `performSearch()`: Ejecuta la búsqueda combinando criterios
- Filtrado en tiempo real con el método `filter()`
- Expresión aritmética para contar resultados

### Validación
- `validateField(field)`: Valida campos individuales
- `isValidEmail(email)`: Valida formato de correo electrónico
- `handleFormSubmit(e)`: Procesa el envío del formulario

### Eventos Utilizados
- `click`: Para botones de búsqueda y navegación
- `keypress`: Para buscar al presionar Enter
- `change`: Para el selector de género
- `input`: Para limpiar búsqueda y validación en tiempo real
- `blur`: Para validar campos al perder el foco
- `submit`: Para procesar el formulario

## Cómo Usar

1. **Explorar el Catálogo**
   - Abre el archivo HTML en tu navegador
   - Por defecto, verás todos los libros disponibles
   - Usa la barra de búsqueda para filtrar por título o autor
   - Selecciona un género del menú desplegable
   - Haz clic en "Buscar" o presiona Enter

2. **Registrarse**
   - Navega a la sección "Registro"
   - Completa todos los campos del formulario
   - La validación se activa al salir de cada campo
   - Acepta los términos y condiciones
   - Haz clic en "Crear cuenta"

3. **Conocer Más**
   - Visita la sección "Sobre nosotros"
   - Conoce la misión y características de LibroLibre

## Validaciones Implementadas

### Campo Nombre
- No puede estar vacío
- Mínimo 3 caracteres

### Campo Email
- No puede estar vacío
- Debe tener formato válido (nombre@dominio.com)

### Campo Contraseña
- No puede estar vacía
- Mínimo 6 caracteres

### Confirmación de Contraseña
- No puede estar vacía
- Debe coincidir exactamente con la contraseña

### Género Preferido
- Debe seleccionar una opción

### Términos y Condiciones
- Debe estar marcado para continuar

## Base de Datos de Libros

El sistema incluye 15 libros de diferentes géneros:
- Ficción (2 libros)
- Ciencia Ficción (2 libros)
- Fantasía (2 libros)
- Romance (2 libros)
- Misterio (2 libros)
- Terror (2 libros)
- Biografía (2 libros)
- Historia (1 libro)

## Tecnologías Utilizadas
- HTML5 (estructura semántica)
- CSS3 (variables CSS, Grid, Flexbox)
- JavaScript ES6+ (arrow functions, template literals, destructuring)

## Características Técnicas

### JavaScript
- Sin punto y coma innecesarios
- Uso de const y let apropiadamente
- Arrow functions
- Template literals
- Array methods (filter, forEach, map)
- Event delegation
- Manipulación avanzada del DOM

### CSS
- Variables CSS para colores y estilos
- Grid y Flexbox para layouts
- Media queries para responsividad
- Transiciones y animaciones sutiles
- Box-shadow para profundidad

### HTML
- Estructura semántica (nav, main, section, footer)
- Atributos data-* para almacenar información
- Formularios con validación HTML5
- Accesibilidad con labels apropiados

## Mejoras Futuras Posibles
- Integración con backend para persistencia de datos
- Sistema de autenticación real
- Favoritos y lista de lectura
- Sistema de reseñas y calificaciones
- Descarga de libros (PDF/EPUB)
- Modo oscuro
- Búsqueda avanzada con más filtros
- Paginación del catálogo

## Notas para el Bootcamp
Este proyecto demuestra:
- Manipulación efectiva del DOM
- Validación de formularios sin librerías externas
- Búsqueda y filtrado de datos
- Diseño responsivo
- Código limpio y organizado
- Uso de eventos múltiples
- Gestión del estado de la aplicación
- Buenas prácticas de JavaScript

## Autor
Proyecto desarrollado para el Bootcamp de Desarrollo Full-stack

## Licencia
Proyecto educativo - LibroLibre 2024
