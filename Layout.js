 import React,{Fragment, useState} from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Toggle from './Toggle';
import Footer from './Footer';
import './Layout.css';

const Layout=({children})=>{	
	const[sidebarOpen,setSidebarOpen] = useState(false) // sidebarOpen is false

	const openHandler=()=>{
		if(!sidebarOpen){  // not open 
			setSidebarOpen(true) // set to open because true 
		}else{
			setSidebarOpen(false) // because false, so set to not open 
		}
		}
		
		const sidebarCloseHandler=()=>{
			setSidebarOpen(false) // because false, so set to not open 
		}

		let sidebar
		if(sidebarOpen){ //  if sidebar is Open, then setting side bar to close using method sidebarCloseHandler 
			sidebar =<Sidebar close={sidebarCloseHandler} sidebar={"sidebar"}/>
		}
	
	return(
		<Fragment>
			<Header/>
			{sidebar} {/*it comes from "let sidebar" from above */}
			<Toggle click={openHandler}/>
			<p>{children}</p>
			<Footer/>
		

		</Fragment>
	)
}
export default Layout;