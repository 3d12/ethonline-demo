import React, { useEffect, useState } from 'react'
import Hashids from 'hashids/cjs'
import ButtonArea from '../ButtonArea/ButtonArea'

import './HttpApiExample.css'

/* This list is a list of handles of accounts that:
 		* Mostly upload copyrighted or otherwise not-their-own work
		* Are not who they seem to be (celebrity impersonator accounts)
		* Otherwise do not belong (perverts in the kids section)
	If you've been included in this list and feel this is in error,
	please open an issue or PR in this repo and explain why. */
const scammer_handles = [
	'1990','soudogd','Duyenlina22','Thongtrandalat','cryptoace','RoadtoBitcoin','FirasDhouibi',
	'canalpay','Lonly_kid','nickname02','elsat','maimaibenanhem','2020airdrop1','staytruelorjiggy',
	'maimaibenanh1','hoainguyen21','Hot','Duyenlina','Therlbread','rwota','Tonime2','Dalat',
	'Andrezitol1','Sangking','Bentopro','Duyen22','TheMisir','bduda0','billie_eilish',
	'draynicolas1','kopimi','uploads','redo','HipHop247','CyberNukeEdits','OnyxHD',
	'Celosity','OmarEstrada1987','melly','xxxxtentacion','Electric_Hawk','nosteps',
	'demetro_news','trader_keci','Suykast','Ianqaz','mhamedabdelmou1','toptracks','rapleaks',
	'MagSun','xiaoxing2207','Nimos','justinbeiber','TheHighGround','EloniousVancity',
	'itsthomasaman','Tiwing','rones_lira','assis_anastacio','poseidon909','Iamdooboy',
	'driftabeatz','ichihashi08','h22061995','Gadonttv','bruhtomen1337','Sobs4Crypto',
	'hoainguyen22','BernardFety','sararey90353942','rggomes','CleanEdits','JoelmyB',
	'sonsdeafrica','Cyberthebaby','KayRemix','drmib','hoaido0205','paulos',
	'ahmad_osman2016','findbuzz','Marcosrippel','afrobeatz','getter','portaljbmusik',
	'therealNemani','Sky_net','Johneri22328619','maven_','Aps17','JL711','vidal_news',
	'YoYoPink','only11','DaSlickstanator','kaem_e','espiritismo','omurokur','Dastan',
	'oliveirajoaquim','RajeshRamdevRam','smolbean'
];

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

	// Genre handler, will trigger a re-fetch since the fetchTracks handler
	//	watches for genre to change as well
	useEffect(() => {
		if (allTracks) {
			setMood(null);
			setTracks(allTracks
				.filter((track) => { return !['test_tube','test_centre','test_subject','test_ing'].includes(track.user.handle) }) // filtering out kick copy tracks
				.filter((track) => { return !scammer_handles.includes(track.user.handle) }) // filtering out users that repost other people's tracks
				.filter((track) => { return (genre !== null ? track.genre === null ? "" === genre : track.genre === genre : true) }) // genre filter
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [genre, allTracks]);

	// Mood handler, will not trigger a re-fetch since fetchTracks is not
	//	watching this field
	useEffect(() => {
		if (allTracks) {
			setTracks(allTracks
				.filter((track) => { return !['test_tube','test_centre','test_subject','test_ing'].includes(track.user.handle) }) // filtering out kick copy tracks
				.filter((track) => { return !scammer_handles.includes(track.user.handle) }) // filtering out users that repost other people's tracks
				.filter((track) => { return (mood !== null ? track.mood === null ? "" === mood : track.mood === mood : true) }) // mood filter
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
				<li key={track.id}><div className="trackListing"><div className="artwork"><img onClick={() => trackClicked(track)} src={track.artwork['150x150']} alt='artwork'/></div><p> <a href={'http://audius.co/'+track.user.handle+'/'}>{track.user.name ? track.user.name : track.user.handle}</a> - <a href={'http://audius.co/'+track.user.handle+'/'+encodeURIComponent(track.title.replace(/ /g, '-'))+'-'+decodeHashId(track.id)+'/'}>{track.title}</a> ({track.play_count})</p></div></li>
			);
		})}
		</ul>
		</div>
	);
}


export default HttpApiExample
