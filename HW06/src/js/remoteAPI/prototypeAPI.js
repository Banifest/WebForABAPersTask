import $ from 'jquery';

const API_LINK = "http://195.50.2.67:2403/";
const OBJECT_LINK = "alexmartyniuk/";

class PrototypeAPI {
    constructor(objectPrototype, apiPrototype, apiLink = API_LINK, objectLink = OBJECT_LINK) {
        this.link = apiLink + objectLink;
        this.apiPrototype = apiPrototype;
        this.objectPrototype = objectPrototype;
        this.objects = {};

        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.read = this.read.bind(this);
    }

    create(data) {
        let APIContext = this;
        $.ajax(this.link, {
                method: "POST",
                contentType: "application/json",
                data: (new this.objectPrototype(data)).read(),
                success: function (resultData, textStatus, jqXHR) {
                    APIContext.objects[resultData.id] = (new APIContext.objectPrototype(data));
                    return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
                }
            }
        );
    }

    update(id, data) {
        let APIContext = this;
        $.ajax(`${this.link}/${id}`, {
                method: "PUT",
                contentType: "application/json",
                data: (new this.objectPrototype(data)).read(),
                success: function (resultData, textStatus, jqXHR) {
                    APIContext.objects[resultData.id] = (new APIContext.objectPrototype(data));
                    return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
                }
            }
        );
    }

    readAll(cb) {
        $.ajax(this.link, {
                method: "GET",
                contentType: "application/json",
                success: function (resultData, textStatus, jqXHR) {
                    cb({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
                }
            }
        );
    }

    read(id) {
        $.ajax(`${this.link}/${id}`, {
                method: "GET",
                contentType: "application/json",
                success: function (resultData, textStatus, jqXHR) {
                    return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
                }
            }
        );
    }

    delete(id) {
        let APIContext = this;
        $.ajax(`${this.link}/${id}`, {
                method: "DELETE",
                contentType: "application/json",
                success: function (resultData, textStatus, jqXHR) {
                    APIContext.objects[resultData.id] = undefined;
                    return ({data: resultData, textStatus: textStatus, jqXHR: jqXHR});
                }
            }
        );
    }
}

export default PrototypeAPI;