function addIntern(Intern){
    return `
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-success">
            <h4 class="text-light">${Intern.name}</h4>
            <h5><i class="bi bi-eyeglasses"></i>Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${Intern.id}</li>
            <li class="list-group-item">${Intern.roleDetails} </li>
            <a href="mailto:${Intern.email}" class="btn btn-secondary">${Intern.email}</a>
        </ul>
    </div>
    </div>
    `
}

module.exports = addIntern;