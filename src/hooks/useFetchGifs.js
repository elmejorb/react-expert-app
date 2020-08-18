import { useState, useEffect } from "react"
import { getGif } from "../helpers/getGifs";




export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //permite que se ejecute una sola vez al renderizar el componente
    useEffect(() => {
        getGif( category )
            .then( imgs => setState( {
                data: imgs,
                loading: false
            } ))
    }, [ category ])

    

    return state;
}
