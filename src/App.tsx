import { Header } from './Components/Header'
import { ListPatients } from './Components/ListPatients';
import { Form } from './Components/Form';
import { useState, useEffect } from 'react'
import {  Paciente } from './types'

const App: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [paciente, setPaciente] = useState<Paciente>({
    id: "",
    nombre: "",
    propietario: "",
    email:"",
    fechaIngreso:"",
    fechaAlta:"",
    sintomas:"",
    tratamiento:""
  });

  useEffect(() => {
    const obtenerLista = () => {
      const pacientesFromLista = localStorage.getItem("pacientes");
      const pacientesLista: Paciente[] = pacientesFromLista
        ? JSON.parse(pacientesFromLista)
        : [];
      setPacientes(pacientesLista);
    };
    obtenerLista();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id: Paciente["id"]) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  };


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
        <ListPatients
          id={paciente.id}
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
};

export default App;
