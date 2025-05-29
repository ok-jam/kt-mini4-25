import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>📚 도서 목록</h1>
      {books.map((book, i) => <div key={i}>{book}</div>)}
    </div>
  );
}

export default App;