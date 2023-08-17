import { ReactNode } from 'react';

export interface Paciente {
  id?: string,
  nombre: string,
  propietario: string,
  email: string,
  fechaIngreso: string,
  fechaAlta:string,
  sintomas: string,
  tratamiento: string
}
export interface EliminarPacienteProps {
  id: Paciente["id"]
  eliminarPaciente: (id:Paciente["id"]) => void;
}
export interface SetPacienteProps{
    paciente : Paciente,
    setPaciente: React.Dispatch<React.SetStateAction<Paciente>>; 
   
}

export interface SetListaPacientesProps {
  pacientes: Paciente[];
  setPacientes: React.Dispatch<React.SetStateAction<Paciente[]>>;
  eliminarPaciente: (id:Paciente["id"]) => void;
}
export interface ListPacientesProps {
  id: Paciente['id'];
  pacientes : Paciente[],
  setPaciente: React.Dispatch<React.SetStateAction<Paciente>>; 
  eliminarPaciente: (id:Paciente["id"]) => void;
}

export interface ChildrenProps {
  children: ReactNode;
}


