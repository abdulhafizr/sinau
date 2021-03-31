import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Activity, ClassDetail, Dashboard, ForYou, MyClass, Profile } from "./pages";
import { Row, Col } from "reactstrap";
import { Sidebar } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Row className="content">
				<Col className="sidebar">
					<Sidebar />
				</Col>

				<Col className="main">
					<Switch>
						{/* Dashboard */}
						<Route exact path="/">
							<Dashboard />
						</Route>
						<Route path="/my">
							<ForYou />
						</Route>

						{/* Profile */}
						<Route path="/profile">
							<Profile />
						</Route>

						{/* Activity */}
						<Route exact path="/activity">
							<Activity />
						</Route>

						{/* My Class */}
						<Route path="/activity/my-class">
							<MyClass />
						</Route>
					
						{/* Class Detail */}
						<Route path="/activity/class-detail">
							<ClassDetail />
						</Route>

						{/* Other */}
						<Route path="/help">Help</Route>
						<Route path="/logout">Logout</Route>
					</Switch>
				</Col>
			</Row>
		</BrowserRouter>
	);
}

export default App;
