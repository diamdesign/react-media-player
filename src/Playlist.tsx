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
			{contentArray.map((list) => {
				return (
					<div key={list.id} className="list">
						<div className="image">
							<img src={list.image} alt="" />
						</div>
						<div className="info">
							<p>{list.artist}</p>
							<span>{list.title}</span>
						</div>
						<div className="icon"></div>
					</div>
				);
			})}
		</div>
	);
}

export default Playlist;
