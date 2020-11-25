var djiSearch = require('../testAssets/djiSearch')

var djiFooterLinks = require('../testAssets/djiFooterLinks')

var djiProducts = require('../testAssets/djiProducts')

var djiProductVersion = require('../testAssets/djiProductVersion')

var djiSeeMore = require('../testAssets/djiSeeMore')

var djiUserShippingData = require('../testAssets/djiUserShippingData')

var seeAll = function(browser, djiSeeMore) {
    browser
    dji
        .useXpath()
        .waitForElementPresent('@mainPageDialogMessage')
        .click('@closePrivacyMessage')
        .waitForElementPresent(`(//a[@class="Header__text-link___18R4E"])[${djiSeeMore.more}]`)
        .pause(2000)
        .click(`(//a[@class="Header__text-link___18R4E"])[${djiSeeMore.more}]`)
        .waitForElementVisible('(//h2[@class="Header__section-title___c12h9"])[1]')
        .pause(500)
        .verify.containsText('(//h2[@class="Header__section-title___c12h9"])[1]', `${djiSeeMore.res}`)
        .click('@logo')

}
var footerLinksContains = function(browser, djiFooterLinks) {
    browser

        .moveToElement('@pageFooter', 20, 20)
        .waitForElementPresent(`(//ul/li/a[@target="_blank"])[${djiFooterLinks.link}]`)
        .pause(1000)
        .verify.containsText(`(//ul/li/a[@target="_blank"])[${djiFooterLinks.link}]`, `${djiFooterLinks.Section}`)

}
var dji = {}

module.exports = {
    beforeEach: browser => {
        dji = browser.page.djiPage()
        dji.resizeWindow(1920, 1080)

        dji
            .navigate()
            // .expect.urlContains('store.dji.com')

    },
    after: browser => {
        browser.end()
    },
    // //navigate the icons on from the roof menu and expect to be redirected to the right page
    // 'Verify the user is able to navigate through icons on the top main page': browser => {
    //     dji
    //         .useXpath()
    //         .waitForElementPresent('//main[@class="_1SoeU"]')
    //         .click('//i[@class="_3hG3b _3c0Qz"]')
    //         .useXpath()
    //         .waitForElementPresent('@mainPageDialogMessage')
    //         .click('@closePrivacyMessage')
    //     dji
    //     console.log(djiProducts.length)
    //     for (let i = 0, j = 1; i < djiProducts.length, j < 10; i++, j++) {
    //         dji
    //             .useXpath()
    //             .waitForElementPresent(`(//div[@class="style__title____iugB"])[${j}]`)
    //             .click(`(//div[@class="style__title____iugB"])[${j}]`)
    //             .waitForElementVisible('//div[@class="style__content___3PFJP"]')
    //             .verify.containsText('//div[@class="style__content___3PFJP"]', djiProducts[i])
    //             .useCss()
    //             .click('@logo')

    //     }
    // },
    // //Navigate to each of the most popular products ('Mavic', 'Osmo', 'Phantom','Ronin', ‘RoboMaster', ‘DJI FPV', ‘Inspire') 
    // //and click on the first picture on the left (news version of the product that the company sells)
    // //expect to be redirected to the product individual page (with exception of service page)
    // 'Verify after open products the user is avaible to navigate to the news product version': browser => {
    //     dji

    //     console.log(djiProducts.length)
    //     for (let i = 0, j = 1; i < djiProductVersion.length, j < 7; i++, j++) {
    //         dji
    //             .useXpath()
    //             .waitForElementPresent(`(//div[@class="style__title____iugB"])[${j}]`)
    //             .click(`(//div[@class="style__title____iugB"])[${j}]`)
    //             .pause(1000)
    //             .click('@closePrivacyMessage')
    //             .waitForElementVisible('@djiMini2', 500)
    //             .pause(1000)
    //             .click('@djiMini2')
    //             .waitForElementVisible('@prductVersionName')
    //             .verify.containsText('@prductVersionName', djiProductVersion[i])
    //             .useCss()
    //             .click('@logo')
    //     }
    // },
    // 'Verify the search feature match the user criteria for the company products': browser => {
    //     dji
    //     console.log(djiSearch.length)
    //     for (let i = 0; i < djiSearch.length; i++) {
    //         dji

    //             .waitForElementPresent('@searchProductBox')
    //             .setValue('@searchProductBox', djiSearch[i].search)
    //             .useXpath()
    //             .click('//button[@type="submit"]')
    //             .useCss()
    //             .waitForElementVisible('@searchResults')
    //             .pause(1000)
    //             .verify.containsText('@searchResultContainer', djiSearch[i].result)
    //             .pause(1000)
    //             .clearValue('@searchProductBox')

    //     }
    // },

    // 'Verify the "more" links on the maind page redirect the user to the rithg site ': browser => {
    //     // dji
    //     //     .useXpath()
    //     //     .waitForElementPresent('//main[@class="_1SoeU"]')
    //     //     .click('//i[@class="_3hG3b _3c0Qz"]')
    //     //     .pause(1000)
    //     dji
    //     djiSeeMore.forEach(test => {
    //         seeAll(dji, test)
    //         console.log(test.more)
    //         console.log(test.res)
    //     })
    // },
    // 'Verify footer has 25 links with name tha match the companies footer list ': browser => {
    //     dji
    //     // .useXpath()
    //     // .waitForElementPresent('//main[@class="_1SoeU"]')
    //     // .click('//i[@class="_3hG3b _3c0Qz"]')
    //     // .pause(1000)
    //         .useXpath()
    //         .waitForElementPresent("@mainPageDialogMessage")
    //         .click('@closePrivacyMessage')
    //     dji
    //     djiFooterLinks.forEach(test => {
    //         footerLinksContains(dji, test)
    //         console.log(test.link)
    //         console.log(test.Section)
    //     })
    // },

    //user jurney for mavic mini2
    'User journey to buy Dji Mini 2 - Drone': browser => {
        dji
            .useXpath()
            .waitForElementPresent('//main[@class="_1SoeU"]')
            .click('//i[@class="_3hG3b _3c0Qz"]')
            .pause(1000)
            .click('@closePrivacyMessage')
        dji
            .selectNewsDroneVersionAndCombo()
            //dialog message 
            .closeDialogMessage()
            .addDjiaCareOneYear()
            //check user get messege add Successfully
            .waitForElementVisible("@comfirmationAddCart")
            .verify.containsText('@comfirmationAddCart', "Added to Cart Successfully!")
        dji
            .checkOutCart()
            .setShippingAddress(djiUserShippingData.firstName, djiUserShippingData.lastName,
                djiUserShippingData.address, djiUserShippingData.address2,
                djiUserShippingData.city, djiUserShippingData.zipCode, djiUserShippingData.phone, )
            .verify.containsText('@requiredCreditCard', "Required")
    }
}