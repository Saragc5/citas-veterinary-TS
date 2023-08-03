import { useState, useEffect } from 'react'
import { SetPacienteProps, SetListaPacientesProps } from '../types'


export const Form:React.FC<SetPacienteProps & SetListaPacientesProps> = ({
 paciente,
 setPaciente,
 pacientes,
 setPacientes
}) => {
  const [nombre, setNombre ] = useState<string>("")
  const [propietario, setPropietario] = useState<string>()

  const [error, setError ] = useState<boolean>(false)

  useEffect(() => {
    if( Object.keys(paciente).length > 0  ) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        
    }
}, [paciente])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validaición de formulario:
    if([nombre, propietario].includes(" ")){
      console.log("Hay al menos un campo vacío")
      setError(true)
      return;
    }
    else {
      setError(false)
      console.log("todos los campos están llenos");
      
    }
    console.log("evento form enviado")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold ">Administralos</span>
      </p>

      <form 
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? "Hay error" : "No hay error"}
        <div className="mb-5">
       
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota {nombre}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) =>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
       
       <label
         htmlFor="propietario"
         className="block text-gray-700 uppercase font-bold"
       >
         Propietario {propietario}
       </label>
       <input
         id="propietario"
         type="text"
         placeholder="nombre del propietario"
         className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
         value={propietario}
         onChange={(e:React.ChangeEvent<HTMLInputElement>) =>setPropietario(e.target.value)}
       />
     </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
}