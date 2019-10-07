const showErrors = (errors) => `
  <div class="errors">
    ${ errors.map(error => `<p>${error}</p>`).join('') }
  </div>
`;

const getView = (session) => `
  <form action="/contacto" method="post">
    <input type="email" name="email" placeholder="Ingrese su email" />
    <input type="text" name="subject" placeholder="Asunto" />
    <textarea name="message" placeholder="Mensaje"></textarea>
    <button type="submit">Enviar</button>
  </form>
  ${ session.messageSent ? `<p>holaaaaaaa</p>` : '' }
  ${ session.errors ? showErrors(session.errors) : '' }
`;

module.exports = { getView };
