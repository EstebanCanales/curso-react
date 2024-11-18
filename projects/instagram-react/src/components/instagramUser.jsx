import { useState } from "react";

export default function instagramUser({ userName, userImage }) {
	const [follow, setFollow] = useState(false);

	const handleClick = () => {
		follow ? setFollow(false) : setFollow(true);
		console.log(follow);
	};

	return (
		<div className="container">
			<img
				className="userImage"
				src={`https://unavatar.io/${userImage}`}
				alt={userName}
			/>
			<div className="subContainer">
				<span className="userName">{userName}</span>
				<button
					onClick={handleClick}
					className={`followButton ${follow ? "following" : "follow"}`}
				>
					{follow ? "Following" : "Follow"}
				</button>
			</div>
		</div>
	);
}
