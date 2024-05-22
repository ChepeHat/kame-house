

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	price: /^\d+(\.\d{1,2})?$/, // Números para precio
	image: /^(https?:\/\/.*\.(?:png|jpg|jpeg|webp|gif|bmp|svg))$/i, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    name : false,
    price : false,
    image : false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
            case "name":
                validarCampo(expresiones.name, e.target, "name");
            break; 
            case "email":
                validarCampo(expresiones.price, e.target, "email");
            break;
            case "image":
                validarCampo(expresiones.image, e.target, "image");
            break;
    }
    
}


const validarCampo = (expresion, input, campo) => {   
    if (expresion.test(input.value)) {
        campos[campo] = true;
    } else {
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

// EJEMPLO


export const validaciones = {
    validarFormulario, validarCampo
};