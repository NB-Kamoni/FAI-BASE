import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import NotebookCards from './NotebookCards';
import './Notebooks.css';

const Notebooks = ({ addNotebook }) => {
    const addNewNotebook = () => {
        const newTitle = prompt("Enter the title for the new notebook:");
        if (newTitle) {
            addNotebook(newTitle);
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                <NotebookCards
                    image="https://i.pinimg.com/originals/bb/aa/79/bbaa795f950434c8537f6829813962c8.jpg"
                    title="Cows"
                    navigateTo="/cows"
                />
                <NotebookCards
                    image="https://2.bp.blogspot.com/-2F9NWCW0bWI/UFF2rMtT73I/AAAAAAAAQLc/yLlmH82olxk/s1600/Chicken3.jpg"
                    title="Chickens"
                    navigateTo="/chickens"
                />

                {/* Add new notebook */}
                <div className="notebook-card add-card" onClick={addNewNotebook}>
                    <div className="plus-sign">+</div>
                    <div className="add-text">Add New</div>
                </div>
            </div>
        </div>
    );
};

export default Notebooks;