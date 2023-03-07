import {useState} from "react";

export function Wish(props) {
  const data = props.data
  const [newText, setNewText] = useState(data.text)

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) { // Нажатие Enter
      e.target.blur()
    }
  }

  return (
    <li className="wishlist-item wishlist__item">
      <div className="wishlist-item__text">
        <input className="wishlist-item__text-edit"
               value={newText}
               onChange={e => setNewText(e.target.value)}
               onBlur={e => props.editWish(data, newText)}
               onKeyDown={handleKeyDown}></input>
        Приоритет: {data.priority.label}
      </div>
      <button
        className="btn btn_delete wishlist-item__button"
        onClick={(e) => {
          props.removeWish(data.id)
        }}>x
      </button>
    </li>
  )
}