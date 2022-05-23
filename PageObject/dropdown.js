const elemUtil = require("../utility/elementUtil");
class Dropdown
{
    get dropdownLink()
    {
        return $("//li[11]//a");
    }

    get dropdownBoxLocator()
    {
        return $("//select[@id='dropdown']");
    }

    get option2Locator()
    {
        return $("//option[@value='2']");
    }
    async dropdownFunc()
    {
        await elemUtil.doClick(this.dropdownLink);
        await elemUtil.doSelectByVisibleText(this.dropdownBoxLocator,"Option 2")
    }
}
module.exports = new Dropdown();