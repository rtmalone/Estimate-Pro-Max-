import { LightningElement, api } from 'lwc';

/**
 * https://www.lightningdesignsystem.com/components/illustration/
 * 
 * Displays an SVG illustration with optional related text.
 */
export default class Illustration extends LightningElement {

    @api
    title;

    @api
    body;

    /**
     * Required
     */
    @api
    type;

    /**
     * small, large
     */
    @api
    size = 'small';

    get classes () {
        return `slds-illustration slds-illustration_${this.size}`;
    }
    
}