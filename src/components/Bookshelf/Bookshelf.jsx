import { useState } from 'react';


function Bookshelf() {
    const [books, setBooks] = useState([])
    const [title, setnewTitle] = useState('')
    const [author, setAuthor] = useState('')

    function handleInputChange(event) {
        if (event.target.id === "title") { setnewTitle(event.target.value) }
        else {
            setAuthor(event.target.value)
        }
    }
    function handleSubmit(event) {
        event.preventDefault()

        const newBook = {
            title: title,
            author: author
        }
        // for push
        setBooks([...books, newBook])
        setnewTitle('')
        setAuthor("")


    }
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>

                <form onSubmit={handleSubmit}>

                    <label htmlFor="title">Title</label>
                    <input value={title} onChange={handleInputChange} id="title" type="text" />

                    <label htmlFor="lastName">Author:</label>
                    <input value={author} onChange={handleInputChange} id="author" type="text" />

                    <button>add Book</button>
                </form>
            </div>
            
            <div className="bookCardsDiv">
                {books.map((oneBook) =>
                <div >
                    <p>Name: {oneBook.title} {oneBook.author}</p>
                </div>
            )}
            </div>

        </div>
    )

}
export default Bookshelf