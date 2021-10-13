function addManager(Manager) {
    return ` 
    <div class="col">
    <div class="card" style="width: 18rem;">
        <div class="card-header bg-success">
            <h4 class="text-light">${Manager.name}</h4>
            <h5><i class="bi bi-clipboard-data"></i>Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${Manager.id}</li>
            <li class="list-group-item">${Manager.roleDetails} </li>
            <a href="mailto:${Manager.email}" class="btn btn-info">${Manager.email}</a>
        </ul>
    </div>
    </div>
    `
}

module.exports = addManager;