import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    isCreate = false;
    showEstimate = false;
    estimate = null;
    quoteReadOnly = true

    handleClick(event) {
        this.isCreate = true;
    }

    handleShowEstimate(event) {
        this.isCreate = false;
        this.showEstimate = true;
        this.estimate = event.target.retrieveEstimate();
    }

}
