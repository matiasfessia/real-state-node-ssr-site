const showErrors = (errors) => 
`
  <div class="errors">
    <h3>Se encontraron los siguientes errores</h3>
    ${ errors.map(error => `<p>${error.msg}</p>`).join('') }
  </div>
`;
const getView = (session) => {console.log('ssss', session.errors); return `
  <form action="/contacto" method="post">
    <input type="text" value="${session.email ? session.email : ''}" name="email" placeholder="Ingrese su email" />
    <input type="text" name="subject" placeholder="Asunto" />
    <textarea name="message" placeholder="Mensaje"></textarea>
    <button type="submit">Enviar</button>
  </form>
  ${ session.messageSent ? `<p>Su mensaje fu enviado con exito</p>` : '' }
  ${ session.errors ? showErrors(session.errors) : '' }
`};

module.exports = { getView };
