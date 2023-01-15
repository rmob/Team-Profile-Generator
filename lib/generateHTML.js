const Manager = require('./Manager')

function generateHtmlContent() {
    return `<header id="title">My Team</header>
    <main class="container">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title" id="employee-name">${manager.name}</h5>
              <p class="card-text" id="role">${manager.getRole()}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item" id="employee-id">${manager.id}</li>
              <li class="list-group-item" id="email"><a href='#'>${manager.email}</a></li>
              <li class="list-group-item" id="third">${manager.officeNumber}</li>
            </ul>
          </div>
    </main>`
}
module.exports = generateHtmlContent