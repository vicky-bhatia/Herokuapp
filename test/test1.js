const addRemElem = require("../PageObject/addRemoveElements");//
const data1 = require("../testData/addRemoveElementData");
const basicAuth = require("../PageObject/basicAuth");//
const checkbox = require("../PageObject/checkbox");
const contextMenu = require("../PageObject/contextMenu");//
const inputs = require("../PageObject/inputs");
const dragAndDrop = require ("../PageObject/dragAndDrop")
const dropdown = require ("../PageObject/dropdown")
const frames = require("../PageObject/frames")
const geolocation = require("../PageObject/geolocation")
const elemUtil = require("../utility/elementUtil");
var expectChai = require('chai').expect;
describe("verifying herokuapp functionality", async () =>{

it("Verifying add/remove elements", async ()=>
{
    await browser.url("/");
    await addRemElem.addElementFunc();
    await expectChai(await elemUtil.doIsDisplayed(await $(data1.removeElementButton))).to.equal(true);
    await browser.pause(3000);
    await addRemElem.removeElementFunc();

  //  await expectChai(await elemUtil.doIsDisplayed(await addRemElem.removeElementButton)).to.equal(false);
   // await expectChai(await (await addRemElem.removeElementButton).isEnabled()).to.equal(false);
    await browser.pause(5000);
})

xit("Verifying Basic Auth functionality", async () =>
{
    await browser.url("/");
    await basicAuth.basicAuthFunc();
    browser.pause(3000);
})

xit("Verifying Checkbox functionality", async () =>
{
    await browser.url("/");
    await checkbox.checkboxFunc();
    await expectChai(await elemUtil.doIsSelected(await checkbox.selectCheckbox1)).to.equal(true);
    await expectChai(await elemUtil.doIsSelected(await checkbox.selectCheckbox2)).to.equal(true);
    await browser.pause(3000);
})

xit("Verifying Context Menu functionality", async () =>
{
    await browser.url("/");
    await contextMenu.contextMenuFunc();
    // await expectChai(await elemUtil.doIsSelected(await checkbox.selectCheckbox1)).to.equal(true);
    // await expectChai(await elemUtil.doIsSelected(await checkbox.selectCheckbox2)).to.equal(true);
    await browser.pause(3000);
})

xit("Verifying Inputs functionality", async () =>//done
{
    await browser.url("/");
    await inputs.inputsFunc();
    await expectChai("1507").to.equal("1507");
    await browser.pause(3000);
})

xit("Verifying Drag and drop functionality",async ()=>// not working
{
    await browser.url("/");
    await dragAndDrop.dragAndDropFunc();
    await expectChai(await elemUtil.doGetText(await dragAndDrop.ElementALocator)).to.equal("B");
    await browser.pause(3000);
})

xit("Verifying dropdown functionality",async ()=>{//done
    await browser.url("/");
    await dropdown.dropdownFunc();
    await expectChai(await elemUtil.doIsSelected(await dropdown.option2Locator)).to.equal(true);
    await browser.pause(3000);
})

xit("Verifying Frames functionality",async ()=>{//not done
    await browser.url("/");
    await frames.iFramesFunc();
    await expectChai(await elemUtil.doGetText(frames.iFrameTextBoxLocator)).to.equal("Your content goes here.");
    await frames.nestedFramesFunc();
    await browser.pause(3000);
})

xit("Verifying Geolocation functionality",async () => { // done
    await browser.url("/");
    await geolocation.geolocationFunc();
    // const input = await elemUtil.doGetText(geolocation.latitudeLocator);
    // console.log(input);
    //await expect(input).toHaveValueContaining('28');
    await expectChai(await elemUtil.doGetText(geolocation.latitudeLocator)).to.include("28.");
    await expectChai(await elemUtil.doGetText(geolocation.longitudeLocator)).to.include("77.");
    await browser.pause(3000);
})


})