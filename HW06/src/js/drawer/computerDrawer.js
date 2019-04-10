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
               required 
               type="number" 
               value="${computer.quantityCores}"/>
    </div>
    <div class="col">
         <input class="form-control" 
               id="${computer.id}processorType" 
               required type="text" value="${computer.processorType}"/>
    </div>
    <div class="col">
        <input 
            class="form-control" 
            id="${computer.id}frequency" 
            required type="number" 
            value="${computer.frequency}"/>
    </div>
    <div class="col">
        <input 
            class="form-control" 
            id="${computer.id}availabilityHyperThreading" 
            ${"checked" ? computer.availabilityHyperThreading : ""} 
            required type="checkbox"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}architectureBitDepth" 
               required 
               type="text"
               value="${computer.architectureBitDepth}"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}manufacturer" 
               required type="text" 
               value="${computer.manufacturer}"/>
    </div>
    <div class="col">
        <input class="form-control" 
               id="${computer.id}sizeBiteRAM" 
               required type="number" 
               value="${computer.sizeBiteRAM}"/>
    </div>
    <div class="col">
        <input class="btn btn-primary" 
               id="${computer.id}changeButton" 
               required type="button" 
               value="change">
               
        <input class="btn btn-primary" 
               id="${computer.id}deleteButton" 
               required type="button" 
               value="delete">
               
        <input class="btn btn-primary" 
               id="${computer.id}editButton" 
               required type="button" 
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