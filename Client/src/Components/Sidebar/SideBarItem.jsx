import { useState } from "react"

import { GoChevronDown } from "react-icons/go";

import Menu from "../Menu/Menu";

export default function SideBarItem({key, item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span>
                        { item.icon && <i className={item.icon}></i> }
                        {item.title}    
                    </span> 
                    <GoChevronDown onClick={() => setOpen(!open)} />
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SideBarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return (
            <Menu
                Icon={item.icon}
                Title={item.title}
                key={key}
                Address={item.address}
            />
        )
    }
}