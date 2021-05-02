import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';


function App() {
    const [projects, setProjects] = useState([]);
    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    useEffect(() => {
        const project = JSON.parse(localStorage.getItem('@Projects'))

        if (project) {
            setProjects(project)
        }

    }, [])

    function handleAddProject() {
        const project = [
            ...projects, {
                title: `Novo Projeto ${title}`,
                owner: `Proprietário: ${owner}`
            }
        ]
        setProjects(project)

        localStorage.setItem('@Projects', JSON.stringify(project))
    }

    function handleInput(target) {
        if (target.name === 'title') {
            return setTitle(target.value)
        }
        return setOwner(target.value)
    }

    return (
        <>
            <Header title="Projetos" />
            <ul>
                {projects.map(project => (
                    <li key={project.title}>
                        {project.title}
                        <br />
                        {project.owner}
                    </li>
                )
                )}
            </ul>

            <input
                type="text"
                placeholder="Nome do projeto"
                name="title"
                onChange={e => handleInput(e.target)}
            />

            <input
                type="text"
                placeholder="Nome do proprietário"
                name="owner"
                onChange={e => handleInput(e.target)}
            />

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    );
}

export default App;