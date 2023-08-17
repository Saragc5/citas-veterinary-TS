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
  const [fechaIngreso, setFechaIngreso] = useState<string>("")
  const [fechaAlta, setFechaAlta] = useState<string>("")
  const [sintomas, setSintomas] = useState<string>("")
  const [tratamiento, setTratamiento] = useState<string>("")

  const [error, setError] = useState<boolean>(false);

  

  useEffect(() => {
    if (paciente !== undefined && Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFechaIngreso(paciente.fechaIngreso);      
      setSintomas(paciente.sintomas);
      setFechaAlta(paciente.fechaAlta);      
      setTratamiento(paciente.tratamiento)

    }
  }, [paciente]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validación de formulario:
    if ([nombre, propietario, email, fechaIngreso, sintomas].includes("")) {      
      setError(true);
      return;
    }
    setError(false);
    

    const objetoPaciente: Paciente = {
      nombre,
      propietario,
      email,
      fechaIngreso,
      fechaAlta, 
      sintomas,
      tratamiento
    };
    

    if (paciente.id) {
      // Editando el Registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados: Paciente[] = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      //Borro los campos del formulario al agregar el paciente:
      setPaciente({
        id: "",
        nombre: "",
        propietario: "",
        email:"",
        fechaIngreso:"",
        fechaAlta:"",
        sintomas:"",
        tratamiento:""
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
    setFechaIngreso("");
    setFechaAlta("");
    setSintomas("");
    setTratamiento("");
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
          <span className={error ? "text-red-500 mb-10" : "text-black"}>
            { error ? "Error en el formulario:" : "Rellene el formulario"}
            { error &&  <Error><p className='text-red-500 mb-6'>Rellene los campos <b>obligatorios</b> para el <b>ingreso</b></p></Error>}
          </span>
          <div className="mb-5">
            <label
              htmlFor="mascota"
              className={error ? "block text-red-700 uppercase font-bold" : "block text-gray-700 uppercase font-bold"}
            >
              Nombre del paciente
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
              className={error ? "block text-red-700 uppercase font-bold" : "block text-gray-700 uppercase font-bold"}
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
              className={error ? "block text-red-700 uppercase font-bold" : "block text-gray-700 uppercase font-bold"}
            >
              Email de contacto
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
              className={error ? "block text-red-700 uppercase font-bold" : "block text-gray-700 uppercase font-bold"}
            >
              Fecha de ingreso
            </label>
            <input
              id="fecha"
              type="date"
              placeholder="fecha de ingreso"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fechaIngreso}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFechaIngreso(e.target.value)
              }
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="fecha"
              className="block text-gray-700 uppercase font-bold" 
            >
              Fecha de alta
            </label>
            <input
              id="fecha"
              type="date"
              placeholder="fecha de alta"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fechaAlta}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFechaAlta(e.target.value)
              }
            />
          </div>
          <div className="mb-5">
          <label
            htmlFor="sintomas"
            className={error ? "block text-red-700 uppercase font-bold" : "block text-gray-700 uppercase font-bold"}
          >
            Síntomas 
          </label>
          <input
            id="sintomas"
            type="text"
            placeholder="síntomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSintomas(e.target.value)
            }
          />
        </div>
       

        
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold" 
          >
           Tratamiento 
          </label>
          <input
            id="tratamiento"
            type="text"
            placeholder="tratamiento"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={tratamiento}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTratamiento(e.target.value)
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
  

