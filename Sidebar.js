import React,{useState}from 'react';
import "./componentStyles.css";

const Sidebar=(props)=>{
	const[sidebarClass, setSidebarClass]= useState(props.sidebar)

	const closeHandler=(e)=>{
		e.preventDefault()
		setSidebarClass("sidebar close")
		
		setTimeout(()=>{
		props.close()
	},1000)
	
	

	}
	
		return(
			<div className={sidebarClass}>
			<h2>Menu </h2>
			<ul>
			<li><a href="/recipe"> Recipe</a></li> 
			<li><a href="/food">Food</a></li>			</ul>
			<button id="close" onClick={closeHandler}>&times; close</button>
			</div>
		)
	}
export default Sidebar;