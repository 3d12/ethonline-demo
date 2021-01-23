import React, { useEffect, useState } from 'react'
import Hashids from 'hashids/cjs'
import ButtonArea from '../ButtonArea/ButtonArea'
import ScrubberArea from '../ScrubberArea/ScrubberArea'
//import { Scrubber, Button } from '@audius/stems'

import './BottomPlayer.css'

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
	'oliveirajoaquim','RajeshRamdevRam','smolbean','frizman','test_tube','test_centre',
	'test_subject','test_ing'
];

/* This function selects a random host (discovery provider) from the list
  	available at api.audius.co */
const selectHost = async () => {
	const sample = (arr) => arr[Math.floor(Math.random() * arr.length)]
	const res = await fetch('https://api.audius.co')
	const hosts = await res.json()
	return sample(hosts.data)
}

/* Player component */
const BottomPlayer = () => {
	const [tracks, setTracks] = useState(null);
	const [allTracks, setAllTracks] = useState(null);
	const [genre, setGenre] = useState(null);
	const [mood, setMood] = useState(null);
	const [host, setHost] = useState(null);
	const [playingTrack, setPlayingTrack] = useState(null);
	const [playingAudio, setPlayingAudio] = useState(null);
	const [range, setRange] = useState(null);
	const [elapsedTime, setElapsedTime] = useState(null);
	const [playingSecondsPoll, setPlayingSecondsPoll] = useState(null);
	const [user, setUser] = useState(null);
	const [userName, setUserName] = useState(null);
	const [trackVolume, setTrackVolume] = useState(null);

	useEffect(() => {
		document.title = "BottomPlayer";
	});

	/* This effect watches genre and range, and will resubmit the query on either
	  	field changing */
	useEffect(() => {
		const fetchTracks = async () => {
			const selectedHost = await selectHost();
			const res = await fetch(`${selectedHost}/v1/tracks/trending?time={range ? range : "Day"}&genre=${genre ? genre : ""}&app_name=BottomPlayerv1`);
			const json = await res.json();
			setHost(selectedHost);
			setUser(null);
			setAllTracks(json.data);
		};
		fetchTracks();
	}, [genre, range]);

	/* This effect watches for the user to change, and will fetch just that user's
	  	tracks */
	useEffect(() => {
		const fetchTracks = async () => {
			const selectedHost = await selectHost();
			const res1 = await fetch(`${selectedHost}/v1/users/${user}?app_name=BottomPlayerv1`);
			const json1 = await res1.json();
			setUserName(json1.data.name);
			const res = await fetch(`${selectedHost}/v1/users/${user}/tracks?app_name=BottomPlayerv1`);
			const json = await res.json();
			setHost(selectedHost);
			setAllTracks(json.data);
		};
		if (user) {
			fetchTracks();
		}
	}, [user]);

	/* Helper function to turn hash IDs into database numbers, for
	  	converting track IDs (and names) into URLs */
	const decodeHashId = (id) => {
		const hashids = new Hashids('azowernasdfoia', 5);
		return hashids.decode(id);
	}

	/* Main onClick event for the track artwork, will perform necessary
	  	cleanup on already-playing audio before starting new audio,
	  	or pause if clicked audio is the same as playing audio */
	const trackClicked = (track) => {
		if (playingAudio) {
			playingAudio.pause();
			playingAudio.currentTime = 0;
			setPlayingAudio(null);
			setElapsedTime(null);
			clearInterval(playingSecondsPoll);
			setPlayingSecondsPoll(null);
			if (playingTrack.id !== track.id) {
				playTrack(track);
			}
		} else {
			playTrack(track);
		}
	};

	/* playTrack function was split out so we would have a layer of
	 	control over the setPlayingTrack function. When that
		was happening in the onClick, it was leading to
		infinite loops because of the useEffect hooks */
	const playTrack = (track) => {
		setPlayingTrack(track);
		const id = track.id;
		const streamUrl = `${host}/v1/tracks/${id}/stream?app_name=BottomPlayerv1`
		const audio = new Audio(streamUrl);
		if (audio) {
			setPlayingAudio(audio);
			audio.volume = (trackVolume ? trackVolume : 1);
			audio.play();
			setPlayingSecondsPoll(setInterval(() => {
				const newTime = audio.currentTime;
				setElapsedTime(newTime);
			},200));
		}
	};

	// Genre handler, will trigger a re-fetch since the fetchTracks handler
	//	watches for genre to change as well
	useEffect(() => {
		// Excluding user here, because we don't want this filtering to occur
		// 	if a user is selected
		if (allTracks && !user) {
			setMood(null);
			setTracks(allTracks
				.filter((track) => { return !scammer_handles.includes(track.user.handle) }) // filtering out scammers
				.filter((track) => { return (genre !== null ? track.genre === null ? "" === genre : track.genre === genre : true) }) // genre filter
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [genre, allTracks, user]);

	// Mood handler, will not trigger a re-fetch since fetchTracks is not
	//	watching this field
	useEffect(() => {
		if (allTracks) {
			setTracks(allTracks
				.filter((track) => { return !scammer_handles.includes(track.user.handle) }) // filtering out scammers
				.filter((track) => { return (mood !== null ? track.mood === null ? "" === mood : track.mood === mood : true) }) // mood filter
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [mood, allTracks]);

	// User handler, will not trigger a re-fetch since fetchTracks is not
	//	watching this field
	useEffect(() => {
		if (allTracks && user) {
			setTracks(allTracks
				.filter((track) => { return !scammer_handles.includes(track.user.handle) }) // filtering out scammers
				.sort((a,b) => { return b.play_count - a.play_count }) // descending
				.slice(0,10)) // top 10
			;
		}
	}, [user, allTracks]);

	// Lazy onClick handler for the Bottom Face link, could use this to
	// 	fetch any other userID and display their tracks
	const showBottomFaceTracks = (e) => {
		if (e) {
			e.preventDefault();
		}
		setUser("D2x3p");
	};


	// Returned component for rendering
	return tracks && (
		<div className="BottomPlayerTop">
		<h1>BottomPlayer</h1>
		<p>An Audius API player focused on supporting independent artists! Made with ♥ by <a href="#!" onClick={() => showBottomFaceTracks()}>Bottom Face</a> in 2021.</p>
		<ScrubberArea playingAudio={playingAudio} playingTrack={playingTrack} elapsedTime={elapsedTime} setTrackVolume={setTrackVolume} trackVolume={trackVolume} />
		<br />
		<ButtonArea genreHandler={setGenre} moodHandler={setMood} rangeHandler={setRange} />
		<div className="topTracks">
		<h1>{!user ? range ? range + " - " : "Day - " : null}{user ? userName + "'s Tracks" : genre === "" ? "No Genre" : genre ? genre : "All Genres"} - {mood === "" ? "No Mood" : mood ? mood : "All Moods"}</h1>
		<ul>
		{tracks.map((track) => {
			return (
				<li key={track.id}><div className="trackListing"><div className="artwork"><img onClick={() => trackClicked(track)} src={track.artwork['150x150']} alt='artwork'/></div><p> <a href={'http://audius.co/'+track.user.handle+'/'}>{track.user.name ? track.user.name : track.user.handle}</a> - <a href={'http://audius.co/'+track.user.handle+'/'+encodeURIComponent(track.title.replace(/ /g, '-'))+'-'+decodeHashId(track.id)+'/'}>{track.title}</a> ({track.play_count})</p></div></li>
			);
		})}
		</ul>
		</div>
		</div>
	);
}


export default BottomPlayer
