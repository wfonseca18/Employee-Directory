
for (let i = 0; i < employeeList.length; i++) {
    $('.content').append(`<p">${employeeList[i].name}</p>`);
    $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
    $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
}

