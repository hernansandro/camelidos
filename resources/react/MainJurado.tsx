import { useState, useEffect } from 'react';
import {getJurados} from "./jurado-utils";
import "react-responsive-modal/styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalEdit from "./components/ModalEditJurado";
import ModalDelete from "./components/ModalDeleteJurado";
import JuradoList from "./components/JuradoList";
//import SelectProject from "./components/SelectProject";
import AddJuradoForm from "./components/AddJuradoForm";
//import React, { useState, useEffect } from 'react';

function MainJurado () {
    var counter =  0;
    const [projectId, setProjectId] = useState('');
   // const projectsData = document.getElementById('app').getAttribute('data-projects');
  //  const projects = JSON.parse(projectsData);
    const [jurados, setJurados] = useState([]);
    const [isModalEditOpen, setIsModalEditOpen] = useState(false);
    const [modalEditJurado, setModalEditJurado] = useState({id: '', nombre: '', departamento: ''});
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [modalDeleteJuradoId, setModalDeleteJuradoId] = useState('');
    const [newJurado, setNewJurado] = useState({npmbre: '', departamento: ''});

    useEffect(() => {
        getJurados().then((tasksData) => setJurados(tasksData));
    }, []);

    // if(counter==0){
    //     getJurados().then((tasksData) => setJurados(tasksData));
    //     counter = counter +1;
    // }
    const reloadJurados = () => {
        getJurados().then((tasksData) => setJurados(tasksData));
    };

    return (
        
        <div class="row">
            
            <ToastContainer autoClose={2000} />
            <ModalEdit isModalEditOpen={isModalEditOpen}
                       setIsModalEditOpen={setIsModalEditOpen}
                       modalEditJurado={modalEditJurado}
                       setModalEditJurado={setModalEditJurado}
                       reloadJurados={reloadJurados}
            />
            <ModalDelete isModalDeleteOpen={isModalDeleteOpen}
                         setIsModalDeleteOpen={setIsModalDeleteOpen}
                         modalDeleteJuradoId={modalDeleteJuradoId}
                         reloadJurados={reloadJurados}
            />
            <div className="left-side col" >
               
                {jurados.length > 0 ? (
                    <JuradoList jurados={jurados}
                              setIsModalEditOpen={setIsModalEditOpen}
                              setModalEditJurado={setModalEditJurado}
                              setIsModalDeleteOpen={setIsModalDeleteOpen}
                              setModalDeleteJuradoId={setModalDeleteJuradoId}
                              
                              
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
                                   setJurados={setJurados}
                    />
                    {projectId === '' ? (
                        <div className="no-project-selected">
                            <p>Please select a project.</p>
                        </div>
                    ) : (
                        <AddJuradoForm newJurado={newJurado}
                                     setNewJurado={setNewJurado}
                                     projectId={projectId}
                                     reloadJurados={reloadJurados}
                        />
                    )}
                </div>
            </div> */}
            <div className="right-side col">
                <div className="right-side-wrapper">
                        <AddJuradoForm newJurado={newJurado}
                                     setNewJurado={setNewJurado}
                                     projectId={projectId}
                                     reloadJurados={reloadJurados}
                        />
                  
                </div>
            </div>
        </div>
    );
}

export default MainJurado;