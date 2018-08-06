import React, { Component } from 'react'
import './App.css'
import Note from './components/Note'
import FileSaver from 'file-saver'

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    const state = localStorage.getItem('state')
    if (state) {
      this.setState({ notes: JSON.parse(state) })
    }
  }

  componentDidUpdate() {
    const state = JSON.stringify(this.state.notes)
    localStorage.setItem('state', state)
  }

  render() {
    return (
      <div className="container">
        <h1>Note Taking App</h1>
        <Note onAddNote={this.addNotetoState}/>
        <h4>Notes Count: <span className='badge'>{this.state.notes.length}</span></h4>

        <ul className='list-group'>
          {this.state.notes.map((note, i) =>
            <li key={i} className='list-group-item'>
              <h4 className='list-grup-item-heading'>{note.noteTitle} <small><span className='label label-info'>{note.notePriority}</span></small></h4>
              <p>{note.noteDesc}</p>
              <button
                onClick={() => this.deleteNote(i)}
                className='bnt btn-danger btn-sm'><span className='glyphicon glyphicon-trash'></span>Delete</button>
              {" "}
              <button
                onClick={() => this.exportNote(i)}
                className='btn btn-warning btn-sm'><span className='glyphicon glyphicon-file'></span>Export</button>

            </li>
          )}
        </ul>
      </div>
    )
  }

  addNotetoState = (note) => {
      this.setState({
        editMode: false,
        notes: [...this.state.notes, note]
      })
    }
  
  deleteNote = (i) => {
    this.setState({
      notes: this.state.notes.filter((note, index) => {
        return index !== i;
      })
    })
  }
  exportNote = (i) => {
    let note = this.state.notes.filter((note, index) => {
      return index === i
    })

    const blob = new Blob([JSON.stringify(note)], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, "note.txt")
  }
  
 
}

export default App;