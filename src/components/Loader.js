import React , {useState,useEffect} from 'react'
import './Loader.scss'

function Loader() {
    
    const [hide, sethide] = useState(false)
    const [disappear, setdisappear] = useState(false)
    setTimeout(() => {
        sethide(true);
    }, 2000);
    setTimeout(() => {
        setdisappear(true);
    }, 2500);

    
  return (
    <div className={`loading ${hide?'hide':''} ${disappear?'display-none':''}`}>
	<div className="loading-text">
		<span className="loading-text-words">S</span>
		<span className="loading-text-words">T</span>
		<span className="loading-text-words">U</span>
		<span className="loading-text-words">D</span>
		<span className="loading-text-words">I</span>
		<span className="loading-text-words">O</span>
		<span className="loading-text-words">B</span>
	</div>
</div>
  )
}

export default Loader