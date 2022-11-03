
export const getImagen = async() => {

    try {

        const apiKey = 'TOKCZA34lQoNIE30WwBO2V9CvS8LIwwS';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 
        //SI EL API NO EXISTE, LA LINEA DE ABAJO DISPARA EL ERROR.
        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen';
    }
    
    
}

getImagen();




