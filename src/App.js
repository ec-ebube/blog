import './App.css';
import Header from './Header'
import Body from './Body'





import Footer from './footer'
// import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
        {/* <Route path="/About" element={<About />} />

      </Routes> */} 
      <Footer />
    </div>
  );
}

export default App;
