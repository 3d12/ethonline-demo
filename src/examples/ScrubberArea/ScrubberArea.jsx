import React from 'react'
import { Scrubber, Button } from '@audius/stems'

import './ScrubberArea.css'

const ScrubberArea = (props) => {

	const playPause = () => {
		if (props.playingAudio) {
			if (!props.playingAudio.paused) {
				props.playingAudio.pause();
			} else {
				props.playingAudio.play();
			}
		}
	};

	return (
		<div className="ScrubberArea">
		<Button text="&#9658; / &#10074;&#10074;" size="tiny" onClick={playPause} />
		<Scrubber 
			mediaKey={props.playingTrack ? props.playingTrack.id : null}
			elapsedSeconds={props.elapsedTime}
			totalSeconds={props.playingAudio ? props.playingTrack.duration : null}
			isPlaying={props.playingAudio ? !props.playingAudio.paused : null}
			onScrubRelease={(seconds) => (props.playingAudio ? props.playingAudio.currentTime = parseInt(seconds) : null)}
		/>
		</div>
	);
}


export default ScrubberArea
