import $ from 'jquery';

export default (controller) => {
    $("#submitCreate")[0].addEventListener(
        "click", controller.create
    );
};