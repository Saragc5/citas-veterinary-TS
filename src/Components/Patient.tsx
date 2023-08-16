import { EliminarPacienteProps, SetPacienteProps } from "../types"

export const Patient: React.FC<EliminarPacienteProps & SetPacienteProps> = ({
  id,
  eliminarPaciente,
  paciente,
  setPaciente,
}) => {
  console.log("La id actual es:", id);
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
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{paciente.nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {''}
            <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setPaciente(paciente)
          }
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
};