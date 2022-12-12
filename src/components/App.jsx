import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

const App = () => {
    const [notes, setNotes] = useState([])

    const addNote = newNote => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    const renderNotes = (note, index) =>{
        const {title, content} = note
        return(
            <Note key = {index} id = {index} title={title} content={content} deleteNote={deleteNote} />
        )
    }

    const deleteNote = id => {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map(renderNotes)}
            <Footer />
        </div>
    );
}

export default App;