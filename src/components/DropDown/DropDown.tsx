import React, { useState } from 'react'
import styles from './DropDown.module.css';

interface DropDownProps{
    title: string
    list_items: string[]
}
export default function DropDown({title, list_items}: DropDownProps) {
    const [chosenTitle, setTitle] = useState(title);
    const [isOpen, setIsOpen] = useState(false);
    const handleChange=(item: string)=>{
        setTitle(item)
    }
    const handleDropdown =()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <div className={`relative`}>
            <section>
               <div onClick={handleDropdown} className={`flex items-center ${styles.drop_pill}`}>
                     <h1>{chosenTitle}</h1>
                     <div className={`ml-5 flex items-center ${isOpen === true? "rotate" : "noRotate"}`}><img src="/assets/down_arrow.svg" alt="dropdown" /></div>
               </div>
            </section>
            <section className={`${isOpen === true? "block" : "hidden"} ${styles.drop_list}`}>
                {list_items.map((item, index) => (
                    <div onClick={()=>handleChange(item)} className={`${styles.drop_item} ${chosenTitle === item? styles.active : ""}`} key={index}>{item}</div>
                ))}
            </section>
        </div>
        <div onClick={()=>setIsOpen(false)} className={`outsideClick`}></div>
    </div>
  )
}