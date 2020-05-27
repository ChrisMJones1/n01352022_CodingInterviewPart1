let employee_info = [];

function onLoad() {

    getAllEmployees()
        .then(data => {
            console.log(data);
            for(let x in data) {
                let pic = data[x].employeehaspic === "1" ? `<img style="width: 95%; border-radius: 50%; padding-top: 2rem;" src="http://sandbox.bittsdevelopment.com/code1/employeepics/${data[x].employeeid}.jpg" alt="picture of ${data[x].employeefname} ${data[x].employeelname}" />` : ``;
                let featured = data[x].employeeisfeatured === "1" ?  `<div class="crown text--large">👑</div>` : ``;

                let html_employee =
                    `
                <div class="color--white">
                    <div class="project">
                        ${featured}
                        ${pic}
                        <h3 class="text--large">${data[x].employeefname} ${data[x].employeelname}</h3>
                        <div class="projects__text">${data[x].employeebio}</div>
                        <div class="container--inner">
                            ${data[x].roles.map((role) => `<div style="background-color: ${role.rolecolor}; color: #202020; font-size: 2rem;">${role.rolename}</div>`
                    ).join('')}
                        </div>
                    </div>
                </div>
                `;
                employee_info.push(html_employee);
            }
            let employee_grid = document.getElementById('employee_info');
            let output = employee_info.join(' ');
            employee_grid.innerHTML = output;
        });


}


async function getAllEmployees() {
    let response = await fetch("http://sandbox.bittsdevelopment.com/code1/fetchemployees.php", {
        method: "GET",

    });
    let data = await response.json();
    return data;
}

window.addEventListener('load', onLoad);

