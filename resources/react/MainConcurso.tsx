import { useState, useEffect } from 'react';
import {getConcursos} from "./concurso-utils";
import {getFerias} from "./utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEditConcurso";
import ModalDelete from "./components/ModalDeleteConcurso";
import ConcursoList from "./components/ConcursoList";
//import SelectProject from "./components/SelectProject";
import AddConcursoForm from "./components/AddConcursoForm";
//import React, { useState, useEffect } from 'react';

function MainConcurso () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [concursos, setConcursos] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditConcurso, setModalEditConcurso] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeleteConcursoId, setModalDeleteConcursoId] = useState('');
    const [newConcurso, setNewConcurso] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getConcursos().then((tasksData) => setConcursos(tasksData));
    }, []);

    // if(counter==0){
    //     getConcursos().then((tasksData) => setConcursos(tasksData));
    //     counter = counter +1;
    // }
    const reloadConcursos = () => {
        getConcursos().then((tasksData) => setConcursos(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditConcurso={modalEditConcurso}
                       setModalEditConcurso={setModalEditConcurso}
                       reloadConcursos={reloadConcursos}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeleteConcursoId={modalDeleteConcursoId}
                         reloadConcursos={reloadConcursos}
            />
            <div className="left-side col" >
               
                {concursos.length > 0 ? (
                    <ConcursoList concursos={concursos}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditConcurso={setModalEditConcurso}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeleteConcursoId={setModalDeleteConcursoId}
                              
                              
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
                                   setConcursos={setConcursos}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddConcursoForm newConcurso={newConcurso}
                                     setNewConcurso={setNewConcurso}
                                     projectId={projectId}
                                     reloadConcursos={reloadConcursos}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddConcursoForm newConcurso={newConcurso}
                                     setNewConcurso={setNewConcurso}
                                     projectId={projectId}
                                     reloadConcursos={reloadConcursos}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default MainConcurso;