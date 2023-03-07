import {AiFillCaretDown, AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {useState} from "react";
import {ImArrowDown2, ImArrowUp2} from "react-icons/im";
import '../css/Dropdown.css'

function Arrows({isSorting, isSortingReversed, isBold = false}) {
  if (!isSorting) return

  if (isSortingReversed) {
    if (isBold)
      return <ImArrowUp2 className="arrow dropdown__arrow"/>
    else
      return <AiOutlineArrowUp className="arrow dropdown__arrow"/>
  } else {
    if (isBold)
      return <ImArrowDown2 className="arrow dropdown__arrow"/>
    else
      return <AiOutlineArrowDown className="arrow dropdown__arrow"/>
  }
}

function DropdownItem({option, setIsActive, setSelected, sort}) {
  const isSorting = sort !== undefined
  let isSortingReversed
  if (isSorting) {
    isSortingReversed = option.value.includes("Reversed")
  } else {
    isSortingReversed = false
  }

  return (
    <div
      className="dropdown__item"
      onClick={e => {
        setIsActive(false);
        setSelected(option);
        isSorting && sort(option);
      }}>
      {option.label}
      <Arrows isSorting={isSorting} isSortingReversed={isSortingReversed}/>
    </div>)
}

export function Dropdown({options, sort, selected, setSelected}) {
  /*
  Работает как обычный дропдаун если не передать функцию сортировки .

  При передаче функции сортировки значения элементов дропдауна используются
  в переданной функции сортировки для сортировки App.wishes .
  */

  const [isActive, setIsActive] = useState(false)

  const isSorting = sort !== undefined
  let isSortingReversed
  if (isSorting) {
    isSortingReversed = selected.value.includes("Reversed")
  } else {
    isSortingReversed = false
  }

  return (
    <div className="dropdown" tabIndex="0" onBlur={e => setIsActive(false)}>
      <div className="dropdown__btn" onClick={e => setIsActive(!isActive)}>
        <div className="dropdown__btn-text">
          {selected.label}
          <Arrows isSorting={isSorting}
                  isSortingReversed={isSortingReversed}
                  isBold={true}/>
        </div>
        <AiFillCaretDown/>
      </div>

      <div className={`dropdown__content ${isActive ? "dropdown__content_active" : ""}`}>
        {options.map(option =>
          <DropdownItem
            key={option.value}
            option={option}
            setIsActive={setIsActive}
            setSelected={setSelected}
            selected={selected}
            sort={sort}/>)}
      </div>
    </div>
  )
}
