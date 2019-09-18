import React, { Component } from 'react'

export default class ShowList extends Component {
    render() {
        const {index, title, handleEdit} = this.props
        return (
            <tr>
                <td style={{padding:'20px'}}>{index}</td>
                <td style={{padding:'20px'}}>{title}</td>
                <td style={{padding:'20px'}}><button onClick={()=>handleEdit(index-1)}>Edit</button></td>
            </tr>
        )
    }
}
