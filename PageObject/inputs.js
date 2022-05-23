const elemUtil = require("../utility/elementUtil");
class Inputs
{
    get inputLink()
    {
        return $("//li[27]//a");
    }
    get inputboxLocator()
    {
        return $("//input[@type='number']");
    }

    async inputsFunc()
    {
        await elemUtil.doScrollIntoView(this.inputLink);
        await elemUtil.doClick(this.inputLink);
        //await browser.pause(3000);
        await elemUtil.doSetValue(this.inputboxLocator,"1507");
    }
}
module.exports = new Inputs();