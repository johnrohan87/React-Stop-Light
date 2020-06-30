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
			<div className="btn-group-vertical w-100 h-100 text-center row">
				<div className="col">
					<div
						className={color === "red" ? "red active rounded-circle" : "red inactive rounded-circle"}
						onClick={() => setColor("red")}>
						red
					</div>
				</div>
				<div className="col">
					<div
						className={
							color === "yellow" ? "yellow active rounded-circle" : "yellow inactive rounded-circle"
						}
						onClick={() => setColor("yellow")}>
						yellow
					</div>
				</div>
				<div className="col">
					<div
						className={color === "green" ? "green active rounded-circle" : "green inactive rounded-circle"}
						onClick={() => setColor("green")}>
						green
					</div>
				</div>

				<div>Light Status {color}</div>
			</div>
		</div>
	);
};

//render your react application
ReactDOM.render(<MyPage />, document.querySelector("#app"));
