//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Layout from "./layout";

const MyPage = () => {
	const [color, setColor] = useState(null);

	return (
		<div className="container centered w-25 h-10 mx-auto pt-5 rounded border border-dark">
			<div className="btn-group-vertical">
				<div className={color === "red" ? "red active" : "red inactive"} onClick={() => setColor("red")}>
					red
				</div>
				<div
					className={color === "yellow" ? "yellow active" : "yellow inactive"}
					onClick={() => setColor("yellow")}>
					yellow
				</div>
				<div
					className={color === "green" ? "green active" : "green inactive"}
					onClick={() => setColor("green")}>
					green
				</div>

				<div>Light Status {color}</div>
			</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<MyPage />, document.querySelector("#app"));
