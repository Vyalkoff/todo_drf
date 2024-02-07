import React from 'react'
import {Link, Outlet, useParams} from 'react-router-dom'

const ProjectCl = ({project, users}) =>{
        console.log(project)
    return (
        <div>
            <h3> проект {project.name}  </h3>
            <p>URL : {project.url_address}</p>
            <p> AUTOR : {project.user.map((userId) => {return users.find((user) => user.id = userId).first_name})}</p>
        </div>

    )
}



const SProjectList = ({projects,users}) => {
    let {id} = useParams();
    let filter_items = projects.filter(project => project.id ===  parseInt(id))


    return (
        <div>

           {filter_items.map((project) => < ProjectCl project = {project} users = {users}/>)}




        </div>


    )
}

export default SProjectList