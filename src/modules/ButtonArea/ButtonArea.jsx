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
		<Button id="Day" onClick={() => setRange("Day")} text="Day" size="medium" type="secondary" />
		<Button id="Week" onClick={() => setRange("Week")} text="Week" size="medium" type="secondary" />
		<Button id="Month" onClick={() => setRange("Month")} text="Month" size="medium" type="secondary" />
		<br type="secondary" /><br />
		<Button id="Genres" onClick={() => setType("Genres")} text="Genres" size="medium" type="secondary" />
		<Button id="Moods" onClick={()=> setType("Moods")} text="Moods" size="medium" type="secondary" />
		<br type="secondary" /><br />
		<div id="GenreButtons" className="GenreButtons">
		<Button id="All Genres" onClick={() => setGenre(null)} text="All Genres" size="small" type="secondary" />
		<br type="secondary" />
		<Button id="Electronic" onClick={() => setGenre("Electronic")} text="Electronic" size="tiny" type="secondary" />
		<Button id="Rock" onClick={() => setGenre("Rock")} text="Rock" size="tiny" type="secondary" />
		<Button id="Metal" onClick={() => setGenre("Metal")} text="Metal" size="tiny" type="secondary" />
		<Button id="Alternative" onClick={() => setGenre("Alternative")} text="Alternative" size="tiny" type="secondary" />
		<Button id="Hip-Hop/Rap" onClick={() => setGenre("Hip-Hop/Rap")} text="Hip-Hop/Rap" size="tiny" type="secondary" />
		<Button id="Experimental" onClick={() => setGenre("Experimental")} text="Experimental" size="tiny" type="secondary" />
		<Button id="Punk" onClick={() => setGenre("Punk")} text="Punk" size="tiny" type="secondary" />
		<Button id="Folk" onClick={() => setGenre("Folk")} text="Folk" size="tiny" type="secondary" />
		<Button id="Pop" onClick={() => setGenre("Pop")} text="Pop" size="tiny" type="secondary" />
		<Button id="Ambient" onClick={() => setGenre("Ambient")} text="Ambient" size="tiny" type="secondary" />
		<Button id="Soundtrack" onClick={() => setGenre("Soundtrack")} text="Soundtrack" size="tiny" type="secondary" />
		<Button id="World" onClick={() => setGenre("World")} text="World" size="tiny" type="secondary" />
		<Button id="Jazz" onClick={() => setGenre("Jazz")} text="Jazz" size="tiny" type="secondary" />
		<Button id="Acoustic" onClick={() => setGenre("Acoustic")} text="Acoustic" size="tiny" type="secondary" />
		<Button id="Funk" onClick={() => setGenre("Funk")} text="Funk" size="tiny" type="secondary" />
		<Button id="R&B/Soul" onClick={() => setGenre("R&B/Soul")} text="R&B/Soul" size="tiny" type="secondary" />
		<Button id="Devotional" onClick={() => setGenre("Devotional")} text="Devotional" size="tiny" type="secondary" />
		<Button id="Classical" onClick={() => setGenre("Classical")} text="Classical" size="tiny" type="secondary" />
		<Button id="Reggae" onClick={() => setGenre("Reggae")} text="Reggae" size="tiny" type="secondary" />
		<Button id="Podcasts" onClick={() => setGenre("Podcasts")} text="Podcasts" size="tiny" type="secondary" />
		<Button id="Country" onClick={() => setGenre("Country")} text="Country" size="tiny" type="secondary" />
		<Button id="Spoken Word" onClick={() => setGenre("Spoken Word")} text="Spoken Word" size="tiny" type="secondary" />
		<Button id="Comedy" onClick={() => setGenre("Comedy")} text="Comedy" size="tiny" type="secondary" />
		<Button id="Blues" onClick={() => setGenre("Blues")} text="Blues" size="tiny" type="secondary" />
		<Button id="Kids" onClick={() => setGenre("Kids")} text="Kids" size="tiny" type="secondary" />
		<Button id="Audiobooks" onClick={() => setGenre("Audiobooks")} text="Audiobooks" size="tiny" type="secondary" />
		<Button id="Latin" onClick={() => setGenre("Latin")} text="Latin" size="tiny" type="secondary" />
		<Button id="Electronic - Techno" onClick={() => setGenre("Electronic - Techno")} text="Electronic - Techno" size="tiny" type="secondary" />
		<Button id="Electronic - Trap" onClick={() => setGenre("Trap")} text="Electronic - Trap" size="tiny" type="secondary" />
		<Button id="Electronic - House" onClick={() => setGenre("House")} text="Electronic - House" size="tiny" type="secondary" />
		<Button id="Electronic - Tech House" onClick={() => setGenre("Tech House")} text="Electronic - Tech House" size="tiny" type="secondary" />
		<Button id="Electronic - Deep House" onClick={() => setGenre("Deep House")} text="Electronic - Deep House" size="tiny" type="secondary" />
		<Button id="Electronic - Disco" onClick={() => setGenre("Disco")} text="Electronic - Disco" size="tiny" type="secondary" />
		<Button id="Electronic - Electro" onClick={() => setGenre("Electro")} text="Electronic - Electro" size="tiny" type="secondary" />
		<Button id="Electronic - Jungle" onClick={() => setGenre("Jungle")} text="Electronic - Jungle" size="tiny" type="secondary" />
		<Button id="Electronic - Progressive House" onClick={() => setGenre("Progressive House")} text="Electronic - Progressive House" size="tiny" type="secondary" />
		<Button id="Electronic - Hardstyle" onClick={() => setGenre("Hardstyle")} text="Electronic - Hardstyle" size="tiny" type="secondary" />
		<Button id="Electronic - Glitch Hop" onClick={() => setGenre("Glitch Hop")} text="Electronic - Glitch Hop" size="tiny" type="secondary" />
		<Button id="Electronic - Trance" onClick={() => setGenre("Trance")} text="Electronic - Trance" size="tiny" type="secondary" />
		<Button id="Electronic - Future Bass" onClick={() => setGenre("Future Bass")} text="Electronic - Future Bass" size="tiny" type="secondary" />
		<Button id="Electronic - Future House" onClick={() => setGenre("Future House")} text="Electronic - Future House" size="tiny" type="secondary" />
		<Button id="Electronic - Tropical House" onClick={() => setGenre("Tropical House")} text="Electronic - Tropical House" size="tiny" type="secondary" />
		<Button id="Electronic - Downtempo" onClick={() => setGenre("Downtempo")} text="Electronic - Downtempo" size="tiny" type="secondary" />
		<Button id="Electronic - Drum & Bass" onClick={() => setGenre("Drum & Bass")} text="Electronic - Drum & Bass" size="tiny" type="secondary" />
		<Button id="Electronic - Dubstep" onClick={() => setGenre("Dubstep")} text="Electronic - Dubstep" size="tiny" type="secondary" />
		<Button id="Electronic - Jersey Club" onClick={() => setGenre("Jersey Club")} text="Electronic - Jersey Club" size="tiny" type="secondary" />
		<Button id="Electronic - Vaporwave" onClick={() => setGenre("Vaporwave")} text="Electronic - Vaporwave" size="tiny" type="secondary" />
		<Button id="Electronic - Moombahton" onClick={() => setGenre("Moombahton")} text="Electronic - Moombahton" size="tiny" type="secondary" />
		<Button id="NoGenre" onClick={() => setGenre("")} text="None" size="tiny" type="secondary" />
		</div>
		<div id="MoodButtons" className="MoodButtons">
		<Button id="All Moods" onClick={() => setMood(null)} text="All Moods" size="small" type="secondary" />
		<br type="secondary" />
		<Button id="Peaceful" onClick={() => setMood("Peaceful")} text="Peaceful" size="tiny" type="secondary" />
		<Button id="Romantic" onClick={() => setMood("Romantic")} text="Romantic" size="tiny" type="secondary" />
		<Button id="Sentimental" onClick={() => setMood("Sentimental")} text="Sentimental" size="tiny" type="secondary" />
		<Button id="Tender" onClick={() => setMood("Tender")} text="Tender" size="tiny" type="secondary" />
		<Button id="Easygoing" onClick={() => setMood("Easygoing")} text="Easygoing" size="tiny" type="secondary" />
		<Button id="Yearning" onClick={() => setMood("Yearning")} text="Yearning" size="tiny" type="secondary" />
		<Button id="Sophisticated" onClick={() => setMood("Sophisticated")} text="Sophisticated" size="tiny" type="secondary" />
		<Button id="Sensual" onClick={() => setMood("Sensual")} text="Sensual" size="tiny" type="secondary" />
		<Button id="Cool" onClick={() => setMood("Cool")} text="Cool" size="tiny" type="secondary" />
		<Button id="Gritty" onClick={() => setMood("Gritty")} text="Gritty" size="tiny" type="secondary" />
		<Button id="Melancholy" onClick={() => setMood("Melancholy")} text="Melancholy" size="tiny" type="secondary" />
		<Button id="Serious" onClick={() => setMood("Serious")} text="Serious" size="tiny" type="secondary" />
		<Button id="Brooding" onClick={() => setMood("Brooding")} text="Brooding" size="tiny" type="secondary" />
		<Button id="Fiery" onClick={() => setMood("Fiery")} text="Fiery" size="tiny" type="secondary" />
		<Button id="Defiant" onClick={() => setMood("Defiant")} text="Defiant" size="tiny" type="secondary" />
		<Button id="Aggressive" onClick={() => setMood("Aggressive")} text="Aggressive" size="tiny" type="secondary" />
		<Button id="Rowdy" onClick={() => setMood("Rowdy")} text="Rowdy" size="tiny" type="secondary" />
		<Button id="Excited" onClick={() => setMood("Excited")} text="Excited" size="tiny" type="secondary" />
		<Button id="Energizing" onClick={() => setMood("Energizing")} text="Energizing" size="tiny" type="secondary" />
		<Button id="Empowering" onClick={() => setMood("Empowering")} text="Empowering" size="tiny" type="secondary" />
		<Button id="Stirring" onClick={() => setMood("Stirring")} text="Stirring" size="tiny" type="secondary" />
		<Button id="Upbeat" onClick={() => setMood("Upbeat")} text="Upbeat" size="tiny" type="secondary" />
		<Button id="Other" onClick={() => setMood("Other")} text="Other" size="tiny" type="secondary" />
		<Button id="NoMood" onClick={() => setMood("")} text="None" size="tiny" type="secondary" />
		</div>
		</div>
	);
}


export default ButtonArea
