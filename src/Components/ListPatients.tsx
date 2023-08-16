import { Patient } from './Patient'
import { ListPatientsProps } from '../types'

export const ListPatients: React.FC<ListPatientsProps > = ({
  id,
  pacientes,
  setPaciente,
  eliminarPaciente,
  
}) => {

  console.log(pacientes)
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span
              data-testid="specific-span"
              className="text-indigo-600 font-bold "
            >
              pacientes
            </span>
          </p>
          {pacientes.map((paciente) => (
            <div key={paciente.id}>

              <Patient
                id={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            </div>
          ))}
        
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold ">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};  