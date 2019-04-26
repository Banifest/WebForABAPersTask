import eventMapper from './js/eventHandler/computerEventHandler';
import ComputerAPI from "./js/remoteAPI/computerAPI";

(async () => {
    const controllers = {
        computer: new ComputerAPI(),
    };

    eventMapper(controllers.computer)
})();

