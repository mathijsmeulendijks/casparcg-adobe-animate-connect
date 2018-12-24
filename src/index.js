import logger from './logger';
import casparcg from "./casparcg"
import registerGlobals from "./registerGlobals"

registerGlobals(casparcg);

logger.log(window.location)
logger.log('Chrome: ' + window.navigator.userAgent.match(/Chrome\/([^ ]+)/)[1])
logger.log('window.caspar: ' + !!window.caspar);






