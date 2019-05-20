/*window.addEventListener('load', () => {
    var XHR = new XMLHttpRequest();

    var form = document.getElementById('registeration');

    // Alert when form submitted successfully i.e. on successful response
    form.addEventListener('load', (event) => {
        alert(event.target.responseText);
    });

    // Error handling if form didn't submitted successfully
    form.addEventListener('error', (event) => {
        alert('Oops something went wrong!!');
    });

    XHR.open('POST', 'http://localhost:3000/signup', true);
    var FD = {
        "FirstName": form.elements["FirstName"].value,
        "LastName": form.elements["LastName"].value
    }
    XHR.send();
    form.addEventListener('submit', (event) => {
        document.getElementById('subscriber').checked
    })
})*/