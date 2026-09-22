import BookItem from "./BookItem"

// притянуть сюда массив
const BookList = ({books, setBooks}) => {
    return (
    <div className="book-list" id="bookList">
      
      {Filterd ? books.filter(el => !el.done).map((books) => 
      (<BookItem {...books} setBooks={setBooks}/>))
    : books.map((books) => 
    (<BookItem {...books} setBooks={setBooks}/>))} 
      {/* {books.map((books, i) => <BookItem {...books} key={i} setBooks={setBooks}/>)} */}

        {/* <div className="book-row" data-id={1}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
            К
          </div>
          <div className="book-info">
            <p className="book-title done">Клара и Солнце</p>
            <div className="book-author">Кадзуо Исигуро</div>
          </div>
          <div className="read-check checked" data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label">Прочитано</span>
          </div>
          <button
            className="delete-btn"
            data-role="delete"
            title="Убрать с полки"
          >
            ✕
          </button>
        </div> */}
    </div>

)
}
export default BookList 