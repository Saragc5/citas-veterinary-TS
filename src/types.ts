import { ReactNode } from 'react';

export interface Paciente {
  id: number;
  nombre: string;
  propietario: string
}


export interface EliminarPacienteProps {
    eliminarPaciente: (id: number) => void;
}

export interface ChildrenProps {
    children: ReactNode;
}

export interface SetPacienteProps{
    paciente : Paciente,
    setPaciente: React.Dispatch<React.SetStateAction<Paciente>>; 
}

export interface SetListaPacientesProps {
  pacientes: Paciente[];
  setPacientes: React.Dispatch<React.SetStateAction<Paciente[]>>;
  eliminarPaciente: (id: number) => void;
}
