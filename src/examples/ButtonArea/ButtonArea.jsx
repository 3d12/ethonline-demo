import React, { useState, useEffect } from 'react'
import { Button } from '@audius/stems'

import './ButtonArea.css'

const ButtonArea = (props) => {
	const [type, setType] = useState("Genres");

	useEffect(() => {
		if (type === "Genres") {
			document.getElementById("GenreButtons").style.display = "block";
			document.getElementById("MoodButtons").style.display = "none";
		} else if (type === "Moods") {
			document.getElementById("GenreButtons").style.display = "none";
			document.getElementById("MoodButtons").style.display = "block";
		}
	}, [type]);

	const setGenre = (genre) => {
		props.genreHandler(genre);
	};

	const setMood = (mood) => {
		props.moodHandler(mood);
	};

	const setRange = (range) => {
		props.rangeHandler(range);
	};

	return (
		<div className="ButtonAreaTop">
		<Button id="Day" onClick={() => setRange("Day")} text="Day" size="medium" />
		<Button id="Week" onClick={() => setRange("Week")} text="Week" size="medium" />
		<Button id="Month" onClick={() => setRange("Month")} text="Month" size="medium" />
		<br /><br />
		<Button id="Genres" onClick={() => setType("Genres")} text="Genres" size="medium" />
		<Button id="Moods" onClick={()=> setType("Moods")} text="Moods" size="medium" />
		<br /><br />
		<div id="GenreButtons" className="GenreButtons">
		<Button id="All Genres" onClick={() => setGenre(null)} text="All Genres" size="small" />
		<br />
		<Button id="Electronic" onClick={() => setGenre("Electronic")} text="Electronic" size="tiny" />
		<Button id="Rock" onClick={() => setGenre("Rock")} text="Rock" size="tiny" />
		<Button id="Metal" onClick={() => setGenre("Metal")} text="Metal" size="tiny" />
		<Button id="Alternative" onClick={() => setGenre("Alternative")} text="Alternative" size="tiny" />
		<Button id="Hip-Hop/Rap" onClick={() => setGenre("Hip-Hop/Rap")} text="Hip-Hop/Rap" size="tiny" />
		<Button id="Experimental" onClick={() => setGenre("Experimental")} text="Experimental" size="tiny" />
		<Button id="Punk" onClick={() => setGenre("Punk")} text="Punk" size="tiny" />
		<Button id="Folk" onClick={() => setGenre("Folk")} text="Folk" size="tiny" />
		<Button id="Pop" onClick={() => setGenre("Pop")} text="Pop" size="tiny" />
		<Button id="Ambient" onClick={() => setGenre("Ambient")} text="Ambient" size="tiny" />
		<Button id="Soundtrack" onClick={() => setGenre("Soundtrack")} text="Soundtrack" size="tiny" />
		<Button id="World" onClick={() => setGenre("World")} text="World" size="tiny" />
		<Button id="Jazz" onClick={() => setGenre("Jazz")} text="Jazz" size="tiny" />
		<Button id="Acoustic" onClick={() => setGenre("Acoustic")} text="Acoustic" size="tiny" />
		<Button id="Funk" onClick={() => setGenre("Funk")} text="Funk" size="tiny" />
		<Button id="R&B/Soul" onClick={() => setGenre("R&B/Soul")} text="R&B/Soul" size="tiny" />
		<Button id="Devotional" onClick={() => setGenre("Devotional")} text="Devotional" size="tiny" />
		<Button id="Classical" onClick={() => setGenre("Classical")} text="Classical" size="tiny" />
		<Button id="Reggae" onClick={() => setGenre("Reggae")} text="Reggae" size="tiny" />
		<Button id="Podcasts" onClick={() => setGenre("Podcasts")} text="Podcasts" size="tiny" />
		<Button id="Country" onClick={() => setGenre("Country")} text="Country" size="tiny" />
		<Button id="Spoken Word" onClick={() => setGenre("Spoken Word")} text="Spoken Word" size="tiny" />
		<Button id="Comedy" onClick={() => setGenre("Comedy")} text="Comedy" size="tiny" />
		<Button id="Blues" onClick={() => setGenre("Blues")} text="Blues" size="tiny" />
		<Button id="Kids" onClick={() => setGenre("Kids")} text="Kids" size="tiny" />
		<Button id="Audiobooks" onClick={() => setGenre("Audiobooks")} text="Audiobooks" size="tiny" />
		<Button id="Latin" onClick={() => setGenre("Latin")} text="Latin" size="tiny" />
		<Button id="Electronic - Techno" onClick={() => setGenre("Electronic - Techno")} text="Electronic - Techno" size="tiny" />
		<Button id="Electronic - Trap" onClick={() => setGenre("Trap")} text="Electronic - Trap" size="tiny" />
		<Button id="Electronic - House" onClick={() => setGenre("House")} text="Electronic - House" size="tiny" />
		<Button id="Electronic - Tech House" onClick={() => setGenre("Tech House")} text="Electronic - Tech House" size="tiny" />
		<Button id="Electronic - Deep House" onClick={() => setGenre("Deep House")} text="Electronic - Deep House" size="tiny" />
		<Button id="Electronic - Disco" onClick={() => setGenre("Disco")} text="Electronic - Disco" size="tiny" />
		<Button id="Electronic - Electro" onClick={() => setGenre("Electro")} text="Electronic - Electro" size="tiny" />
		<Button id="Electronic - Jungle" onClick={() => setGenre("Jungle")} text="Electronic - Jungle" size="tiny" />
		<Button id="Electronic - Progressive House" onClick={() => setGenre("Progressive House")} text="Electronic - Progressive House" size="tiny" />
		<Button id="Electronic - Hardstyle" onClick={() => setGenre("Hardstyle")} text="Electronic - Hardstyle" size="tiny" />
		<Button id="Electronic - Glitch Hop" onClick={() => setGenre("Glitch Hop")} text="Electronic - Glitch Hop" size="tiny" />
		<Button id="Electronic - Trance" onClick={() => setGenre("Trance")} text="Electronic - Trance" size="tiny" />
		<Button id="Electronic - Future Bass" onClick={() => setGenre("Future Bass")} text="Electronic - Future Bass" size="tiny" />
		<Button id="Electronic - Future House" onClick={() => setGenre("Future House")} text="Electronic - Future House" size="tiny" />
		<Button id="Electronic - Tropical House" onClick={() => setGenre("Tropical House")} text="Electronic - Tropical House" size="tiny" />
		<Button id="Electronic - Downtempo" onClick={() => setGenre("Downtempo")} text="Electronic - Downtempo" size="tiny" />
		<Button id="Electronic - Drum & Bass" onClick={() => setGenre("Drum & Bass")} text="Electronic - Drum & Bass" size="tiny" />
		<Button id="Electronic - Dubstep" onClick={() => setGenre("Dubstep")} text="Electronic - Dubstep" size="tiny" />
		<Button id="Electronic - Jersey Club" onClick={() => setGenre("Jersey Club")} text="Electronic - Jersey Club" size="tiny" />
		<Button id="Electronic - Vaporwave" onClick={() => setGenre("Vaporwave")} text="Electronic - Vaporwave" size="tiny" />
		<Button id="Electronic - Moombahton" onClick={() => setGenre("Moombahton")} text="Electronic - Moombahton" size="tiny" />
		<Button id="NoGenre" onClick={() => setGenre("")} text="None" size="tiny" />
		</div>
		<div id="MoodButtons" className="MoodButtons">
		<Button id="All Moods" onClick={() => setMood(null)} text="All Moods" size="small" />
		<br />
		<Button id="Peaceful" onClick={() => setMood("Peaceful")} text="Peaceful" size="tiny" />
		<Button id="Romantic" onClick={() => setMood("Romantic")} text="Romantic" size="tiny" />
		<Button id="Sentimental" onClick={() => setMood("Sentimental")} text="Sentimental" size="tiny" />
		<Button id="Tender" onClick={() => setMood("Tender")} text="Tender" size="tiny" />
		<Button id="Easygoing" onClick={() => setMood("Easygoing")} text="Easygoing" size="tiny" />
		<Button id="Yearning" onClick={() => setMood("Yearning")} text="Yearning" size="tiny" />
		<Button id="Sophisticated" onClick={() => setMood("Sophisticated")} text="Sophisticated" size="tiny" />
		<Button id="Sensual" onClick={() => setMood("Sensual")} text="Sensual" size="tiny" />
		<Button id="Cool" onClick={() => setMood("Cool")} text="Cool" size="tiny" />
		<Button id="Gritty" onClick={() => setMood("Gritty")} text="Gritty" size="tiny" />
		<Button id="Melancholy" onClick={() => setMood("Melancholy")} text="Melancholy" size="tiny" />
		<Button id="Serious" onClick={() => setMood("Serious")} text="Serious" size="tiny" />
		<Button id="Brooding" onClick={() => setMood("Brooding")} text="Brooding" size="tiny" />
		<Button id="Fiery" onClick={() => setMood("Fiery")} text="Fiery" size="tiny" />
		<Button id="Defiant" onClick={() => setMood("Defiant")} text="Defiant" size="tiny" />
		<Button id="Aggressive" onClick={() => setMood("Aggressive")} text="Aggressive" size="tiny" />
		<Button id="Rowdy" onClick={() => setMood("Rowdy")} text="Rowdy" size="tiny" />
		<Button id="Excited" onClick={() => setMood("Excited")} text="Excited" size="tiny" />
		<Button id="Energizing" onClick={() => setMood("Energizing")} text="Energizing" size="tiny" />
		<Button id="Empowering" onClick={() => setMood("Empowering")} text="Empowering" size="tiny" />
		<Button id="Stirring" onClick={() => setMood("Stirring")} text="Stirring" size="tiny" />
		<Button id="Upbeat" onClick={() => setMood("Upbeat")} text="Upbeat" size="tiny" />
		<Button id="Other" onClick={() => setMood("Other")} text="Other" size="tiny" />
		<Button id="NoMood" onClick={() => setMood("")} text="None" size="tiny" />
		</div>
		</div>
	);
}


export default ButtonArea
