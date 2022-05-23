const elemUtil = require("../utility/elementUtil");
class Geolocation
{
    get geolocationLink()
    {
        return $("//li[23]/a");
    }

    get whereAmILocator()
    {
        return $("//button[contains(text(),'Where')]");
    }

    get latitudeLocator()
    {
        return $("#lat-value");
    }

    get longitudeLocator()
    {
        return $("#long-value");
    }

    async geolocationFunc()
    {
        await elemUtil.doScrollIntoView(this.geolocationLink);
        await elemUtil.doClick(this.geolocationLink);
        await elemUtil.doClick(this.whereAmILocator); 
    }

}
module.exports = new Geolocation();