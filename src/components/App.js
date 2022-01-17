import React from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

import hogs from "../porkers_data";

function App() {
	
	return (
		<div className="App">
			<Nav />
			<br></br>
			<br></br>
			<HogsContainer className="hogs-container" hogs={hogs} />
		</div>
	);
}

export default App;
