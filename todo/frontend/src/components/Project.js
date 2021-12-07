import React from "react";


const ProjectsItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.url_address}</td>
            <td>{project.user}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return(
        <table>
            <thead>
                <tr>
                    <th> Name</th>
                    <th>Url</th>
                    <th> Authors </th>
                </tr>
            </thead>
            <tbody>
                {projects.map((project) => < ProjectsItem project={project} />)}
            </tbody>
        </table>
    )
}
export default ProjectList