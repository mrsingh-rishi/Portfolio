import React from 'react'
import "./projectList.css"
import Project from "../Projects/Project.jsx"
import {data} from "../../data"
export default function ProjectList() {
  return (
    <div className='pl'>
        <div className="pl-text">
            <h1 className='pl-title'>Projects</h1>
            <p className='pl-desc'>
                These are My  Web project you can check them out. 
            </p>

            <div className="pl-list">
                {data.map((item)=>(
                    <Project key={item.key} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    </div>
  )
}
