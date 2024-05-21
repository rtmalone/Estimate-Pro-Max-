import { LightningElement, track, api } from 'lwc';
import {material, labor, inclusive, constants} from 'c/data';

export default class Create extends LightningElement {
    constants = constants;
    activeSection = this.constants.MATERIAL_SECTION_NAME;
    materialCosts;
    laborCosts;
    inclusiveCosts
    isButtonDisabled = true;

    @track quote = {
        materials: [],
        labor: [],
        inclusive: []
    };

    connectedCallback() {
        this.materialCosts = material;
        this.laborCosts = labor;
        this.inclusiveCosts = inclusive;
    }

    columns = [
        { label: 'Item', fieldName: 'name' },
        { label: 'Cost', fieldName: 'cost', type: 'currency' },
        { label: 'Unit', fieldName: 'unit' },
        {
            label: 'Add to Estimate',
            fieldName: 'id',
            type: 'button-icon',
            typeAttributes: {
                name: 'Add to estimate',
                iconName: 'utility:add',
                // variant: 'bare',
                size: 'x-small'

            }
        }
    ];

    @api retrieveEstimate() {
        return this.quote;
    }

    /**
     * Handler Methods
     */
    handleCreate(event) {
        this.dispatchEvent(
            new CustomEvent('showestimate')
        )
    }

    handleRowAction(event) {
        const { row } = event.detail;
        this.isButtonDisabled = false;
        this.addToQuote(row);
    }

    handleDelete(event) {
        this.removeFromQuote(event.target.idToDelete);
    }

    /**
     *  Logic Methods
     */

    addToQuote(row) {
        if (row.category === 'material') {
            this.quote.materials = this.addLineItem(row, this.quote.materials);
        } else if (row.category === 'labor') {
            this.quote.labor = this.addLineItem(row, this.quote.labor);
        } else if (row.category === 'inclusive') {
            this.quote.inclusive = this.addLineItem(row, this.quote.inclusive);
        }
    }

    removeFromQuote(id) {
        if (id.includes('m')) {
            this.quote.materials = this.removeLineItem(id, this.quote.materials);
        } else if (id.includes('l')) {
            this.quote.labor = this.removeLineItem(id, this.quote.labor);
        } else if (id.includes('i')) {
            this.quote.inclusive = this.removeLineItem(id, this.quote.inclusive);
        }
    }

    addLineItem(row, lineItems) {
        const lItemIndex = lineItems.findIndex(item => item?.id === row?.id);

        if (lItemIndex !== -1) {
            const existingItem = lineItems[lItemIndex];

            existingItem.quantity++;
            existingItem.totalCost = (existingItem.quantity * row.cost);
            lineItems.splice(lItemIndex, 1, existingItem);
        } else {
            lineItems.push({ ...row, quantity: 1, totalCost: row.cost });
        }

        return lineItems;
    }

    removeLineItem(id, lineItems) {
        const lItemIndex = lineItems.findIndex(item => item?.id === id);

        if (lItemIndex !== -1) {
            const existingItem = lineItems[lItemIndex];

            existingItem.quantity--;
            existingItem.totalCost = (existingItem.quantity * existingItem.cost);

            if (existingItem.quantity > 0) {
                lineItems.splice(lItemIndex, 1, existingItem);
            } else {
                lineItems.splice(lItemIndex, 1)
            }
        }

        return lineItems;
    }
}