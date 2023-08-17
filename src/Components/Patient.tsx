import { EliminarPacienteProps, SetPacienteProps } from "../types"
// import { useState } from 'react'

export const Patient: React.FC<EliminarPacienteProps & SetPacienteProps> = ({
  id,
  eliminarPaciente,
  paciente,
  setPaciente,
}) => {
  const handleEliminar =
    (id: string | undefined) => (e: React.MouseEvent<HTMLButtonElement>) => {
      if (id) {
        const respuesta: boolean = window.confirm(
          "Deseas eliminar este paciente?"
        );

        if (respuesta === true) {
          eliminarPaciente(id);
        }
      }
    };

    

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className={paciente.nombre ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-blue-700 uppercase"}>
        Nombre paciente: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>

      <p className={paciente.propietario ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-red-700 uppercase"}>
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      
        <p className={paciente.email ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-red-700 uppercase"}>Email contacto: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className={paciente.fechaIngreso ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-red-700 uppercase"}>Fecha ingreso: {''}
            <span className="font-normal normal-case">{paciente.fechaIngreso}</span>
        </p>

        <p className={paciente.fechaAlta ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-blue-700 uppercase underline"}>Fecha alta: {''}
            <span className="font-normal normal-case">{paciente.fechaAlta}</span>
        </p>

        <p className={paciente.sintomas ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-red-700 uppercase"}>Síntomas: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <p className={paciente.tratamiento ? "font-bold mb-3 text-gray-700 uppercase" : "font-bold mb-3 text-blue-700 uppercase underline"}>Tratamiento: {''}
            <span className="font-normal normal-case">{paciente.tratamiento}</span>
        </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => setPaciente(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={handleEliminar(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}