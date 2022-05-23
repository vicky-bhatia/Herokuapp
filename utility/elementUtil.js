class ElementUtil
{
    async doClick(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.click();
    }

    async doRightClick(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.click({ button: 'right' });
    }

    async doDoubleClick(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.doubleClick();
    }

    async doSetValue(webelement,value)
    {
        await webelement.waitForDisplayed();
        await webelement.setValue(value);
    }
    
    async doGetText(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.getText();
    }

    async doGetPageTitle()
    {
        return await browser.getTitle();
    }

    async doIsDisplayed(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isDisplayed();
    }

    async doIsSelected(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isSelected();
    }

    async doIsClickable(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isClickable();
    }

    async doIsEnabled(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isEnabled();
    }

    async doIsExisting(webelement)
    {
        await webelement.waitForDisplayed();
        return await webelement.isExisting();
    }
    
    async doScrollIntoView(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.scrollIntoView();
    }

    async doMoveTo(webelement)
    {
        await webelement.waitForDisplayed();
        await webelement.moveTo();
    }

    async doDragAndDrop(webelement1,webelement2)
    {
        await webelement1.waitForDisplayed();
        await webelement2.waitForDisplayed();
        await webelement1.dragAndDrop(webelement2);
    }

    async doSelectByVisibleText(webelement,value)
    {
        await webelement.waitForDisplayed();
        await webelement.selectByVisibleText(value);
    }
}
module.exports = new ElementUtil();