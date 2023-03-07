import {useState} from "react";
import {Dropdown} from "./Dropdown";
import {PRIORITY_OPTIONS} from "../utils/constants"

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

    <div className="wishlist__add-wish-cnt">
      <input type="text"
             placeholder="Новое желание"
             onKeyDown={handleKeyDown}
             value={newWishText}
             onChange={e => setNewWishText(e.target.value)}/>
      <Dropdown options={PRIORITY_OPTIONS}
                selected={currentPriority}
                setSelected={setCurrentPriority}/>
    </div>
  )
}
