import {AiFillCaretDown, AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import {useState} from "react";
import {ImArrowDown2, ImArrowUp2} from "react-icons/im";
import '../css/Dropdown.css'

function DropdownItem({option, setIsActive, setSelected, isSorting}) {
  return (
    <div
      className="dropdown__item"
      onClick={() => {
        setIsActive(false);
        setSelected(option);
      }}>
      {option.label}

      {isSorting && (option.reversed ? (
        <AiOutlineArrowUp className="arrow dropdown__arrow"/>
      ) : (
        <AiOutlineArrowDown className="arrow dropdown__arrow"/>
      ))}
    </div>)
}

export function Dropdown({options, selected, setSelected, isSorting = false}) {
  /*
    isSorting - добавляет элементам dropdown стрелочки, у options должен быть ключ reversed,
    который указывает в какую сторону смотрит стрелочка.
  */

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown" tabIndex="0" onBlur={() => setIsActive(false)}>
      <div className="dropdown__btn" onClick={() => setIsActive(!isActive)}>
        <div className="dropdown__btn-text">
          {selected.label}
          {isSorting && (selected.reversed ? (
            <ImArrowUp2 className="arrow dropdown__arrow"/>
          ) : (
            <ImArrowDown2 className="arrow dropdown__arrow"/>
          ))}
        </div>
        <AiFillCaretDown/>
      </div>

      <div className={`dropdown__content ${isActive ? "dropdown__content_active" : ""}`}>
        {options.map(option =>
          <DropdownItem
            key={option.id}
            option={option}
            setIsActive={setIsActive}
            setSelected={setSelected}
            selected={selected}
            isSorting={isSorting}/>)}
      </div>
    </div>
  )
}
