import { LightningElement, api } from 'lwc';
import { constants } from 'c/data';

export default class Create extends LightningElement { 
    constants = constants;
    _readOnly;

    @api idToDelete;
    @api data;
    @api
    get readOnly() {
        return this._readOnly;
    };

    set readOnly(value) {
        this._readOnly = value
    }

    get quoteHasMaterials() {
        return this.data.materials.length;
    }

    get quoteHasLabor() {
        return this.data.labor.length;
    }

    get quoteHasInclusive() {
        return this.data.inclusive.length;
    }

    get grandTotal() {
        const lineItems = Object.values(this.data).flat();
        let totalQuoteCost = 0;

        if (lineItems.length) {
            lineItems.forEach((item, i) => {
                totalQuoteCost += item.totalCost;
            })
        }

        this.isButtonDisabled = !totalQuoteCost;
        return totalQuoteCost;
    }

    get showTotalCost() {
        const { materials, labor, inclusive } = this.data;
        return materials.length || labor.length || inclusive.length;
    }

    get computeClasses() {
        return this.readOnly ? 'slds-size_1-of-5' : 'slds-size_1-of-6'
    }

    get showEdit() {
        return !this.readOnly;
    }

    handleDelete(event) {
        this.idToDelete = event.target.dataset.id;
        this.dispatchEvent(new CustomEvent('delete'))
    }
}