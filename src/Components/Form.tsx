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
  const [email, setEmail] = useState<string>("")
  const [fecha, setFecha] = useState<string>("")
  const [sintomas, setSintomas] = useState<string>("")

  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (paciente !== undefined && Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);

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
      email,
      fecha, 
      sintomas
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
        email:"",
        fecha:"",
        sintomas:""
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
    setEmail("");
    setFecha("");
    setSintomas("")
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
              Nombre de la mascota 
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
              Propietario 
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
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email 
            </label>
            <input
              id="email"
              type="email"
              placeholder="email del propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold"
            >
              Fecha 
            </label>
            <input
              id="fecha"
              type="date"
              placeholder="fecha"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFecha(e.target.value)
              }
            />
          </div>
          <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas 
          </label>
          <input
            id="sintomas"
            type="text"
            placeholder="Síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSintomas(e.target.value)
            }
          />
        </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? "Guardar cambios" : "Agregar Paciente"}
          />
        </form>
      </div>
    );
  }
};
  

