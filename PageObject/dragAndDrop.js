const elemUtil = require("../utility/elementUtil");
class DragAndDrop
{
    get dragAndDropLink()
    {
        return $("//li[10]//a");
    }

    get ElementALocator()
    {
        return $("#column-a");
    }

    get ElementBLocator()
    {
        return $("#column-b");
    }

    async dragAndDropFunc()
    {
        await elemUtil.doClick(this.dragAndDropLink);
        await elemUtil.doDragAndDrop(this.ElementALocator,this.ElementBLocator);
    }
    
}
module.exports = new DragAndDrop();