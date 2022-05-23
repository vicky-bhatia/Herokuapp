const elemUtil = require("../utility/elementUtil");
class Frames
{
    get framesLink()
    {
        return $("//li[22]/a");
    }

    get nestedFramesLink()
    {
        return $("//li[1]/a")
    }

    get leftFrame()
    {
        return $("//frame[@src='/frame_left']");
    }

    get middleFrame()
    {
        return $("//frame[@src='/frame_middle']");
    }

    get rightFrame()
    {
        return $("//frame[@src='/frame_right']");
    }

    get bottomFrame()
    {
        return $("//frame[@src='/frame_bottom']");
    }

    get iFrameLink()
    {
        return $("//li[2]/a");
    }
    
    get iFrameLocator()
    {
        return $("#mce_0_ifr");
    }

    get iFrameTextBoxLocator()
    {
        return $("#tinymce");
    }

    async iFramesFunc()
    {
        await elemUtil.doScrollIntoView(this.framesLink);
        await elemUtil.doClick(this.framesLink);
        await elemUtil.doClick(this.iFrameLink);
        await browser.switchToFrame(await this.iFrameLocator);
        // await elemUtil.doGetText(this.iFrameTextBoxLocator);
    }

    async nestedFramesFunc()
    {
        await browser.url("/frames");
        await elemUtil.doClick(this.nestedFramesLink);
        await browser.switchToFrame(await this.leftFrame);
      //  await elemUtil.doGetText($("//html//body[contains(text(),'LEFT')]"));

    }

}
module.exports = new Frames();