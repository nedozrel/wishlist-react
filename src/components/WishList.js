import {Wish} from "./Wish";
import {AddWish} from "./AddWish";


export function WishList({wishes, setWishes}) {

  const removeWish = (id) => {
    setWishes(wishes.filter(e => e.id !== id))
  }

  const editWish = (wish, newText) => {
    if (!newText.trim()) return
    if (wish.text.trim() === newText.trim()) return

    const wishEdited = {
      id: wish.id,
      text: newText,
      time: wish.time,
      priority: wish.priority,
    }

    const wishesNew = wishes.slice()
    const wishIndex = wishesNew.findIndex(item => item.id === wish.id)
    wishesNew[wishIndex] = wishEdited

    setWishes([...wishesNew])
  }

  return (
    <div className="wishlist">
      <AddWish wishes={wishes} setWishes={setWishes}/>
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
