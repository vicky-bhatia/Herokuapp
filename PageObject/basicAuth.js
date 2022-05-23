
const elemUtil = require("../utility/elementUtil");
class BasicAuth
{
    get basicAuthLink()
    {
        return $("//li[3]/a");
    }

    async basicAuthFunc()
    {
        await elemUtil.doClick(this.basicAuthLink);
        await browser.setValue("hello");
    }
}
module.exports = new BasicAuth();