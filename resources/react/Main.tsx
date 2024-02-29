import { useState, useEffect } from 'react';
import {getFerias} from "./utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEdit";
import ModalDelete from "./components/ModalDelete";
import FeriaList from "./components/FeriaList";
//import SelectProject from "./components/SelectProject";
import AddFeriaForm from "./components/AddFeriaForm";
//import React, { useState, useEffect } from 'react';

function Main () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [ferias, setFerias] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditFeria, setModalEditFeria] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeleteFeriaId, setModalDeleteFeriaId] = useState('');
    const [newFeria, setNewFeria] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getFerias().then((tasksData) => setFerias(tasksData));
    }, []);

    // if(counter==0){
    //     getFerias().then((tasksData) => setFerias(tasksData));
    //     counter = counter +1;
    // }
    const reloadFerias = () => {
        getFerias().then((tasksData) => setFerias(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditFeria={modalEditFeria}
                       setModalEditFeria={setModalEditFeria}
                       reloadFerias={reloadFerias}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeleteFeriaId={modalDeleteFeriaId}
                         reloadFerias={reloadFerias}
            />
            <div className="left-side col" >
               
                {ferias.length > 0 ? (
                    <FeriaList ferias={ferias}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditFeria={setModalEditFeria}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeleteFeriaId={setModalDeleteFeriaId}
                              
                              
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
                                   setFerias={setFerias}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddFeriaForm newFeria={newFeria}
                                     setNewFeria={setNewFeria}
                                     projectId={projectId}
                                     reloadFerias={reloadFerias}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddFeriaForm newFeria={newFeria}
                                     setNewFeria={setNewFeria}
                                     projectId={projectId}
                                     reloadFerias={reloadFerias}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default Main;