import React,{Fragment} from 'react';
import './componentStyles.css';

const Toggle=(props)=>{
	return(
		<Fragment>
			<button id ="toggle" onClick={props.click}>&#8801;</button> {/* props.click goes to layout.js section where toggle click is present. 
			/*Then it calls openhandler. &#8801 is the symbol of triple lines which looks like button.*/}

		</Fragment>
	)
	
}
export default Toggle;