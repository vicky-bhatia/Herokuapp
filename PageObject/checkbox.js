const elemUtil = require("../utility/elementUtil");
class Checkbox
{
    get checkboxLink()
    {
        return $("//li[6]/a");
    }

    get selectCheckbox1()
    {
        return $("//form[@id='checkboxes']/input[1]");
    }

    get selectCheckbox2()
    {
        return $("//form[@id='checkboxes']/input[2]");
    }

    async checkboxFunc()
    {
        await elemUtil.doClick(this.checkboxLink);
        await elemUtil.doClick(this.selectCheckbox1);
       // await elemUtil.doClick(this.selectCheckbox2);
    }
}
module.exports = new Checkbox();