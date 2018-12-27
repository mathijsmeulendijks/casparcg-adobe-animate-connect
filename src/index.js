import logger from './logger';
import casparCG from "./casparcg"
import registerGlobals from "./registerGlobals"


registerGlobals(casparCG);

logger.log(window.location)
logger.log('Chrome: ' + window.navigator.userAgent.match(/Chrome\/([^ ]+)/)[1])
logger.log('window.caspar: ' + !!window.caspar);








