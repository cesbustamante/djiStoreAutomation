module.exports = {
    before: browser => {
        browser.url('https://store.dji.com/')

    },
    'Loging Test': browser => {
        browser
            .useXpath()
            .click('(//a[@class="MenuItem__nav-link___31BR7 MenuItem__nav-icon-link___1bk7H"])[1]')
            .pause()
    }
}