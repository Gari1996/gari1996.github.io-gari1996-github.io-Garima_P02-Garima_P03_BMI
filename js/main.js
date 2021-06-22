
$(document).ready(() => {
    // for cart
    const $cartButton = $(`#cart`);
    const $dropdownCart = $(`.dropdown-menu:first`);

    $cartButton.on("click", () => {
        $dropdownCart.show();
    });

    $dropdownCart.on("mouseleave", () => {
        $dropdownCart.hide();
    });
// for account
    const $accountButton = $(`#account`);
    const $dropdownAccount = $(`.dropdown-menu`).eq(1);

    $accountButton.on("click", () => {
        $dropdownAccount.show();
    });

    $dropdownAccount.on("mouseleave", () => {
        $dropdownAccount.hide();
    });
// for help
    const $HelpButton = $(`#help`);
    const $dropdownHelp = $(`.dropdown-menu`).eq(2);

    $HelpButton.on("click", () => {
        $dropdownHelp.show();
    });

    $dropdownHelp.on("mouseleave", () => {
        $dropdownHelp.hide();
    });


});