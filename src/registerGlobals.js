import logger from "./logger";

function registerGlobals(casparCG){
    window.update = (templateData) => {
        if(typeof(templateData) === "string"){
            var json = {};
            try {
                templateData = JSON.parse(decodeURI(templateData));
            } catch (e) {console.log(e);}
        }
        templateData = templateData || {};

        for (var key in templateData) {
            if(key === "debug"){
                logger.setDebugWindow(templateData[key]);
                continue;
            }
            casparCG.updateText(key, templateData[key]);
        }
    }

    window.play = () => {
        casparCG.play();
    }

    window.stop = () => {
        casparCG.stop();
    }

    window.next = () => {
        casparCG.next();
    }

    window.casparcg = casparCG;
}

export default registerGlobals;
