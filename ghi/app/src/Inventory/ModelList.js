import React from 'react';


function ModelList(props) {
    return (
        <>
            <h1>Vehicle Models</h1>
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
                                    <td className="d-flex justify-content-md-center"><img height="75" width="250" className="img-fluid img-thumbnail" alt="model img" src={model.picture_url}></img> </td>
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