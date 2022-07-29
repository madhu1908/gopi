// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// Developer: Sriram  (github.com/sriram-24)
const toggleNavigation = (isSidebarOpen) =>{
console.error(document.querySelector(".mx-scrollcontainer-shrink").classList.contains('mx-scrollcontainer-open'))
	if(	isSidebarOpen  ){
		
	document.querySelector(".mx-scrollcontainer-shrink").classList.add('mx-scrollcontainer-open')
	document.querySelector(".region-sidebar").classList.add('mx-scrollcontainer-move-in')
	document.querySelector(".region-sidebar").style.width="232px";
}
else{
	document.querySelector(".mx-scrollcontainer-shrink").classList.remove('mx-scrollcontainer-open')
	document.querySelector(".region-sidebar").classList.remove('mx-scrollcontainer-move-in');
	// document.querySelector(".region-sidebar").classList.add('mx-scrollcontainer-move-out');
	document.querySelector(".region-sidebar").style.width="0px";
}
}
// END EXTRA CODE

/**
 * @param {boolean} isSidebarOpen
 * @returns {Promise.<void>}
 */
export async function JS_ToggleNavigationWithDelay(isSidebarOpen) {
	// BEGIN USER CODE
	toggleNavigation(isSidebarOpen)
	// END USER CODE
}
