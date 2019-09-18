import React, { Component } from 'react'
import ShowList from './ShowList';

export default class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            singleEntry: '',
            list: []
        }
    }
    handleEdit = (e) => {
        console.log(e)
       console.log(this.state.list[e]);
       this.setState({
           singleEntry: this.state.list[e]
       })
    }
    handleChange = (e) => {
        this.setState({
            singleEntry: e.target.value
        })
    }
    handleSubmit = () => {
        this.setState({
            list: [...this.state.list, this.state.singleEntry],
            singleEntry: ''
        })
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <label>Add Task</label>  <br />
                <input type='text' value={this.state.singleEntry} onChange={this.handleChange} /> <br />
                <button onClick={this.handleSubmit}>Add</button>
                <h3>List of tasks so far</h3>
                <table style={{paddingLeft:'500px', textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th style={{padding:'20px'}}>index</th>
                            <th style={{padding:'20px'}}>title</th>
                            <th style={{padding:'20px'}}>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((t, i) => {
                            return <ShowList index={i + 1} title={t} handleEdit= {this.handleEdit} />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
