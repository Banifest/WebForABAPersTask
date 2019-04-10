import $ from 'jquery';
import ComputerDrawer from "../drawer/computerDrawer";
import Computer from "../models/computer";

export default (controller) => {
    $("#submitCreate")[0].addEventListener(
        "click", controller.create
    );

    window.addEventListener(
        'load', () => {
            controller.readAll((result) => {
                for (let iter of result.data) {
                    ComputerDrawer.addObjectToList(new Computer(iter), $('#computersContainer')[0]);
                    $(`#${iter.id}editButton`)[0].addEventListener(
                        'click', () => {
                            ComputerDrawer.changeEditMode(iter.id);
                        }
                    );
                    $(`#${iter.id}updateButton`)[0].addEventListener(
                        'click', () => {
                        }
                    );
                    $(`#${iter.id}deleteButton`)[0].addEventListener(
                        'click', () => {
                        }
                    );
                }
            });


            //
            // //add events for buttons

        }
    );


};