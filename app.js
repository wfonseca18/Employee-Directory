
const hideAll = function () {
    $('.pane').hide();
}

const search = function (fieldName, searchValue, action) {
    for (let i = 0; i < employeeList.length; i++) {
        if (employeeList[i][fieldName] === searchValue) {
            switch (action) {
                case 'verify':
                    return employeeList[i][fieldName];
                case 'delete':
                    employeeList.splice(i, 1);
                    break;
            }

        }
    }
}

const showView = function () {
    hideAll();
    $('#viewPane').show();

    // Sets up the view pane
    $('#viewPane').empty();
    for (let i = 0; i < employeeList.length; i++) {
        $('#viewPane').append(`<p>${employeeList[i].name}</p>`);
        $('#viewPane').append(`<p>${employeeList[i].officeNum}</p>`);
        $('#viewPane').append(`<p>${employeeList[i].phoneNum}</p>`);
    }
}

const showAdd = function () {
    hideAll();
    $('#addPane').show();
}

const showVerify = function () {
    hideAll();
    $('#verifyPane').show();
    $('#verifyAnswer').text('');
}

const showUpdate = function () {
    hideAll();
    $('#updatePane').show();
}

const showDelete = function () {
    hideAll();
    $('#deletePane').show();
}

const submitEmp = function () {
    let newEmp = {
        'name': $('[name~=addEmpName]').val(),
        'officeNum': $('[name~=addEmpOfficeNum]').val(),
        'phoneNum': $('[name~=addEmpPhoneNum]').val(),
    };
    employeeList.push(newEmp);
    showView();
}

const verifyEmp = function () {
    let emp = $('[name~=verifyEmpName]').val();
    let verify = 'No';
    let searchResults = search('name', emp, 'verify');

    if (searchResults) {
        verify = 'Yes';
    }

    $('#verifyAnswer').text(verify);
}

const updateEmp = function () {
    let name = $('[name~=updateEmpName]').val();
    let office = $('[name~=updateEmpOfficeNum]').val();
    let phone = $('[name~=updateEmpPhoneNum]').val();

    let searchResults = search('name', name, 'verify');

    if (searchResults) {
        for (let i = 0; i < employeeList.length; i++) {
            if (employeeList[i].name === name) {
                employeeList[i].officeNum = office;
                employeeList[i].phoneNum = phone;
            }
        }
    }
    showView();
}

const deleteEmp = function () {
    let emp = $('[name~=deleteEmpName]').val();
    search('name', emp, 'delete');
    showView();
}



showView();

$('#view').on('click', showView);
$('#add').on('click', showAdd);
$('#verify').on('click', showVerify);
$('#update').on('click', showUpdate);
$('#delete').on('click', showDelete);
