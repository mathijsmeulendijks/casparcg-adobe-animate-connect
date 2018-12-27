import logger from "./logger";


class UpdateProcessor {

    constructor(casparCG){
        this.registered = this.registered.bind(this);
        this.casparCG = casparCG;
        this.unprocessed = {};
        this.casparCG.onRegister = this.registered;
    }

    processDebug(debug){
        logger.setDebugWindow(debug);
    }

    processTemplateData(templateData){
        if (typeof (templateData) === "string") {
            try {
                templateData = JSON.parse(decodeURI(templateData));
            } catch (e) {
                logger.log("Error decrypting JSON:" + e);
                logger.log("DATA:");
                logger.log(templateData);
                return {};
            }
        }
        return templateData || {};
    }

    processSet(element, set){
        if(Array.isArray(set)){
            for (let setKey in set) {
                this.processSetItem(element, set[setKey]);
            }
        }else if(typeof(set) === "string"){
            this.processSetItem(element, {
                property: "text",
                value: set
            })
        }else{
            this.processSetItem(element, set)
        }
    }

    processSetItem(element, setItem){
        element[setItem.property] = setItem.value;
    }

    processInvoke(element, invoke){
        if(Array.isArray(invoke)){
            for (let invokeKey in invoke) {
                this.processInvokeItem(element, invoke[invokeKey]);
            }
        }else{
            this.processInvokeItem(element, invoke);
        }
    }

    processInvokeItem(element, invokeItem){
        element[invokeItem.function].apply(element, invokeItem.args);
    }

    registered(element){
        if(this.unprocessed[element.name]){
            let data = {};
            for(var key in this.unprocessed[element.name]){
                data[element.name] = this.unprocessed[element.name][key];
                this.process(data)
            }
            delete this.unprocessed[element.name];
        }
    }

    process(templateData) {
        templateData = this.processTemplateData(templateData);

        for (let key in templateData) {
            if (key === "debug") {
                this.processDebug(templateData[key]);
                continue;
            }

            var element = this.casparCG.getElement(key);
            if(!element){
                logger.log('Element not found! Name:' + key);
                if(!this.unprocessed[key]){
                    this.unprocessed[key] = [];
                }
                this.unprocessed[key].push(templateData[key]);
                continue;
            }

            if(typeof(templateData[key]) === "string"){
                this.casparCG.updateText(element, templateData[key]);
            }else{
                if(templateData[key].set){
                    let set = templateData[key].set;
                    this.processSet(element, set);
                }
                if(templateData[key].invoke){
                    let invoke = templateData[key].invoke;
                    this.processInvoke(element, invoke);
                }
            }
        }
    }

};


export default UpdateProcessor;
