import logger from "./logger";
import UpdateProcessor from "./updateProcessor";

function registerGlobals(casparCG){
    const updateProcessor = new UpdateProcessor(casparCG);
    window.update = (templateData) => {
        updateProcessor.process(templateData)
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

    window.setDebug = (debug) => {
        logger.setDebugWindow(debug);
    }

    window.casparcg = casparCG;
}

export default registerGlobals;
