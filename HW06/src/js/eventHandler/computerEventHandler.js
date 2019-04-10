import $ from 'jquery';
import ComputerDrawer from "../drawer/computerDrawer";

export default (controller) => {
    $("#submitCreate")[0].addEventListener(
        "click", controller.create
    );

    window.addEventListener(
        'load', () => {
            ComputerDrawer.addObjectToList()
        }
    )
};