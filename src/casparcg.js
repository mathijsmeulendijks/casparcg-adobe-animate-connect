import logger from "./logger";

class casparcg {
    constructor(){
        this.timeline = null;
        this.elements = {};
    }

    // Init is called by the animate project on the first frame
    init(timeline){
        this.timeline = timeline;

        this.stop = () => {
            this.timeline.gotoAndPlay('outro');
            logger.log("Stopping");
        };
        this.play = () => {
            this.timeline.gotoAndPlay(0);
            logger.log("Playing");
        };
        this.next = () => {
            this.timeline.play();
            logger.log("Next");
        };
    }

    // Register controllable elements from the animate project
    register(element){
        logger.log("Register " + element.name);
        this.elements[element.name] = element;
    }

    updateText(element, text){
        logger.log("Updating: " + element.name+":"+text);
        (element || {}).text = text;
    }

    getElement(name){
        return this.elements[name] || null;
    }
    // start, stop, next placeholders
    stop(){}
    play(){}
    next(){}

}

// Export module
export default new casparcg();
