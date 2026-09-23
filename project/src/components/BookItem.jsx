const BookItem = ({title, id, done, setBooks}) => {
  const deleteButton = () => {setBooks(o => o.filter(e => e.id !==id))}
  const CheckBooks = () => {
    setBooks(oldBook => oldBook.map(
    el => el.id === id ? 
      {...el, done: !el.done}
      : el))
  }
    return (
      
      
    <div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">{title}</p>
            <div className="book-author">497</div>
          </div>
          <div onClick={CheckBooks} className={`read-check${done ? " checked" : ""} `} data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label">Прочитано</span>
          </div>
          <button onClick={deleteButton}
            className="delete-btn"
            data-role="delete"
            title="Убрать с полки"
          >
            ✕
          </button>
    </div>
)
}
export default BookItem 