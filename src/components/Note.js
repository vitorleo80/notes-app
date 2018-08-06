import React, { Component } from 'react'
import uuid from 'uuid/v4'


export default class Note extends Component {
    state = {
        noteTitle: '',
        noteDesc: '',
        notePriority: 'Low'
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }

    renderForm = () => {
        if (this.props.isEditMode) {
            return (
                <form className='form-horizontal' onSubmit={this.handleSubmit}>
                    <label htmlFor='inputNoteTitle' className='col-sm-2 control-label'>New Note</label>
                    <div className='col-sm-10'>
                        <input name='noteTitle'
                            type='text'
                            className='form-control'
                            id='inputNoteTitle'
                            defaultValue={this.props.note.noteTitle}
                            onChange={this.onChange}
                            placeholder='Title' />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputNoteDesc' className='col-sm-2 control-label'>Description</label>
                        <div className='col-sm-10'>
                            <textarea name='noteDesc'
                                className='form-control'
                                rows='3'
                                id='inputNoteDesc'
                                defaultValue={this.props.note.noteDesc}
                                onChange={this.onChange}>
                            </textarea>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='inputNotePriority' className='col-sm-2 control-label'>Priority</label>
                        <div className='col-sm-10'>
                            <select name='notePriority'
                                className='form-control'
                                id='notePriority'
                                defaultValue={this.props.note.notePriority}
                                onChange={this.onChange}>
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                            </select>
                        </div>
                    </div>

                    <div className='form-group'>
                        <div className='col-sm-offset-2 col-sm-10'>
                            <button type='submit' className='btn btn-primary'>Save Note</button>
                        </div>
                    </div>
                </form>
            )
        }
        return (
            <form className='form-horizontal'
                onSubmit={this.handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='inputNoteTitle' className='col-sm-2 control-label'>New Note</label>
                    <div className='col-sm-10'>
                        <input name='noteTitle'
                            type='text'
                            className='form-control'
                            id='inputNoteTitle'
                            value={this.state.noteTitle}
                            onChange={this.onChange}
                            placeholder='Title' />
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='inputNoteDesc' className='col-sm-2 control-label'>Description</label>
                    <div className='col-sm-10'>
                        <textarea name='noteDesc'
                            className='form-control'
                            rows='3'
                            id='inputNoteDesc'
                            value={this.state.noteDesc}
                            onChange={this.onChange}>
                        </textarea>
                    </div>
                </div>

                <div className='form-group'>
                    <label htmlFor='inputNotePriority' className='col-sm-2 control-label'>Priority</label>
                    <div className='col-sm-10'>
                        <select name='notePriority'
                            className='form-control'
                            id='notePriority'
                            value={this.state.notePriority}
                            onChange={this.onChange}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                </div>

                <div className='form-group'>
                    <div className='col-sm-offset-2 col-sm-10'>
                        <button type='submit' className='btn btn-success'>Add Note</button>
                    </div>
                </div>

            </form>
        )
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        if (!this.props.isEditMode) {
            const { noteDesc, notePriority, noteTitle } = this.state
            const note = {
                id: uuid(),
                noteDesc,
                notePriority,
                noteTitle
            }
            this.props.onAddNote(note)
            this.setState({
                noteTitle: '',
                noteDesc: '',
                notePriority: 'Low'
            })
        } else {
            const { note } = this.props
            const newNote = {
                id: note.id,
                noteDesc: this.state.noteDesc || note.noteDesc,
                notePriority: this.state.notePriority || note.notePriority,
                noteTitle: this.state.noteTitle || note.noteTitle
            }
            this.props.onAddNote(newNote)
            this.setState({
                noteTitle: '',
                noteDesc: '',
                notePriority: 'Low'
            })
        }
    }

    onChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value,
        })
    }
}