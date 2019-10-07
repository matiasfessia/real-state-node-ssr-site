const headerView = require('./header.view');

const getView = ({content, fullHost}) => `
  <html>
  <head>
    <title>Inmobiliaria SPACIOS</title>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
  </head>
  <body>
    ${ headerView.getView(fullHost) }
    ${ content }
    <div class="footer-wrapper">
      <div class="footer">
        <p>footer</p>
      </div>
    </div>
  <body>
  </html>
`;

module.exports = { getView };
