import {useState} from "react";
import {Dropdown} from "./Dropdown";
import {PRIORITY_OPTIONS} from "../utils/constants";

export function Wish({data, editWish, removeWish}) {
  const [newText, setNewText] = useState(data.text)
  const [priority, setPriority] = useState(data.priority)
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Нажатие Enter
      e.target.blur()
    }
  }
  const handlePriorityChange = (newPriority) => {
    setPriority(newPriority)
    editWish(data, newText, newPriority)
  }

  return (
    <li className="wishlist-item wishlist__item">
      <div className="wishlist-item__text">
        <input className="wishlist-item__text-edit"
               value={newText}
               onChange={e => setNewText(e.target.value)}
               onBlur={() => editWish(data, newText)}
               onKeyDown={handleKeyDown}></input>
        {data.priority.label}
      </div>
      <Dropdown
        options={PRIORITY_OPTIONS}
        selected={priority}
        setSelected={handlePriorityChange}/>
      <button
        className="btn btn_delete wishlist-item__button"
        onClick={() => {
          removeWish(data.id)
        }}>x
      </button>
    </li>
  )
}