import { Playlist } from "./Playlist";
import data from "./data/data.json";

interface ContentItem {
	id: number;
	artist: string;
	title: string;
	image: string;
}

export function App() {
	const contentArray: ContentItem[] = data;

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
