
const elemUtil = require("../utility/elementUtil");
const data1 = require("../testData/addRemoveElementData");
// const fs = require ("fs");
// let credentials = JSON.parse(fs.readFileSync("testData/demo.json"))

class AddRemoveElements
{
    // get addRemoveElementsLink()
    // {
    //     return $("//li[2]//a");
    // }
    // get addElementButton()
    // {
    //     return $("//button[text()='Add Element']");
    // }
    // get removeElementButton()
    // {
    //     return $("//button[text()='Delete']");
    // }
    async addElementFunc()
    {
        await elemUtil.doClick(await $(data1.addRemoveElementsLink));
        await elemUtil.doClick(await $(data1.addElementButton));
    }
    async removeElementFunc()
    {
        await elemUtil.doClick(await $(data1.removeElementButton));
    }
}
module.exports = new AddRemoveElements();