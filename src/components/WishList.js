import {Wish} from "./Wish";
import "../css/Wishlist.css"

export function WishList({wishes, setWishes}) {

  const removeWish = (id) => {
    // setWishes(wishes.filter(e => e.id !== id))
    setWishes((prev) => prev.filter(e => e.id !== id)) // best practice
  }

  const editWish = (wish, newText, newPriority) => {
    console.log("editWish call")
    console.log(newText, JSON.stringify(wish))
    if (!newText.trim()) return
    if (wish.text.trim() === newText.trim() &&
      wish.priority.id === newPriority.id) return

    const wishEdited = {
      id: wish.id,
      text: newText,
      time: wish.time,
      priority: newPriority,
    }

    const wishesNew = wishes.slice()
    const wishIndex = wishesNew.findIndex(item => item.id === wish.id)
    wishesNew[wishIndex] = wishEdited

    setWishes([...wishesNew])
    console.log("Wishes has been setted!!")
  }

  return (
    <div className="wishlist">
      <ul className="wishlist__list">
        {wishes.map((el) => {
          return <Wish data={el}
                       editWish={editWish}
                       removeWish={removeWish}
                       key={el.id}/> // Нужно указывать ключ элементу списка
        })}
      </ul>
    </div>
  )
}
