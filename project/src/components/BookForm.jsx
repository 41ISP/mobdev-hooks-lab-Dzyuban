import { nanoid } from "nanoid"
import { useState } from "react"

const BookForm = ({id, title, setBooks}) => {


  const [bookField, setBooksField] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookField.trim().length === 0 || bookField.trim().length > 40) return
    const newBooks = {
      id: nanoid(),
      title: bookField.trim(),
      done: false
    }
    setBooks((books) => [...books, newBooks])
    setBooksField("")
  }

  return (
    <div className="add-book-row" id="AddBook">
      <form onSubmit={handleSubmit} className="AddBooks">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
          value={bookField}
          onChange={(e) => setBooksField(e.target.value)}
        />
        <button className="btn" id="addBtn">
          Добавить на полку
        </button>
      </form>
    </div>
  )
}

export default BookForm 