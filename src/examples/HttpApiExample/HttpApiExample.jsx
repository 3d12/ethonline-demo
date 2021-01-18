import React, { useEffect, useState } from 'react'
import Hashids from 'hashids/cjs'
import ButtonArea from '../ButtonArea/ButtonArea'

import './HttpApiExample.css'

/** HTTP API Example */

const selectHost = async () => {
	const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
	const res = await fetch('https://api.audius.co')
	const hosts = await res.json()
	return sample(hosts.data)
}

const HttpApiExample = () => {
	const [tracks, setTracks] = useState(null);
	const [allTracks, setAllTracks] = useState(null);
	const [genre, setGenre] = useState(null);
	const [mood, setMood] = useState(null);
	const [host, setHost] = useState(null);
	const [playingTrack, setPlayingTrack] = useState(null);
	const [playingAudio, setPlayingAudio] = useState(null);
	const [range, setRange] = useState(null);

	useEffect(() => {
		const fetchTracks = async () => {
			const selectedHost = await selectHost();
			const res = await fetch(`${selectedHost}/v1/tracks/trending?time={range ? range : "Day"}&genre=${genre ? genre : ""}`);
			const json = await res.json();
			console.log("Host: " + selectedHost);
			console.log(json);
			setHost(selectedHost);
			setAllTracks(json.data);
			console.log("Done with fetchTracks");
		};
		fetchTracks();
	}, [genre, range]);

	const decodeHashId = (id) => {
		const hashids = new Hashids('azowernasdfoia', 5);
		return hashids.decode(id);
	}

	const trackClicked = (track) => {
		console.log("ID clicked is " + track.id);
		if (playingAudio) {
			console.log("Pausing...");
			playingAudio.pause();
			playingAudio.currentTime = 0;
			setPlayingAudio(null);
			if (playingTrack.id !== track.id) {
				console.log("Starting track...");
				playTrack(track);
			}
		} else {
			console.log("Starting track...");
			playTrack(track);
		}
	};

	const playTrack = (track) => {
		console.log("Playing track " + track.id + "...");
		setPlayingTrack(track);
		const id = track.id;
		const streamUrl = `${host}/v1/tracks/${id}/stream`
		const audio = new Audio(streamUrl);
		if (audio) {
			setPlayingAudio(audio);
			audio.play();
		}
	};

	useEffect(() => {
		if (allTracks) {
			setMood(null);
			setTracks(allTracks
				.filter((track) => { return !['test_tube','test_centre','test_subject','test_ing'].includes(track.user.handle) }) // filtering out kick copy tracks
				.filter((track) => { return (genre !== null ? track.genre === null ? "" === genre : track.genre === genre : true) }) // genre filter
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [genre, allTracks]);

	useEffect(() => {
		if (allTracks) {
			setTracks(allTracks
				.filter((track) => { return !['test_tube','test_centre','test_subject','test_ing'].includes(track.user.handle) }) // filtering out kick copy tracks
				.filter((track) => { return (mood !== null ? track.mood === null ? "" === mood : track.mood === mood : true) }) // genre filter
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [mood, allTracks]);

	return tracks && (
		<div className="topTracks">
		<ButtonArea genreHandler={setGenre} moodHandler={setMood} rangeHandler={setRange} />
		<h1>{(range ? range : "Day") + " - " + (genre === "" ? "No Genre" : genre ? genre : "All Genres") + " - " + (mood === "" ? "No Mood" : mood ? mood : "All Moods")}</h1>
		<ul>
		{tracks.map((track) => {
			return (
				<li key={track.id}><div className="trackListing"><div className="artwork"><img onClick={() => trackClicked(track)} src={track.artwork['150x150']} alt='artwork'/></div><p> <a href={'http://audius.co/'+track.user.handle+'/'}>{track.user.name}</a> - <a href={'http://audius.co/'+track.user.handle+'/'+encodeURIComponent(track.title.replace(/ /g, '-'))+'-'+decodeHashId(track.id)+'/'}>{track.title}</a> ({track.play_count})</p></div></li>
			);
		})}
		</ul>
		</div>
	);
}


export default HttpApiExample
