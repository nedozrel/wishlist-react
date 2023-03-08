import {useState} from "react";
import {Dropdown} from "./Dropdown";
import {PRIORITY_OPTIONS} from "../utils/constants"
import "../css/AddWish.css"

export function AddWish({wishes, setWishes}) {
  const [newWishText, setNewWishText] = useState("")

  const [currentPriority, setCurrentPriority] = useState(PRIORITY_OPTIONS[1])

  const addWish = () => {
    if (!newWishText.trim()) return

    const newWish = {
      id: wishes.length + 1,
      text: newWishText,
      time: Date.now(),
      priority: currentPriority,
    }
    setWishes([newWish, ...wishes])
    setCurrentPriority(PRIORITY_OPTIONS[1])
    setNewWishText("")
  }

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Нажатие Enter
      addWish()
    }
  }

  return (

    <div className="add-wish-form">
      <div className="add-wish-form__input-cnt">
        <input className="add-wish-form__input"
               type="text"
               placeholder="Добавить новое желание..."
               onKeyDown={handleKeyDown}
               value={newWishText}
               onChange={e => setNewWishText(e.target.value)}/>
      </div>
      <div className="add-wish-form__dropdown-cnt">
        <Dropdown className="dropdown_rounded"
                  options={PRIORITY_OPTIONS}
                  selected={currentPriority}
                  setSelected={setCurrentPriority}/>
      </div>
    </div>
  )
}
