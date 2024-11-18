import "./App.css";
import InstagramUser from "./components/instagramUser";

function App() {
	const userList = [
		{ name: "Andres", image: "1" },
		{ name: "Sofia", image: "2" },
		{ name: "Josue", image: "3" },
		{ name: "Amanda", image: "4" },
		{ name: "Brandon", image: "5" },
		{ name: "Sebastian", image: "6" },
	];

	return (
		<>
			{userList.map((user, index) => {
				return (
					<InstagramUser
						key={index}
						userName={user.name}
						userImage={user.image}
					/>
				);
			})}
		</>
	);
}

export default App;
