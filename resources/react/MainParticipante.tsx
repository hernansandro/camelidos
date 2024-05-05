import { useState, useEffect } from 'react';
import {getParticipantes} from "./participante-utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEditParticipante";
import ModalDelete from "./components/ModalDeleteParticipante";
import ParticipanteList from "./components/ParticipanteList";
//import SelectProject from "./components/SelectProject";
import AddParticipanteForm from "./components/AddParticipanteForm";
//import React, { useState, useEffect } from 'react';

function MainParticipante () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [participantes, setParticipantes] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditParticipante, setModalEditParticipante] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeleteParticipanteId, setModalDeleteParticipanteId] = useState('');
    const [newParticipante, setNewParticipante] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getParticipantes().then((tasksData) => setParticipantes(tasksData));
    }, []);

    // if(counter==0){
    //     getParticipantes().then((tasksData) => setParticipantes(tasksData));
    //     counter = counter +1;
    // }
    const reloadParticipantes = () => {
        getParticipantes().then((tasksData) => setParticipantes(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditParticipante={modalEditParticipante}
                       setModalEditParticipante={setModalEditParticipante}
                       reloadParticipantes={reloadParticipantes}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeleteParticipanteId={modalDeleteParticipanteId}
                         reloadParticipantes={reloadParticipantes}
            />
            <div className="left-side col" >
               
                {participantes.length > 0 ? (
                    <ParticipanteList participantes={participantes}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditParticipante={setModalEditParticipante}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeleteParticipanteId={setModalDeleteParticipanteId}
                              
                              
                    />
                ) : (
                    <div className="no-tasks">
                        {/* {projectId === '' ? (
                            <p>Choose a project to see its tasks.</p>
                        ) : (
                            <p>This project has no tasks.</p>
                        )} */}
                    </div>
                )}
            </div>
            {/* <div className="right-side">
                <div className="right-side-wrapper">
                    <SelectProject projectId={projectId}
                                   projects={projects}
                                   setProjectId={setProjectId}
                                   setParticipantes={setParticipantes}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddParticipanteForm newParticipante={newParticipante}
                                     setNewParticipante={setNewParticipante}
                                     projectId={projectId}
                                     reloadParticipantes={reloadParticipantes}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddParticipanteForm newParticipante={newParticipante}
                                     setNewParticipante={setNewParticipante}
                                     projectId={projectId}
                                     reloadParticipantes={reloadParticipantes}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default MainParticipante;