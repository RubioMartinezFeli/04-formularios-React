import React, { useState } from 'react'

export const FomularioComponent = () => {

  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = e => {
    /*Hay que hacer uso del .preventDefault*/
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value
    }

    console.log(usuario);
    setUsuario(usuario);
  }


 {/* Para modificar el objeto dinhamicamente necesitamos 
    dentro del setState una función de call-back
    que capture el estado previo del objeto*/}

const cambiarDatos = e => {

  //Guardamos en una variable el name del elemento del formulario, ya que dependiendo
  //de quien efectue el onChange entrara un name u otro
  let name_del_input = e.target.name;

  setUsuario(estado_previo => ({ //return automatico con los parentesis
      ...estado_previo,// con ...  conseguimos el estado anterior del objeto
      [name_del_input]: e.target.value
    })
  );
}

  return (
    <div>
        <h1>Formularios en React</h1>

        {/*Mostramos la información del usuario a traves del estado
        con condición if &&  condición pregunta si usuario.enviar existe*/}

           {usuario.enviar && 
              (
                <div className='info_usuario label'>
                {usuario.nombre} {usuario.apellido} es {usuario.genero} 
                 y su Biografia es esta: <p>{usuario.bio}</p> 
                </div>
              )
           }

        {/*Hay que añadir etiqueta name para poder recoger
         la información en forma de objeto*/}

        <form onSubmit={conseguirDatosFormulario}>
            <input type="text"
                   placeholder='Nombre'
                   name='nombre'
                   onChange={cambiarDatos}
             />
            <input type="text"
                   placeholder='Apellido'
                   name='apellido'
                   onChange={cambiarDatos}
             />
            <select name='genero' onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea 
                    placeholder='Biografia' 
                    name='bio'
                    onChange={cambiarDatos} >
            </textarea>
            <input type="submit" value="Enviar" name='enviar'/>
        </form>
    </div>
  )
}