const logList = document.createElement('ul');

document.addEventListener("DOMContentLoaded", function(){
    document.body.appendChild(logList);
});

const logger = new class Logger{
    constructor(logList){
        this.logList = logList;
        this.logList.style.cssText = "display: none;";
    }

    setDebugWindow(visible){
        if(visible){
            this.logList.style.cssText = "display: block; position: absolute; top: 0px; background-color: rgba(255,255,255,0.5)";
        }else{
            this.logList.style.cssText = "display: none;";
        }
    }

    log(s)
    {
        console.log(s)
        const li = document.createElement('li');
        li.innerText = s;
        logList.appendChild(li);
    }
}(logList)



export default logger;
