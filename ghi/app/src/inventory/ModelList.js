import React from 'react';
import { NavLink } from 'react-router-dom'

function ModelList(props) {
    return (
        <>
            <h2>Vehicle Models</h2>
            <button className="btn btn-outline-dark">
                <NavLink className="nav-link" to="/models/new">Create</NavLink>
            </button>
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Manufacturer</th>
                            <th>Name</th>
                            <th className="d-flex justify-content-md-center">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.models && props.models.map(model => {
                            return (
                                <tr key={model.id}>
                                    <td>{model.manufacturer.name}</td>
                                    <td>{model.name}</td>
                                    <td className="d-flex justify-content-md-center"><img height="75" width="250" className="img-fluid img-thumbnail" src={model.picture_url}></img> </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ModelList