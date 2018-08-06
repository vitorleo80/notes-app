import React, { Component } from 'react'


export default class AddNote extends Component {
    state = {
        noteTitle: '',
        noteDesc: '',
        notePriority: 'Low'
    }

    

    render() {
        return (
            <div>
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
            </div>
        )
    }
    handleSubmit = (e) => {
        e.preventDefault()
            this.props.onAddNote(this.state)
            this.setState({
                noteTitle: '',
                noteDesc: '',
                notePriority: 'Low'
            })
    }

    onChange = ({ target: { value, name } }) => {
        this.setState({
            [name]: value,
        })
    }
}