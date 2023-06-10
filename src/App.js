import { Routes, Route } from 'react-router-dom';
import Category from './components/Categories/Category';
import HomePage from './components/Home/Home';
import NotFound from './components/notFound/NotFound';
import Nav from './components/Navigation/Navigation';

function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="books" element={<HomePage />} />
          <Route path="categories" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
