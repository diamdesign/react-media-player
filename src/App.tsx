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
				</div>
			</div>
		</>
	);
}
