import React from 'react'
import "./Card.css"
import { IoFolderOpenOutline } from "react-icons/io5";
import DropdownButton from "../shared/dropdownButton/DropdownButton"

interface CardProps {
  title: string;
  children: React.ReactNode;
  btntext?: string;
}

const Card: React.FC<CardProps> = ({children, btntext, title}) => {
  return (
    <div className="card shadow">
        <div className="sub-card">
          <div className="top">
            {title && <h1 className='top-text'>
              {title}
            </h1>}
            {!btntext?
              <DropdownButton />
              :
              <button className="btn">
                <IoFolderOpenOutline size={20}/>
                {btntext}
              </button>
            }
          </div>
          <div>
            {children}
          </div>
        </div>
    </div>
  )
}

export default Card;
