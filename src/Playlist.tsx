interface ContentItem {
	id: number;
	artist: string;
	title: string;
	image: string;
}

interface PlaylistProps {
	contentArray: ContentItem[];
}

export function Playlist({ contentArray }: PlaylistProps) {
	return (
		<div className="playlist-container">
			{contentArray.map((list, index) => {
				return (
					<div key={list.id} className={`list ${index === 0 ? "active" : ""}`}>
						<div className="image">
							<img src={list.image} alt="" />
						</div>
						<div className="info">
							<p>{list.artist}</p>
							<span>{list.title}</span>
						</div>
						<div className="icon">
							<span className="material-symbols-outlined">play_circle</span>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Playlist;
