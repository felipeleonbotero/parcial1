const obtenerValorInput = () => {
    const inputTexto = document.getElementById("input_personaje");
    const valor = inputTexto.value;
    peticionApi(valor);

};

const peticionApi = (nombrePersonaje) => {
    const baseURL = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`;


    axios.get(baseURL)
        .then(res => printData(res.data))
        .catch((error)=>{
            console.log('Error:', error);// el error que esta demostrando
            alert("Personaje no encontrado")
        });
};

const printData = (data) => {
    console.log(data)    
    const respuesta = document.getElementById("show-info");
    if (data.results && data.results.length > 0) { //por si se copia mal 
        const personaje = data.results[0];
        respuesta.innerHTML = `
            <h1>${personaje.name}</h1>
            <img src=${personaje.image} alt="fsefes">
            <p>Género: ${personaje.gender}</p>
            <p>Estado: ${personaje.status}</p>
            <p>especie: ${personaje.species}</p>`;
            
    } else {
        respuesta.innerHTML = '<p>Personaje no encontrado.</p>';
    }
};
