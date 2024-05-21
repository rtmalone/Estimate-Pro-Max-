import { LightningElement, api } from 'lwc';
import goingCamping from './images/goingCamping.html';
import maintenance from './images/maintenance.html';
import desert from './images/desert.html';
import openRoad from './images/openRoad.html';
import noAccess from './images/noAccess.html';
import noConnection from './images/noConnection.html';
import notAvailableInLightning from './images/notAvailableInLightning.html';
import pageNotAvailable from './images/pageNotAvailable.html';
import walkthroughNotAvailable from './images/walkthroughNotAvailable.html';
import fishingDeals from './images/fishingDeals.html';
import lakeMountain from './images/lakeMountain.html';
import noEvents from './images/noEvents.html';
import noTask from './images/noTask.html';
import setup from './images/setup.html';
import goneFishing from './images/goneFishing.html';
import noAccess2 from './images/noAccess2.html';
import noContent from './images/noContent.html';
import noPreview from './images/noPreview.html';
import preview from './images/preview.html';
import research from './images/research.html';

// null state
import empty from './images/empty.html';

/**
 * https://www.lightningdesignsystem.com/components/illustration/
 */
const TEMPLATES = {

    /**
     * A car with a bicycle on top, towing a camper
     */
    going_camping: goingCamping,

    /**
     * Trees and mountains in the palm of a hand
     */
    maintenance: maintenance,

    /**
     * A cactus in the foreground with another and a mountain in the back
     */
    desert: desert,

    /**
     * An open road with sparse trees in the foreground and a mountain in the back
     */
    open_road: openRoad,

    /**
     * A locked chest
     */
    no_access: noAccess,

    /**
     * Hot air balloons
     */
    no_connection: noConnection,

    /**
     * A kite with a key and the Salesforce lightning symbol in a thought bubble
     */
    not_available_in_lightning: notAvailableInLightning,

    /**
     * An axe buried in a tree stump
     */
    page_not_available: pageNotAvailable,

    /**
     * A sign with a cancel symbol beside a winding road
     */
    walkthrough_not_available: walkthroughNotAvailable,

    /**
     * A fishing hook and three fish
     */
    fishing_deals: fishingDeals,

    /**
     * A lake and a mountain with trees
     */
    lake_mountain: lakeMountain,

    /**
     * A rainclound above a camping tent
     */
    no_events: noEvents,

    /**
     * A hammock hung between trees
     */
    no_task: noTask,

    /**
     * A compass
     */
    setup: setup,

    /**
     * Two figures on a small boat fishing on a lake
     */
    gone_fishing: goneFishing,

    /**
     * A locked chest with a key in a thought bubble
     */
    no_access_2: noAccess2,

    /**
     * An open chest
     */
    no_content: noContent,

    /**
     * Cracked binoculars
     */
    no_preview: noPreview,

    /**
     * Binoculars showing mountains, trees, and sun
     */
    preview: preview,

    /**
     * A camper van at night with a telescope in the foreground
     */
    research: research
};

/**
 * Conditionally renders an SVG template based on the provided image name.
 */
export default class IllustrationSvg extends LightningElement {

    @api
    type;

    render () {
        if (TEMPLATES[this.type]) {
            return TEMPLATES[this.type];
        }

        return empty;
    }

}