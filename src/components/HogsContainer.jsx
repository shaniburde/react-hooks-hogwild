import { useState } from 'react';
import Hog from "./Hog";

function HogsContainer({ hogs, handleHogClick }) {
    const [isClicked, setIsClicked] = useState(false)

    function handleHogClick() {
        isClicked = !isClicked;
		setIsClicked(isClicked)
	}

 return(
     <div className="hogs-container">
         { hogs.map(hog => <Hog key={hog.name} hogData={hog} onHogClick={handleHogClick}/>) }
     </div>

 )
}

export default HogsContainer;