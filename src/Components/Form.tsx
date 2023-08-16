import { useState, useEffect } from 'react'
import { SetPacienteProps, SetListaPacientesProps, Paciente } from '../types'
import { v4 as uuidv4 } from 'uuid';
import { Error } from './Error'

export const Form: React.FC<SetPacienteProps & SetListaPacientesProps> = ({
  paciente,
  setPaciente,
  pacientes,
  setPacientes,
}) => {
  const [nombre, setNombre] = useState<string>("");
  const [propietario, setPropietario] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (paciente !== undefined && Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
    }
  }, [paciente]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validación de formulario:
    if ([nombre, propietario].includes("")) {
      console.log("Hay al menos un campo vacío");
      setError(true);
      return;
    }
    setError(false);

    console.log("evento form: enviado datos");

    const objetoPaciente: Paciente = {
      nombre,
      propietario,
    };
    console.log("El paciente es: ", objetoPaciente);

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados: Paciente[] = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      //Borro los campos del formulario al agregar el paciente:
      setPaciente({
        id: undefined,
        nombre: "",
        propietario: "",
      });
    } else {
      // Nuevo registro
      const generarIdUnico = (): string => {
        return uuidv4();
      };
      objetoPaciente.id = generarIdUnico();
      setPacientes([...pacientes, objetoPaciente]);
    }
    // Reiniciar el form
    setNombre("");
    setPropietario("");
  };

  if (paciente === undefined) {
    return <div>Loading....</div>;
  } else {
    return (
      <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento Pacientes
        </h2>

        <p className="text-lg mt-5 text-center mb-10">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold ">Administralos</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
          <span className={error ? "text-red-500" : "text-black"}>
            { error ? "Error en el formulario:" : "Rellene el formulario"}
            { error &&  <Error><p className='text-red-500'>Todos los campos son obligatorios</p></Error>}
          </span>
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNombre(e.target.value)
              }
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
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPropietario(e.target.value)
              }
            />
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    );
  }
};
  

