const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const userData = {
        nombre: formData.get('nombre'),
        apellido: formData.get('apellido'),
        fechaDeNacimiento: formData.get('fechaDeNacimiento'),
    };
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'content-type': 'aplication/json',
        },
    })

        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
});