var djiProducts = [
        'Mavic', 'Osmo',
        'Phantom', 'Ronin',
        'RoboMaster', 'DJI FPV',
        'Inspire', 'Enterprise',
        'Tello', 'Service'
    ]
    // var nnn = [
    //     'Mavic', 'Osmo',
    //     'Phantom', 'Ronin',
    //     'RoboMaster', 'DJI FPV',
    //     'Inspire', 'Spark',
    //     'Enterprise', 'Components',
    //     'Tello', 'Service',
    // ]
var djiSearch = [{
        search: 'Mavic',
        result: 'Mavic'
    },
    {
        search: 'Service',
        result: 'DJI Care'
    },
    {
        search: 'osmo Pocket',
        result: 'Pocket 2'
    },
    {
        search: 'Tello',
        result: 'Tello'
    },
    {
        search: 'Mavic Air 2',
        result: 'Mavic Air 2'
    },
    {
        search: 'Battery',
        result: 'Battery'
    }
]
var seeMore = [{
        more: 1,
        res: 'Mavic'
    },
    {
        more: 2,
        res: 'Osmo'
    },
    {
        more: 3,
        res: 'Ronin'
    },
    {
        more: 4,
        res: 'Phantom'
    },
    {
        more: 5,
        res: 'Inspire'
    },
    {
        more: 6,
        res: 'Service'
    }
]

var productVersion = [
    'DJI Mini 2', 'DJI Pocket 2',
    'Phantom 4 Pro V2.0', 'DJI RS 2',
    'RoboMaster S1', 'DJI FPV Fly More Combo (Mode 2)',
    'Inspire 2', 'Matrice 600 Pro',
    'Tello'
]
var userShippingData = {
    firstName: 'Carlos',
    lastName: 'Trata',
    address: '1145 11th street',
    address2: 'apt2',
    city: 'Baraboo',
    zipCode: '53913',
    phone: '3003050247'

}
var seeAll = function(browser, seeMore) {
    browser
        .useXpath()
        .click('(//a[@class="cc-close"])[1]')
        .waitForElementPresent(`(//a[@class="Header__text-link___18R4E"])[${seeMore.more}]`)
        .pause(1000)
        .click(`(//a[@class="Header__text-link___18R4E"])[${seeMore.more}]`)
        .waitForElementVisible('(//h2[@class="Header__section-title___c12h9"])[1]')
        .pause(500)
        .verify.containsText('(//h2[@class="Header__section-title___c12h9"])[1]', `${seeMore.res}`)
        .click('@logo')

    .click
}


var dji = {}

module.exports = {
        beforeEach: browser => {
            dji = browser.page.djiPage()
            dji.resizeWindow(1920, 1080)

            dji
                .navigate()
                .waitForElementPresent('')
        },
        after: browser => {
            browser.end()
        },
        // //navigate the icons on from the roof menu and expect to be redirected to the right page
        // 'Verify the user is able to navigate through icons in the top main page': browser => {
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
        // //navigate to each of the must popular products ('Mavic', 'Osmo', 'Phantom',
        // //'Ronin','RoboMaster','DJI FPV','Inspire') and click on the first picture
        // //on the left (news version of the product tha the companie sell)
        // //expect to be redirect to the product individual page (with expection of servise page)
        // 'Verify the user is able to navigate through icons in the top main page': browser => {
        //     dji

        //     console.log(djiProducts.length)
        //     for (let i = 0, j = 1; i < productVersion.length, j < 7; i++, j++) {
        //         dji
        //             .useXpath()
        //             .waitForElementPresent(`(//div[@class="style__title____iugB"])[${j}]`)
        //             .click(`(//div[@class="style__title____iugB"])[${j}]`)
        //             .pause(1000)
        //             .click('(//a[@class="cc-close"])[1]')
        //             .waitForElementVisible('//div[@class="style__product-item___X3wEq"]', 500)
        //             .pause(1000)
        //             .click('//div[@class="style__product-item___X3wEq"]')
        //             .waitForElementVisible('//section[@class="info-section"]')
        //             .verify.containsText('//section[@class="info-section"]', productVersion[i])
        //             .useCss()
        //             .click('@logo')

        //     }
        // },
        // 'Search': browser => {
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
        //     'see more option main page': browser => {
        //         seeMore.forEach(test => {
        //             seeAll(dji, test)
        //             console.log(test.num)
        //             console.log(test.res)
        //         })

        //     }

        // }
        'footer links opening in a new tap': browser => {
                dji
                console.log(djiProducts.length)
                for (let i = 0, j = 1; i < productVersion.length, j < 26; i++, j++) {
                    dji
                        .waitForElementPresent(`//ul/li/a[@target="_blank"][${j}]`)
                        .click('(//a[@class="cc-close"])[1]')
                        .click(`//ul/li/a[@target="_blank"][${j}]`)
                    dji
                        .windowHandles(function(result) {
                            var handle = result.value[0]
                            dji
                                .switchWindow(handle)
                                .verify.containsText('@searchResultContainer', djiSearch[i].result)
                                .clore
                        })

                    //ul/li/a[@target="_blank"]''
                    // dji
                    //     .click(` ( //div[@class="Header__btn-group___3EtNx"])[${j}]`)
                    //     .click('@logo')
                    // .pause(3000)
                    // .waitForElementVisible('//div[@class="style__content___3PFJP"]')
                    // .verify.containsText('//div[@class="style__content___3PFJP"]', seeMore[i])
                    // .useCss()
                    // .click('@logo')




                    // },
                    // //user jurney for mavic mini2
                    // 'User journey': browser => {
                    //     dji
                    //         .useXpath()
                    //         .waitForElementPresent('@mavicProducts')
                    //         .click('@mavicProducts')
                    //         .pause(1000)
                    //         .click('(//a[@class="cc-close"])[1]')
                    //         .waitForElementVisible('@djiMini2', 500)
                    //         .pause(1000)
                    //         .click('@djiMini2')
                    //         .waitForElementVisible('@productContainer')
                    //         .pause(1000)
                    //         .click('@closePrivacyMessage')
                    //         .click('@flyMoreCombo')
                    //         .pause(1000)
                    //         .click('@shopNow')
                    //         //dialog message 
                    //         .waitForElementVisible('@dialogMessege')
                    //         .pause(1000)
                    //         //continue Dialogbutton
                    //         .click('@continueDialogButton')
                    //         .waitForElementVisible('@carePage')
                    //         //add one year 
                    //         .click('@djiCareRefresh1year')
                    //         //submite 
                    //         .click('@AddDjiCareButton')
                    //         //check user get messege add Successfully
                    //         .waitForElementVisible("@comfirmationAddCart")
                    //         .verify.containsText('@comfirmationAddCart', "Added to Cart Successfully!")
                    //     dji
                    //         .click('@viewCartCheckout')
                    //         .pause(1000)
                    //         .click('@checkOut')
                    //         .waitForElementVisible("@loginBox")
                    //         .click('@loginGuest')
                    //         .waitForElementVisible("@orderSummary")
                    //         .pause(1000)
                    //         .setValue('@inputFirstName', userShippingData.firstName)
                    //         .setValue('@inputLastName', userShippingData.lastName)
                    //         .setValue('@inputAddress', userShippingData.address)
                    //         .setValue('@inputAddress2', userShippingData.address2)
                    //         .setValue('@inputCity', userShippingData.city)
                    //         .setValue('@inputZipCode', userShippingData.zipCode)
                    //         .setValue('@inputPhone', userShippingData.phone)
                    //         .click('@selectStateWrapper')
                    //         .pause(1000)
                    //         .waitForElementVisible("@selectStateWisconsin")
                    //         .pause(1000)
                    //         .click('//div/ul//*[contains(text(),"Wisconsin")]')
                    //         .pause(3000)
                    //         .click('@buttonSubmitOrder')
                    //         .pause(1000)
                    //         .verify.containsText('@requiredCreditCard', "Required")