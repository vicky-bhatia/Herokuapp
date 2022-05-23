const elemUtil = require("../utility/elementUtil");
class ContextMenu
{
    get contextMenuLink()
    {
        return $("//li[7]/a");
    }

    get boxLocator()
    {
        return $("//div[@id='hot-spot']");
    }

    async contextMenuFunc()
    {
        await elemUtil.doClick(this.contextMenuLink);
        await elemUtil.doRightClick(this.boxLocator);
  
    }

}
module.exports = new ContextMenu();