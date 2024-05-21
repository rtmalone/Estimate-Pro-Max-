import { LightningElement, api } from 'lwc';

export default class Create extends LightningElement { 
    @api readOnly = false;

    get computeClasses() {
        return this.readOnly ? 'slds-size_1-of-5' : 'slds-size_1-of-6'
    }
}

