// var djiCommands = {


// }
module.exports = {
    url: 'https://store.dji.com/',
    // commands: [djiCommands],
    elements: {

        logo: 'a[title = "DJI store"]',
        homePageBody: '.home-page',
        continueDialogButton: '#gtm_gtm_confirm',
        inputFirstName: 'input[data-test-locator="inputFirstName"]',
        inputLastName: 'input[data-test-locator="inputLastName"]',
        inputAddress: 'input[data-test-locator="inputAddress"]',
        inputAddress2: 'input[data-test-locator="inputAddress2"]',
        inputCity: 'input[data-test-locator="inputCity"]',
        inputZipCode: 'input[data-test-locator="inputZipCode"]',
        inputPhone: 'input[data-test-locator="inputPhone"]',
        selectStateWrapper: 'div[data-test-locator="selectStateWrapper"]',
        buttonSubmitOrder: 'button[data-test-locator="buttonSubmitOrder"]',
        shopNow: '#gtm_ShopNow',
        carePage: '.Content__care-clause-container___3FdpG',
        productContainer: '.product-container',
        checkOut: 'button[data-test-locator="btnCheckout"]',
        searchProductBox: 'input[name="q"]',
        searchResults: {
            selector: '//div[@class="section-container"]',
            locateStrategy: 'xpath'
        },
        searchResultContainer: {
            selector: '//ul[@class="index__section-content___37fiD index__product-list___1ETYA"]',
            locateStrategy: 'xpath'
        },
        requiredCreditCard: {
            selector: '(//div/*[contains(text(),"Required")])[1]',
            locateStrategy: 'xpath'
        },
        selectStateWisconsin: {
            selector: '//div/ul//*[contains(text(),"Wisconsin")]',
            locateStrategy: 'xpath'
        },

        dropDownProducts: {
            selector: '(//a[@class="MenuItem__nav-link___31BR7 MenuItem__nav-icon-link___1bk7H"])[1]',
            locateStrategy: 'xpath'
        },
        newsProduct: {
            selector: '//div[@class="style__product-item___X3wEq"]',
            locateStrategy: 'xpath'
        },
        closePrivacyMessage: {
            selector: '(//a[@class="cc-close"])[1]',
            locateStrategy: 'xpath'
        },
        flyMoreCombo: {
            selector: '(//div[@class="style__wrapper___3Nudz"])[2]',
            locateStrategy: 'xpath'
        },

        mavicProducts: {
            selector: '(//div[@class="style__title____iugB"])[1]',
            locateStrategy: 'xpath'
        },
        djiMini2: {
            selector: '//div[@class="style__product-item___X3wEq"]',
            locateStrategy: 'xpath'
        },

        dialogMessege: {
            selector: '//div[@class="Dialog__dialog___1pLKt"]',
            locateStrategy: 'xpath'
        },
        AddDjiCareButton: {
            selector: '//button[@class="xnv6R _2QwEc _22qIt p8s4W _3RO_K"]',
            locateStrategy: 'xpath'
        },
        djiCareRefresh1year: {
            selector: '(//div[@class="Content__care-info___wGhnT"])[2]',
            locateStrategy: 'xpath'
        },
        comfirmationAddCart: {
            selector: '//div[@class="Content__shopping-result-wrapper___2bwcL"]',
            locateStrategy: 'xpath'
        },
        viewCartCheckout: {
            selector: '//button[@class="xnv6R _2QwEc _22qIt _27-yu"]',
            locateStrategy: 'xpath'
        },
        loginBox: {
            selector: '//div[@class="login"]',
            locateStrategy: 'xpath'
        },
        loginGuest: {
            selector: '//div[@class="login-as-guest"]',
            locateStrategy: 'xpath'

        },
        orderSummary: {
            selector: '//div[@class="overview-section"]',
            locateStrategy: 'xpath'
        }


        //diferent products '(//div[@class="style__title____iugB"])[2]'

    }
}