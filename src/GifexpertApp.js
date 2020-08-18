//snipef rafc
import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifexpertApp = () => {
    const [categorias, setCategorias] = useState(['pink panther'])

    const handleAdd = () => {        
        setCategorias([...categorias, ""]);
    }
    return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <hr/>
            <button onClick={ handleAdd }>Add categorias</button>
            <ol>
                {
                    categorias.map( cat => 
                        <GifGrid key={ cat } 
                            category={ cat }
                        />
                    )
                }
            </ol>
            
        </>
    )
}
