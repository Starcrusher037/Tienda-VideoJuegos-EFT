import { useState } from 'react';

/**
 * DESCRIPCIÓN: Sección semántica de contacto con formulario interactivo y
 * validación completa en JavaScript utilizando Bootstrap 5.
 */
export default function ContactForm() {
  // Estado local para los valores de los campos del formulario
  const [valores, setValores] = useState({
    nombre: '',
    email: '',
    asunto: 'Consulta General',
    mensaje: ''
  });

  // Estado local para los mensajes de error por campo
  const [errores, setErrores] = useState({});

  // Estado local para indicar si el formulario fue enviado con éxito
  const [enviadoExitoso, setEnviadoExitoso] = useState(false);

  // Expresión regular estándar para validar correos electrónicos válidos
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /**
   * Manejador para actualizar los valores del formulario cuando el usuario escribe.
   * Utiliza la propiedad 'name' del input para actualizar la clave correspondiente.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((prev) => ({
      ...prev,
      [name]: value
    }));

    // Si el campo modificado tenía un error previo, lo eliminamos dinámicamente
    if (errores[name]) {
      setErrores((prev) => ({
        ...prev,
        [name]: null
      }));
    }

    // Si había una alerta de éxito previa, la ocultamos al volver a escribir
    if (enviadoExitoso) {
      setEnviadoExitoso(false);
    }
  };

  /**
   * Función de validación de campos según las reglas del negocio:
   * - Nombre: requerido, mínimo 3 caracteres.
   * - Email: requerido, formato de correo válido.
   * - Mensaje: requerido, mínimo 10 caracteres.
   * @returns {boolean} Retorna true si todos los datos son válidos.
   */
  const validarFormulario = () => {
    const nuevosErrores = {};

    // Validación del Nombre
    if (!valores.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    } else if (valores.nombre.trim().length < 3) {
      nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres.';
    }

    // Validación del Correo Electrónico
    if (!valores.email.trim()) {
      nuevosErrores.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(valores.email.trim())) {
      nuevosErrores.email = 'Ingresa un correo electrónico válido (ejemplo: usuario@correo.com).';
    }

    // Validación del Mensaje
    if (!valores.mensaje.trim()) {
      nuevosErrores.mensaje = 'El mensaje no puede estar vacío.';
    } else if (valores.mensaje.trim().length < 10) {
      nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres para describir tu consulta.';
    }

    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  /**
   * Manejador del evento submit del formulario.
   * Previene el comportamiento por defecto de recargar la página y ejecuta la validación.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificamos si los datos cumplen todas las validaciones
    if (validarFormulario()) {
      // Simulación de envío exitoso a la administración del sitio
      setEnviadoExitoso(true);

      // Limpiamos los campos del formulario
      setValores({
        nombre: '',
        email: '',
        asunto: 'Consulta General',
        mensaje: ''
      });
      setErrores({});
    }
  };

  /**
   * Función para reiniciar el formulario manualmente
   */
  const handleReset = () => {
    setValores({
      nombre: '',
      email: '',
      asunto: 'Consulta General',
      mensaje: ''
    });
    setErrores({});
    setEnviadoExitoso(false);
  };

  return (
    <section id="contacto" className="py-5 bg-dark text-white border-top border-secondary border-opacity-25">
      <div className="container py-lg-4">
        {/* Cabecera de la sección */}
        <div className="text-center mb-5">
          <span className="badge bg-primary bg-opacity-25 text-primary border border-primary px-3 py-2 rounded-pill fw-semibold text-uppercase">
            <i className="bi bi-headset me-1"></i> Atención al Cliente
          </span>
          <h2 className="display-6 fw-bold mt-2 text-white">Contáctanos</h2>
          <p className="text-secondary max-w-600 mx-auto">
            ¿Tienes dudas sobre algún juego, un pedido o deseas sugerir un título para nuestro catálogo?
            Escríbenos y nuestro equipo te responderá a la brevedad.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="bg-dark bg-opacity-75 p-4 p-md-5 rounded-4 border border-secondary border-opacity-50 shadow-lg">
              
              {/* Alerta de éxito con Bootstrap 5 al enviar el formulario */}
              {enviadoExitoso && (
                <div className="alert alert-success d-flex align-items-center gap-2 rounded-3 shadow-sm mb-4" role="alert">
                  <i className="bi bi-check-circle-fill fs-4 flex-shrink-0"></i>
                  <div>
                    <strong>¡Mensaje enviado con éxito!</strong> Nos pondremos en contacto contigo a tu correo lo antes posible.
                  </div>
                </div>
              )}

              {/* Alerta general en caso de errores en el formulario */}
              {Object.keys(errores).length > 0 && (
                <div className="alert alert-danger d-flex align-items-center gap-2 rounded-3 shadow-sm mb-4" role="alert">
                  <i className="bi bi-exclamation-triangle-fill fs-4 flex-shrink-0"></i>
                  <div>
                    <strong>Por favor corrige los errores:</strong> Revisa los campos marcados en rojo antes de enviar.
                  </div>
                </div>
              )}

              {/* 
                Formulario de contacto con validación controlada por React 
                noValidate desactiva la validación nativa del navegador para usar nuestra validación JS personalizada
              */}
              <form onSubmit={handleSubmit} onReset={handleReset} noValidate>
                <div className="row g-3">
                  
                  {/* Campo: Nombre del usuario */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="nombre" className="form-label text-light fw-semibold">
                      Nombre completo <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-secondary bg-opacity-25 border-secondary text-secondary">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className={`form-control bg-dark text-white border-secondary ${
                          errores.nombre ? 'is-invalid' : ''
                        }`}
                        placeholder="Ej: Alex Mercer"
                        value={valores.nombre}
                        onChange={handleChange}
                      />
                      {/* Mensaje de error dinámico de Bootstrap */}
                      {errores.nombre && (
                        <div className="invalid-feedback">{errores.nombre}</div>
                      )}
                    </div>
                  </div>

                  {/* Campo: Correo Electrónico */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label text-light fw-semibold">
                      Correo Electrónico <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-secondary bg-opacity-25 border-secondary text-secondary">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control bg-dark text-white border-secondary ${
                          errores.email ? 'is-invalid' : ''
                        }`}
                        placeholder="nombre@ejemplo.com"
                        value={valores.email}
                        onChange={handleChange}
                      />
                      {/* Mensaje de error dinámico de Bootstrap */}
                      {errores.email && (
                        <div className="invalid-feedback">{errores.email}</div>
                      )}
                    </div>
                  </div>

                  {/* Campo: Asunto / Categoría de la consulta */}
                  <div className="col-12">
                    <label htmlFor="asunto" className="form-label text-light fw-semibold">
                      Motivo del contacto
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      className="form-select bg-dark text-white border-secondary"
                      value={valores.asunto}
                      onChange={handleChange}
                    >
                      <option value="Consulta General">Consulta General</option>
                      <option value="Soporte Técnico">Soporte Técnico / Estado de compra</option>
                      <option value="Sugerencia de Catálogo">Sugerencia de Videojuego</option>
                      <option value="Venta Mayorista">Consultas comerciales</option>
                    </select>
                  </div>

                  {/* Campo: Mensaje */}
                  <div className="col-12">
                    <label htmlFor="mensaje" className="form-label text-light fw-semibold">
                      Mensaje <span className="text-danger">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows="4"
                      className={`form-control bg-dark text-white border-secondary ${
                        errores.mensaje ? 'is-invalid' : ''
                      }`}
                      placeholder="Escribe aquí tu consulta o comentario detallado..."
                      value={valores.mensaje}
                      onChange={handleChange}
                    ></textarea>
                    {/* Mensaje de error dinámico de Bootstrap */}
                    {errores.mensaje && (
                      <div className="invalid-feedback">{errores.mensaje}</div>
                    )}
                  </div>

                  {/* Botones de acción organizados con Flexbox */}
                  <div className="col-12 d-flex flex-wrap gap-2 justify-content-end mt-4">
                    <button
                      type="reset"
                      className="btn btn-outline-secondary px-4 rounded-pill"
                    >
                      <i className="bi bi-eraser me-1"></i> Limpiar
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary px-5 rounded-pill fw-semibold shadow"
                    >
                      <i className="bi bi-send-fill me-1"></i> Enviar Mensaje
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
