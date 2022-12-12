import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

const CreateArea = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [isExpanded, setIsExpanded] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
  };

  const submitNote = (event) => {
    props.addNote(note);
    setNote({
        title: "",
        content: ""
    })
    event.preventDefault();
  }

  const expandTextArea = () => {
    setIsExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded &&
            (<input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
            />)
        }
        <textarea
        name="content"
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
        value={note.content}
        onClick={expandTextArea}
        onChange={handleChange}
        />
        <Zoom in={isExpanded}>
            <Fab
            onClick={submitNote}
            >
            <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
