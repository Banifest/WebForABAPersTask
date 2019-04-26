import $ from 'jquery';
import ComputerDrawer from "../drawer/computerDrawer";
import Computer from "../models/computer";

export default async (controller) => {

    const computerDrawer = new ComputerDrawer();
    window.addEventListener(
        'load', () => {
            $("#submitCreate")[0].addEventListener(
                "click", () => {
                    controller.create((result) => {
                        ComputerDrawer.addObjectToList(new Computer(result.data), $('#computersContainer')[0]);
                        $(`#${result.data.id}editButton`)[0].addEventListener(
                            'click', (event, id = result.data.id) => {
                                computerDrawer.changeEditMode(id);
                            }
                        );
                        $(`#${result.data.id}updateButton`)[0].addEventListener(
                            'click', (event, id = result.data.id) => {
                                controller.update(id);
                                computerDrawer.changeEditMode(id);
                            }
                        );
                        $(`#${result.data.id}deleteButton`)[0].addEventListener(
                            'click', (event, id = result.data.id) => {
                                controller.delete(id);
                                ComputerDrawer.deleteObjectFromList(id);
                            }
                        );
                    });
                }
            );

            controller.readAll((result) => {

                for (let iter of result.data) {
                    ComputerDrawer.addObjectToList(new Computer(iter), $('#computersContainer')[0]);
                    $(`#${iter.id}editButton`)[0].addEventListener(
                        'click', (event, id = iter.id) => {
                            computerDrawer.changeEditMode(id);
                        }
                    );
                    $(`#${iter.id}updateButton`)[0].addEventListener(
                        'click', (event, id = iter.id) => {
                            controller.update(id);
                            computerDrawer.changeEditMode(id);
                        }
                    );
                    $(`#${iter.id}deleteButton`)[0].addEventListener(
                        'click', (event, id = iter.id) => {
                            controller.delete(id);
                            ComputerDrawer.deleteObjectFromList(id);
                        }
                    );
                }
            });
        }
    );


};