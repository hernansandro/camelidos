import { useState, useEffect } from 'react';
import {getCalificacions} from "./calificacion-utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEditCalificacion";
import ModalDelete from "./components/ModalDeleteCalificacion";
import CalificacionList from "./components/CalificacionList";
//import SelectProject from "./components/SelectProject";
import AddCalificacionForm from "./components/AddCalificacionForm";
//import React, { useState, useEffect } from 'react';

function MainCalificacion () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [calificacions, setCalificacions] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditCalificacion, setModalEditCalificacion] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeleteCalificacionId, setModalDeleteCalificacionId] = useState('');
    const [newCalificacion, setNewCalificacion] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getCalificacions().then((tasksData) => setCalificacions(tasksData));
    }, []);

    // if(counter==0){
    //     getCalificacions().then((tasksData) => setCalificacions(tasksData));
    //     counter = counter +1;
    // }
    const reloadCalificacions = () => {
        getCalificacions().then((tasksData) => setCalificacions(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditCalificacion={modalEditCalificacion}
                       setModalEditCalificacion={setModalEditCalificacion}
                       reloadCalificacions={reloadCalificacions}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeleteCalificacionId={modalDeleteCalificacionId}
                         reloadCalificacions={reloadCalificacions}
            />
            <div className="left-side col" >
               
                {calificacions.length > 0 ? (
                    <CalificacionList calificacions={calificacions}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditCalificacion={setModalEditCalificacion}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeleteCalificacionId={setModalDeleteCalificacionId}
                              
                              
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
                                   setCalificacions={setCalificacions}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddCalificacionForm newCalificacion={newCalificacion}
                                     setNewCalificacion={setNewCalificacion}
                                     projectId={projectId}
                                     reloadCalificacions={reloadCalificacions}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddCalificacionForm newCalificacion={newCalificacion}
                                     setNewCalificacion={setNewCalificacion}
                                     projectId={projectId}
                                     reloadCalificacions={reloadCalificacions}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default MainCalificacion;