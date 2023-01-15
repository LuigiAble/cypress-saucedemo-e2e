/// <reference types="Cypress" />

import loginPage from "../pages/loginPage";
import productsPage from "../pages/productsPage";
import headerPage from "../pages/shared/headerPage";
import cartCheckoutCompletePage from "../pages/shopping-cart/cartCheckoutCompletePage";
import cartCheckoutOverviewPage from "../pages/shopping-cart/cartCheckoutOverviewPage";
import cartCheckoutPage from "../pages/shopping-cart/cartCheckoutPage";
import cartPage from "../pages/shopping-cart/cartPage";
import { PRODUCT_SORT_OPTIONS } from "./constants/constants";

describe("The user makes purchases of items through the Saucedemo App", () => {
  it("should log in successfully", () => {
    cy.visit("/");
    loginPage.login("standard_user", "secret_sauce");

    // 1. List of items
    headerPage.verifyTitleIsDisplayed("Products");
    headerPage.sortProductsBy(PRODUCT_SORT_OPTIONS.highToLow);
    productsPage.selectProducts();
    // cy.get(".inventory_item #item_4_img_link img").should("be.visible");
    headerPage.verifyCartBadgeItems(1);
    headerPage.navigateToCartPage();

    // 2. User Cart
    headerPage.verifyTitleIsDisplayed("Your Cart");
    cartPage.verifyItemsAddedAreDisplayed(1);
    cartPage.clickOnCheckout();

    // 3. User Checkout
    headerPage.verifyTitleIsDisplayed("Checkout: Your Information");

    cartCheckoutPage.completeCheckoutInformation("Test", "Ing", 12345);
    cartCheckoutPage.clickOnContinue();

    // 4. User Checkout Overview
    headerPage.verifyTitleIsDisplayed("Checkout: Overview");
    cartCheckoutOverviewPage.clickOnFinish();

    // 5. User Checkout Complete
    headerPage.verifyTitleIsDisplayed("Checkout: Complete!");
    cartCheckoutCompletePage.verifyThankyouHeaderIsDisplayed(
      "THANK YOU FOR YOUR ORDER"
    );
    cartCheckoutCompletePage.verifyThankyouMessageIsDisplayed(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
