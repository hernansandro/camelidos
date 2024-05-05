import { useState, useEffect } from 'react';
import {getPremios} from "./premio-utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEditPremio";
import ModalDelete from "./components/ModalDeletePremio";
import PremioList from "./components/PremioList";
//import SelectProject from "./components/SelectProject";
import AddPremioForm from "./components/AddPremioForm";
//import React, { useState, useEffect } from 'react';

function MainPremio () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [premios, setPremios] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditPremio, setModalEditPremio] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeletePremioId, setModalDeletePremioId] = useState('');
    const [newPremio, setNewPremio] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getPremios().then((tasksData) => setPremios(tasksData));
    }, []);

    // if(counter==0){
    //     getPremios().then((tasksData) => setPremios(tasksData));
    //     counter = counter +1;
    // }
    const reloadPremios = () => {
        getPremios().then((tasksData) => setPremios(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditPremio={modalEditPremio}
                       setModalEditPremio={setModalEditPremio}
                       reloadPremios={reloadPremios}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeletePremioId={modalDeletePremioId}
                         reloadPremios={reloadPremios}
            />
            <div className="left-side col" >
               
                {premios.length > 0 ? (
                    <PremioList premios={premios}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditPremio={setModalEditPremio}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeletePremioId={setModalDeletePremioId}
                              
                              
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
                                   setPremios={setPremios}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddPremioForm newPremio={newPremio}
                                     setNewPremio={setNewPremio}
                                     projectId={projectId}
                                     reloadPremios={reloadPremios}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddPremioForm newPremio={newPremio}
                                     setNewPremio={setNewPremio}
                                     projectId={projectId}
                                     reloadPremios={reloadPremios}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default MainPremio;