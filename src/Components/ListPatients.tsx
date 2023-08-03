import { Patient } from './Patient'

export const ListPatients:React.FC = () => {
return (
 <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
  <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
  <p className="text-xl mt-5 mb-10 text-center">Administra tus {""} 
  <span data-testid="specific-span" className="text-indigo-600 font-bold ">pacientes</span></p>
   {/* <Patient
   id={id}
   nombre={nombre}
    /> */}
 
 </div>

)
}  