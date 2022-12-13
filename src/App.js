import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Course } from './pages/Course/Course';
import { CoursesPage } from './pages/Courses/Courses';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/course/:id' element={<Course />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
