import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageBottom from './components/customHooks/UsePageBottom';
import Dimensions from './components/customHooks/Dimensions';
import ApiFetch from './components/customHooks/UseFetch';
import HideShow from './components/Hooks/Hide-Show';
import StopWatch from './components/Hooks/StopWatch';
import Todo from './components/Hooks/Todo';
import CustomBar from './components/Hooks/ProgressBar';
import CountdownTimer from './components/Hooks/MaxCount';
import UserForm from './components/Hooks/FormData';
import image from './assets/cat.gif'
import CountInputChanges from './components/debugging/Infinite';
import Theme from './components/debugging/Theme';
import Factorial from './components/debugging/Factorial';
const LazyLoading = React.lazy(() => import('./components/LazyLoading'));

function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<img src={image} alt='image'></img>}>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/lazy' element={<LazyLoading />}/>
      <Route path='/customhook' element={<PageBottom/>}/>
      <Route path='/dimonsion' element={<Dimensions/>}/>
      <Route path='/usefetch' element={<ApiFetch/>}/>
      <Route path='/hideandshow' element={<HideShow/>}/>
      <Route path='/stopwatch' element={<StopWatch/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/progressbar' element={<CustomBar/>}/>
      <Route path='/formdata' element={<UserForm/>}/>
      <Route path='/maxcount' element={<CountdownTimer/>}/>
      <Route path='/infinite' element={<CountInputChanges/>}/>
      <Route path='/theme' element={<Theme/>}/>
      <Route path='/factorial' element={<Factorial/>}/>
      <Route path="*" element={<Home />} />

      </Routes>
      </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
