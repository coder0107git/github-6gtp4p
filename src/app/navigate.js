(function(){
    const pushState = window.history.pushState;
    
    window.history.pushState = function() {
        document.dispatchEvent(new CustomEvent("pushstate", {bubbles: true}));
        
        return pushState.apply(window.history, arguments);
    };
})();

const events = ["hashchange", "popstate", "pushstate"];
const getCurrentURL = () => setTimeout(
    () => alert(location.toString()), 
    0
);

getCurrentURL();

for(const event of events) {
	window.addEventListener(event, getCurrentURL);
}