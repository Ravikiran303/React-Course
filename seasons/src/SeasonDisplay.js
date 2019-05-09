import React from 'react';
import './SeasonDisplay.css';
const seasonConfig = {
	summer:{
		text:"Let's hit the beach",
		iconName:'sun'
	},
	winter:{
		text:"Burr,it is chilly",
		iconName:'snowflake'
	}
};

const SeasonDisplay = (props) =>{
	console.log(props.lat);
	const getSeason = (lat,month) =>{
		if (month>2 && month<9) {
			return lat > 0 ? 'summer' : 'winter';
		}
		else{
			return lat > 0 ? 'winter':'summer';
		}
	}

	const season = getSeason(props.lat,new Date().getMonth());
	console.log(season);
	const {text,iconName} = seasonConfig[season];
	// const text = season ==='winter'? 'Burr,it is chilly' : 'Lets hit the beach';
	// const icon = season === 'winter' ? 'snowflake':'sun';
	return(
	<div className={`season-display ${season}`}>
		<i className={`icon-left massive ${iconName} icon`}/>
		<h1>{text}</h1>
		<i className={`icon-right huge ${iconName} icon`}/>
	</div>
	);
};
export default SeasonDisplay;