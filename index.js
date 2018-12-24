casparcg = {
		elements: {},
		init: (timeline) => {
			casparcg.stop = () => {
				timeline.gotoAndPlay('outro');
				log("Stopping");
			};
			casparcg.play = () => {
				timeline.gotoAndPlay(0);
				log("Playing");
			};
			casparcg.next = () => {
				timeline.play();
				log("Next");
			};
		},
		register: (element) => {
			log("Register " + element.name);
			casparcg.elements[element.name] = element;
		},
		updateText: (elementName, text) => {
			log("Updating: " + elementName+":"+text);
			(casparcg.elements[elementName] || {}).text = text;
		},
		stop: () => {},
		play: () => {},
		next: () => {},
		
}

  var logList = document.createElement('ul');
	logList.style.cssText = "position: absolute; top: 0px; background-color: rgba(255,255,255,0.5)"; 
	
	
	
	document.addEventListener("DOMContentLoaded", function(){
		document.body.appendChild(logList);
	});


function log(s) {
    console.log(s)
    const li = document.createElement('li');
    li.innerText = s;
    logList.appendChild(li);
  }
  
  log(window.location)
  log('Chrome: ' + window.navigator.userAgent.match(/Chrome\/([^ ]+)/)[1])
  log('window.caspar: ' + !!window.caspar)


update = (templateData) => {
	if(typeof(templateData) === "string"){
		var json = {};
		saved = saved.replace(/^(<templateData>|<componentData>|<data>)|(<\/templateData>|<\/componentData>|<\/data>)$/ig, );
		try {
			templateData = JSON.parse(decodeURI(saved));
		} catch (e) {console.log(e);}
	}
	templateData = templateData || {};
	log(templateData);
	
	for (var key in templateData) {
		casparcg.updateText(key, templateData[key]);
	}
}

play = () => {
	casparcg.play();
}

stop = () => {
	casparcg.stop();
}

next = () => {
	casparcg.next();
}

 window.onerror = function(msg) {
    log('error ' + msg);    
  }





