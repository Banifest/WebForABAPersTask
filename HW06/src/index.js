import eventMapper from './js/eventHandler/computerEventHandler';
import ComputerAPI from "./js/remoteAPI/computerAPI";


(() => {
    const controllers = {
        computer: new ComputerAPI(),
    };

    eventMapper(controllers.computer)
})();

