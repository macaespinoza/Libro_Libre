// Base de datos de libros


const listaLibros = [
    {
        id: 1,
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Ficción",
        sinopsis: "La obra maestra del realismo mágico que narra la historia de la familia Buendía a lo largo de varias generaciones en el pueblo ficticio de Macondo."
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ciencia Ficción",
        sinopsis: "Una distopía que explora los peligros del totalitarismo y la vigilancia masiva en una sociedad controlada por el Gran Hermano."
    },
    {
        id: 3,
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        genero: "Fantasía",
        sinopsis: "Una épica aventura en la Tierra Media donde un grupo diverso debe destruir un anillo poderoso para salvar su mundo."
    },
    {
        id: 4,
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        sinopsis: "La historia de Elizabeth Bennet y Mr. Darcy, explorando temas de amor, matrimonio y clase social en la Inglaterra del siglo XIX."
    },
    {
        id: 5,
        titulo: "El código Da Vinci",
        autor: "Dan Brown",
        genero: "Misterio",
        sinopsis: "Un thriller que combina arte, historia y conspiración mientras el profesor Robert Langdon resuelve un misterio ancestral."
    },
    {
        id: 6,
        titulo: "It",
        autor: "Stephen King",
        genero: "Terror",
        sinopsis: "Un grupo de amigos enfrenta sus miedos más profundos personificados en una entidad malévola que acecha su pueblo."
    },
    {
        id: 7,
        titulo: "Steve Jobs",
        autor: "Walter Isaacson",
        genero: "Biografía",
        sinopsis: "La biografía autorizada del cofundador de Apple, explorando su vida, trabajo y legado en la industria tecnológica."
    },
    {
        id: 8,
        titulo: "Sapiens",
        autor: "Yuval Noah Harari",
        genero: "Historia",
        sinopsis: "Un recorrido fascinante por la historia de la humanidad, desde nuestros orígenes hasta el presente."
    },
    {
        id: 9,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Ficción",
        sinopsis: "Las aventuras del ingenioso hidalgo que confunde la realidad con sus fantasías caballerescas."
    },
    {
        id: 10,
        titulo: "Fahrenheit 451",
        autor: "Ray Bradbury",
        genero: "Ciencia Ficción",
        sinopsis: "Una sociedad distópica donde los libros están prohibidos y los bomberos los queman en lugar de apagar incendios."
    },
    {
        id: 11,
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        sinopsis: "Un niño descubre que es un mago y comienza su educación en Hogwarts, donde enfrenta el retorno del malvado Voldemort."
    },
    {
        id: 12,
        titulo: "Cumbres borrascosas",
        autor: "Emily Brontë",
        genero: "Romance",
        sinopsis: "Una historia de amor y venganza entre Heathcliff y Catherine en los páramos de Yorkshire."
    },
    {
        id: 13,
        titulo: "Asesinato en el Orient Express",
        autor: "Agatha Christie",
        genero: "Misterio",
        sinopsis: "El detective Hercule Poirot debe resolver un asesinato ocurrido en un tren de lujo atrapado por la nieve."
    },
    {
        id: 14,
        titulo: "El resplandor",
        autor: "Stephen King",
        genero: "Terror",
        sinopsis: "Una familia se muda a un hotel aislado donde las fuerzas sobrenaturales comienzan a afectar al padre."
    },
    {
        id: 15,
        titulo: "Einstein: Su vida y su universo",
        autor: "Walter Isaacson",
        genero: "Biografía",
        sinopsis: "La vida del genio que revolucionó nuestra comprensión del espacio, tiempo y la realidad."
    }
]

// Variables globales
let librosActuales = [...listaLibros]

// Elementos del DOM
const listaLibrosDOM = document.getElementById('bookList')
const inputBusqueda = document.getElementById('searchInput')
const filtroGenero = document.getElementById('genreFilter')
const botonBuscar = document.getElementById('searchBtn')
const contadorResultados = document.getElementById('resultsCount')
const sinResultados = document.getElementById('noResults')

// Navegación
const enlacesNav = document.querySelectorAll('.nav-link')
const secciones = document.querySelectorAll('.section')

// Formulario de registro
const formularioRegistro = document.getElementById('registrationForm')
const mensajeExito = document.getElementById('successMessage')

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    renderizarLibros(librosActuales)
    inicializarNavegacion()
    inicializarBusqueda()
    inicializarFormulario()
})

// Renderizar libros en el DOM
function renderizarLibros(libros) {
    listaLibrosDOM.innerHTML = ''

    if (libros.length === 0) {
        listaLibrosDOM.style.display = 'none'
        sinResultados.style.display = 'block'
        actualizarContadorResultados(0)
        return
    }

    listaLibrosDOM.style.display = 'grid'
    sinResultados.style.display = 'none'

    libros.forEach(libro => {
        const tarjetaLibro = crearTarjetaLibro(libro)
        listaLibrosDOM.appendChild(tarjetaLibro)
    })

    actualizarContadorResultados(libros.length)
}

// Crear tarjeta de libro
function crearTarjetaLibro(libro) {
    const tarjeta = document.createElement('div')
    tarjeta.className = 'book-card'
    tarjeta.setAttribute('data-book-id', libro.id)

    tarjeta.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p class="book-author">por ${libro.autor}</p>
        <span class="book-genre">${libro.genero}</span>
        <p class="book-synopsis">${libro.sinopsis}</p>
    `

    tarjeta.addEventListener('click', () => {
        console.log(`Libro seleccionado: ${libro.titulo}`)
    })

    return tarjeta
}

// Actualizar contador de resultados
function actualizarContadorResultados(cantidad) {
    const totalLibros = listaLibros.length

    if (cantidad === totalLibros) {
        contadorResultados.textContent = `Mostrando todos los libros (${cantidad})`
    } else {
        contadorResultados.textContent = `Mostrando ${cantidad} de ${totalLibros} libros`
    }
}

// Función de búsqueda
function realizarBusqueda() {
    const terminoBusqueda = inputBusqueda.value.toLowerCase().trim()
    const generoSeleccionado = filtroGenero.value

    librosActuales = listaLibros.filter(libro => {
        const coincideBusqueda = terminoBusqueda === '' ||
            libro.titulo.toLowerCase().includes(terminoBusqueda) ||
            libro.autor.toLowerCase().includes(terminoBusqueda)

        const coincideGenero = generoSeleccionado === '' || libro.genero === generoSeleccionado

        return coincideBusqueda && coincideGenero
    })

    renderizarLibros(librosActuales)

    console.log(`Búsqueda realizada: "${terminoBusqueda}" | Género: "${generoSeleccionado}" | Resultados: ${librosActuales.length}`)
}

// Inicializar eventos de búsqueda
function inicializarBusqueda() {
    botonBuscar.addEventListener('click', realizarBusqueda)

    inputBusqueda.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            realizarBusqueda()
        }
    })

    filtroGenero.addEventListener('change', realizarBusqueda)

    inputBusqueda.addEventListener('input', () => {
        if (inputBusqueda.value === '' && filtroGenero.value === '') {
            librosActuales = [...listaLibros]
            renderizarLibros(librosActuales)
        }
    })
}

// Navegación entre secciones
function inicializarNavegacion() {
    enlacesNav.forEach(enlace => {
        enlace.addEventListener('click', (e) => {
            e.preventDefault()

            const seccionObjetivo = enlace.getAttribute('data-section')

            enlacesNav.forEach(l => l.classList.remove('active'))
            enlace.classList.add('active')

            secciones.forEach(seccion => {
                seccion.classList.remove('active')
            })

            document.getElementById(seccionObjetivo).classList.add('active')

            console.log(`Navegando a sección: ${seccionObjetivo}`)
        })
    })
}

// Validación del formulario
function inicializarFormulario() {
    const camposFormulario = formularioRegistro.querySelectorAll('.form-input, input[type="checkbox"]')

    camposFormulario.forEach(campo => {
        campo.addEventListener('blur', () => validarCampo(campo))
        campo.addEventListener('input', () => {
            if (campo.classList.contains('error')) {
                validarCampo(campo)
            }
        })
    })

    formularioRegistro.addEventListener('submit', manejarEnvioFormulario)
}

// Validar campo individual
function validarCampo(campo) {
    const nombreCampo = campo.name
    const valor = campo.value.trim()
    const elementoError = campo.parentElement.querySelector('.error-message')

    let mensajeError = ''

    switch (nombreCampo) {
        case 'nombre':
            if (valor === '') {
                mensajeError = 'El nombre es obligatorio'
            } else if (valor.length < 3) {
                mensajeError = 'El nombre debe tener al menos 3 caracteres'
            }
            break

        case 'email':
            if (valor === '') {
                mensajeError = 'El correo electrónico es obligatorio'
            } else if (!esEmailValido(valor)) {
                mensajeError = 'Ingresa un correo electrónico válido'
            }
            break

        case 'password':
            if (valor === '') {
                mensajeError = 'La contraseña es obligatoria'
            } else if (valor.length < 6) {
                mensajeError = 'La contraseña debe tener al menos 6 caracteres'
            }

            const confirmarContrasena = document.getElementById('confirmPassword')
            if (confirmarContrasena.value !== '') {
                validarCampo(confirmarContrasena)
            }
            break

        case 'confirmPassword':
            const contrasena = document.getElementById('password').value
            if (valor === '') {
                mensajeError = 'Debes confirmar tu contraseña'
            } else if (valor !== contrasena) {
                mensajeError = 'Las contraseñas no coinciden'
            }
            break

        case 'generoPreferido':
            if (valor === '') {
                mensajeError = 'Selecciona un género preferido'
            }
            break

        case 'terminos':
            if (!campo.checked) {
                mensajeError = 'Debes aceptar los términos y condiciones'
            }
            break
    }

    if (mensajeError) {
        campo.classList.add('error')
        elementoError.textContent = mensajeError
        return false
    } else {
        campo.classList.remove('error')
        elementoError.textContent = ''
        return true
    }
}

// Validar email
function esEmailValido(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(email)
}

// Manejar envío del formulario
function manejarEnvioFormulario(e) {
    e.preventDefault()

    const camposFormulario = formularioRegistro.querySelectorAll('.form-input, input[type="checkbox"]')
    let formularioValido = true

    camposFormulario.forEach(campo => {
        if (!validarCampo(campo)) {
            formularioValido = false
        }
    })

    if (formularioValido) {
        const datosFormulario = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            generoPreferido: document.getElementById('generoPreferido').value,
            fechaRegistro: new Date().toISOString()
        }

        console.log('Usuario registrado:', datosFormulario)

        formularioRegistro.style.display = 'none'
        mensajeExito.style.display = 'block'

        setTimeout(() => {
            formularioRegistro.reset()
            formularioRegistro.style.display = 'flex'
            mensajeExito.style.display = 'none'

            const mensajesError = document.querySelectorAll('.error-message')
            mensajesError.forEach(msg => msg.textContent = '')

            const camposConError = document.querySelectorAll('.form-input.error')
            camposConError.forEach(campo => campo.classList.remove('error'))

            enlacesNav[0].click()
        }, 3000)
    } else {
        console.log('Formulario inválido. Por favor corrige los errores.')
    }
}
