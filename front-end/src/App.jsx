import './App.css'
import Home from './Components/Home'

function App() {
  return (
    <div>
    <Home></Home>
    
    <div className="h-100 bg-red-400 text-5xl absolute">
Scroll Up and Down this page to see the parallax scrolling effect.
This div is just here to enable scrolling.
Tip: Try to remove the background-attachment property to remove the scrolling effect.
</div>
    
    
    </div>
  )
}

export default App
