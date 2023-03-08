import {useState} from "react";
import sanitizeHtml from "sanitize-html"
import ContentEditable from 'react-contenteditable';
import {MdDeleteOutline} from "react-icons/md";
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

  const handleEditableChange = (e) => {
    const sanitizeConf = {
      allowedTags: ["b", "i", "a", "p"],
      allowedAttributes: {a: ["href"]}
    }
    setNewText(sanitizeHtml(e.currentTarget.innerHTML, sanitizeConf))
  }

  const handleWishEdit = () => {
    console.log("handleWishEdit call")
    editWish(data, newText, priority)
  }

  console.log(newText)

  return (
    <li className="wishlist-item wishlist__item">
      <div className="wishlist-item__text">
        {/*<div className="wishlist-item__text-edit"*/}
        {/*     contentEditable*/}
        {/*     onChange={e => setNewText(e.target.value)}*/}
        {/*     onBlur={() => editWish(data, newText, priority)}*/}
        {/*     onKeyDown={handleKeyDown}>{newText}</div>*/}
        <ContentEditable
          className="wishlist-item__text-edit"
          onChange={handleEditableChange}
          onBlur={handleWishEdit}
          onKeyDown={handleKeyDown}
          html={newText}/>
      </div>
      <Dropdown
        options={PRIORITY_OPTIONS}
        selected={priority}
        setSelected={handlePriorityChange}
        className="wishlist-item__dropdown dropdown_outlined"/>
      <button
        className="btn btn_delete wishlist-item__button"
        onClick={() => {
          removeWish(data.id)
        }}><MdDeleteOutline className="btn__icon"/>
      </button>
    </li>
  )
}