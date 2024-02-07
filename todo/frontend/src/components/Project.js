import React from "react";
import {Link, Outlet} from "react-router-dom";


const ProjectsItem = ({project}) => {

    return (
        <tr>
            <td><Link to={`/project/${project.id}`}>{project.name}</Link></td>

        </tr>

    )
}

const ProjectList = ({projects}) => {

    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>Projects</th>
            </tr>
            </thead>
            <tbody>
            {projects.map((project) => < ProjectsItem project={project}/>)}
            </tbody>

        </table>
        <Outlet/>
        </div>



    )
}
export default ProjectList