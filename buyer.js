chrome.runtime.onMessage.addListener(function(message) {

    if (message !== 'button_clicked') {
        return;
    }

    var buyingEl = document.getElementsByClassName('buying-tools-component')[0];

    if (!buyingEl) {
        console.log("cant find buying tools component");
        return;
    }

    selectSize();

    clickOnBuyButton();

    setPaymentmethod();

    function setPaymentmethod() {
        var checkExist = setInterval(function() {
            if (document.getElementsByClassName('test-paymentSelector-container').length) {
                clearInterval(checkExist);
                let paymentMethods = document.getElementsByClassName('test-paymentSelector-container')[0];

                let firstMethod = paymentMethods.children[0].firstChild;

                firstMethod.click();

                clickOnBuyAndConfirm();
            }
        }, 200);
    }

    function selectSize() {
        let sizesEl = document.getElementsByClassName('size-grid-container')[0];

        if (!sizesEl) {
            console.log('Cant find sizes box');
            return;
        };

        Array.from(sizesEl.firstChild.children).forEach(function(child) {
            let size = child.getAttribute('data-size');

            if (size.indexOf('EU M 44 / W 44') > -1) {
                console.log('Clicking on size..');
                child.click();
            }
        });
    }

    function clickOnBuyButton() {
        let buyBtn = buyingEl.firstChild.children[1];

        if (buyBtn) {
            buyBtn.click();
        }
    }

    function clickOnBuyAndConfirm() {
        let buyBtn = document.getElementsByClassName('save-button')[2];

        if (buyBtn) {
            buyBtn.click();
            confirmPurchase();
        }
    }

    function confirmPurchase() {

        var checkExist = setInterval(function() {
            let summaryEl = document.getElementsByClassName('summary-component')[0];

            if (summaryEl.getElementsByClassName('save-button')[0]) {
                clearInterval(checkExist);

                let buyBtn = summaryEl.getElementsByClassName('save-button')[0];

                if (buyBtn) {
                    console.log('bought that shit');
                    // buyBtn.click();
                }

            }
        }, 200);
    }

});