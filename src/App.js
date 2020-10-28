import React, {useState} from 'react';
import Header from './components/Header';
import './App.css'
import bgImage from './assets/bg.jpg'


function App (){
    const [projects, setProjects] = useState(["Desenvolvimento de App", "Front-end WEB"]);

    function handleAddProject(){
        setProjects([...projects, `Novo projeto ${Date.now}`])
        console.log(projects)
    }

    return (
        <>
         <Header title="Projects"/>
         <img width={300} src={bgImage}/>
         <ul>
             {projects.map(project => <li key={project}>{project}</li>)}
         </ul>

         <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;