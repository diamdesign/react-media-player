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
			artist: "John LEgend",
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
	];

	return (
		<>
			<div id="player-container">
				<div className="header"></div>
				<div className="playlist">
					<Playlist contentArray={contentArray} />
				</div>
				<div className="player"></div>
			</div>
		</>
	);
}
