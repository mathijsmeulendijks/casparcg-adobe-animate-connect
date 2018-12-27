import logger from "./logger";

class casparcg {
    constructor(){
        this.timeline = null;
        this.elements = {};
        this.onRegister = null;
    }

    // Init is called by the animate project on the first frame
    init(timeline){
        this.timeline = timeline;

        this.stop = () => {
            this.timeline.gotoAndPlay('outro');
            logger.log("Stopping");
        };
        this.play = () => {
            this.timeline.gotoAndPlay(1);
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
        if(this.onRegister){
            this.onRegister(element);
        }
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
