import $ from 'jquery';
import Computer from "../models/computer";

class ComputerDrawer {
    constructor() {
    }

    static addObjectToList(computer, listDiv) {
        listDiv.innerHTML += `
<div class="row">
    <div class="col">
        <input class="form-control" 
               id="${computer.id}quantityCores" 
               required readonly
               type="number" 
               value="${computer.quantityCores}"/>
    </div>
    <div class="col">
         <input class="form-control" 
               id="${computer.id}processorType" 
               required readonly
               type="text" 
               value="${computer.processorType}"/>
    </div>
    <div class="col">
        <input 
            class="form-control" 
            id="${computer.id}frequency" 
            required readonly 
            type="number" 
            value="${computer.frequency}"/>
    </div>
    <div class="col">
        <input 
            class="form-control" 
            id="${computer.id}availabilityHyperThreading" 
            ${"checked" ? computer.availabilityHyperThreading : ""} 
            required disabled
            type="checkbox"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}architectureBitDepth" 
               required readonly 
               type="text"
               value="${computer.architectureBitDepth}"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}manufacturer" 
               required readonly 
               type="text" 
               value="${computer.manufacturer}"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}sizeBiteRAM" 
               required readonly
               type="number" 
               value="${computer.sizeBiteRAM}"/>
    </div>
    <div class="col">
        <input class="btn btn-primary" 
               id="${computer.id}updateButton" 
               required readonly
               type="button" 
               value="change">
    </div>
    <div class="col">           
        <input class="btn btn-bad" 
               id="${computer.id}deleteButton" 
               required readonly
               type="button" 
               value="delete">
    </div>
    <div class="col">           
        <input class="btn btn-warning" 
               id="${computer.id}editButton" 
               required readonly
               type="button" 
               value="edit"
               readonly>
    </div>
</div>
        `;
    }

    static changeEditMode(id) {
        for (let iter of Computer) {
            let computerElement = $(`${id}${iter}`)[0];
            computerElement.readOnly = !computerElement.readOnly();
        }
    }
}

export default ComputerDrawer;