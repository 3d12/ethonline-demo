import React, { useEffect, useState } from 'react'
import { Scrubber, Button } from '@audius/stems'

import './ScrubberArea.css'

const ScrubberArea = (props) => {
	const [trackVolume, setTrackVolume] = useState(null);

	const volumeSet = (seconds) => {
		const volumeFloat = seconds/100.0;
		setTrackVolume(volumeFloat);
		if (props.playingAudio && !props.playingAudio.paused) {
			props.playingAudio.volume = volumeFloat;
		}
	};

	const playPause = () => {
		if (props.playingAudio) {
			if (!props.playingAudio.paused) {
				props.playingAudio.pause();
			} else {
				props.playingAudio.volume = (trackVolume ? trackVolume : 0);
				props.playingAudio.play();
			}
		}
	};

	return (
		<div className="scrubberArea">
		<Button text="&#9658; / &#10074;&#10074;" size="tiny" onClick={playPause} />
		<Scrubber 
			mediaKey={props.playingTrack ? props.playingTrack.id : null}
			elapsedSeconds={props.elapsedTime}
			totalSeconds={props.playingAudio ? props.playingTrack.duration : null}
			isPlaying={props.playingAudio ? !props.playingAudio.paused : null}
			onScrubRelease={(seconds) => (props.playingAudio ? props.playingAudio.currentTime = parseInt(seconds) : null)}
		/>
		<div className="volumeScrubber">
		<div className="volumeTitle">Volume<br /></div>
		<Scrubber
			mediaKey={props.playingTrack ? props.playingTrack.id : null}
			includeTimestamps={false}
			elapsedSeconds='100'
			totalSeconds='100'
			isPlaying={false}
			onScrub={(seconds) => (props.playingAudio ? volumeSet(seconds) : null)}
			onScrubRelease={(seconds) => (props.playingAudio ? volumeSet(seconds) : null)}
		/>
		</div>
		</div>
	);
}


export default ScrubberArea
