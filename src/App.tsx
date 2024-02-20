import { Playlist } from "./Playlist";

interface ContentItem {
	id: number;
	artist: string;
	title: string;
	image: string;
}

export function App() {
	const contentArray: ContentItem[] = [
		{
			id: 1,
			artist: "A Rocket to the moon",
			title: "Like we used to",
			image: "https://picsum.photos/1920/1080",
		},
		{
			id: 2,
			artist: "John Legend",
			title: "Save the moon",
			image: "https://picsum.photos/80/80",
		},
		{
			id: 3,
			artist: "A Rocket to the moon",
			title: "Dakota",
			image: "https://picsum.photos/79/79",
		},
		{
			id: 4,
			artist: "Zedd & Aloe Blacc",
			title: "Candyman",
			image: "https://picsum.photos/81/81",
		},
		{
			id: 5,
			artist: "Rag'n'Bone Man",
			title: "CandymHumanan",
			image: "https://picsum.photos/78/78",
		},
		{
			id: 6,
			artist: "Imagine Dragons",
			title: "Shots (Broken Remix)",
			image: "https://picsum.photos/82/82",
		},
		{
			id: 7,
			artist: "Imagine Dragons",
			title: "Shots",
			image: "https://picsum.photos/83/83",
		},
		{
			id: 8,
			artist: "Imagine Dragons",
			title: "Shots (Remix)",
			image: "https://picsum.photos/84/85",
		},
	];

	return (
		<>
			<div id="player-container">
				<div className="header">
					<a href="#" className="backbtn">
						<span className="material-symbols-outlined">arrow_back_ios</span>
					</a>
					<p>Playlist - Moody</p>
					<a href="#" className="submenu">
						<span className="material-symbols-outlined">more_vert</span>
					</a>
				</div>
				<div className="playlist">
					<Playlist contentArray={contentArray} />
				</div>
				<div className="player">
					<div className="bigthumb">
						<img src="https://picsum.photos/1920/1080" alt="" />
					</div>
					<div className="song">
						<a href="#" className="add">
							<span className="material-symbols-outlined">add_circle</span>
						</a>
						<div className="info">
							<p>A Rocket to the moon</p>
							<span>Like we used to</span>
						</div>
						<a href="#" className="heart">
							<span className="material-symbols-outlined">favorite</span>
						</a>
					</div>
					<div className="time">
						<span>0:40</span>
						<div className="time-container">
							<div className="timelapsed"></div>
						</div>
						<span>3:42</span>
					</div>
					<div className="controls">
						<a href="#" className="repeat">
							<span className="material-symbols-outlined">repeat</span>
						</a>
						<a href="#" className="reverse">
							<span className="material-symbols-outlined">fast_rewind</span>
						</a>
						<a href="#" className="play">
							<span className="material-symbols-outlined">play_circle</span>
						</a>
						<a href="#" className="forwards">
							<span className="material-symbols-outlined">fast_forward</span>
						</a>
						<a href="#" className="shuffle">
							<span className="material-symbols-outlined">shuffle</span>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
