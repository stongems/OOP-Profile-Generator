const profileTemplate = (employees) => {
  let teamMember = "";
  for (let i = 0; i < employees.length; i++) {
    switch (employees[i].getRole()) {
      case "Manager":
        teamMember += `
          <div class="col">
          <div class="card mt-5" style="width: 18rem;">
              <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employees[i].name}</h5>
                <p class="card-text"><i class="fas fa-mug-hot "></i> <span>${employees[
                  i
                ].getRole()}</span></p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employees[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${
                  employees[i].email
                }">${employees[i].email}</a></li>
                <li class="list-group-item">Office Number: ${
                  employees[i].officeNumber
                }</li>
              </ul>
            </div>
      </div>`;
        break;
      case "Engineer":
        teamMember += `
          <div class="col">
            <div class="card mt-5" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                  <h5 class="card-title">${employees[i].name}</h5>
                  <p class="card-text"><i class="fas fa-glasses"></i> <span>${employees[
                    i
                  ].getRole()}</span></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employees[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    employees[i].email
                  }">${employees[i].email}</a></li>
                  <li class="list-group-item">Github: <a href="https://github.com/${
                    employees[i].github
                  }">${employees[i].github}</a></li>
                </ul>
              </div>
        </div>`;
        break;
      case "Intern":
        teamMember += `
          <div class="col">
            <div class="card mt-5" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                  <h5 class="card-title">${employees[i].name}</h5>
                  <p class="card-text"><i class="fas fa-graduation-cap"></i> <span>${employees[
                    i
                  ].getRole()}</span></p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employees[i].id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${
                    employees[i].email
                  }">${employees[i].email}<a/></li>
                  <li class="list-group-item">School: ${
                    employees[i].school
                  }</li>
                </ul>
              </div>
        </div>
      </div>`;
        break;
      default:
        return;
    }
  }
  let body = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
    </head>
    <body>
        <nav class="navbar navbar-dark bg-danger justify-content-center text-white">
            My Team
      <!-- Navbar content -->
    </nav>
    <div class="container">
        <div class="row ">


      ${teamMember}
    
    
      </div>
      </div>
      </body>
      </html>
      `;
  return body;
};
module.exports = profileTemplate;
