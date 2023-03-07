import {useState} from "react";
import {Dropdown} from "./Dropdown";

export function AddWish({wishes, setWishes}) {
  const [newWishText, setNewWishText] = useState("")
  const priorityOptions = [
    {label: "Средний", value: 2},
    {label: "Высокий", value: 3},
    {label: "Низкий", value: 1},
  ]

  const [currentPriority, setCurrentPriority] = useState(priorityOptions[0])

  const addWish = () => {
    if (!newWishText.trim()) return

    const newWish = {
      id: wishes.length + 1,
      text: newWishText,
      time: Date.now(),
      priority: currentPriority,
    }
    setWishes([newWish, ...wishes])
    setCurrentPriority(priorityOptions[0])
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
      <Dropdown options={priorityOptions}
                selected={currentPriority}
                setSelected={setCurrentPriority}/>
    </div>
  )
}
