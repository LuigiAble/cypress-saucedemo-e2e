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
  before(() => {
    cy.visit("/");
    loginPage.login("standard_user", "secret_sauce");
  });

  it("should select products from the list", () => {
    headerPage.verifyTitleIsDisplayed("Products");
    productsPage.sortProductsBy(PRODUCT_SORT_OPTIONS.highToLow);
    productsPage.selectProducts();
    productsPage.verifyCartBadgeItems(1);
    productsPage.navigateToCartPage();
  });

  it("should check and modify added items", () => {
    headerPage.verifyTitleIsDisplayed("Your Cart");
    cartPage.verifyItemsAddedAreDisplayed(1);
    cartPage.clickOnCheckout();
  });

  it("should complete checkout user information", () => {
    headerPage.verifyTitleIsDisplayed("Checkout: Your Information");
    cartCheckoutPage.completeCheckoutInformation("Test", "Ing", 12345);
    cartCheckoutPage.clickOnContinue();
  });

  it("should review purchase details: subtotal, taxes, and price before confirm", () => {
    headerPage.verifyTitleIsDisplayed("Checkout: Overview");
    cartCheckoutOverviewPage.clickOnFinish();
  });

  it("should confirm that purchase was successfull", () => {
    headerPage.verifyTitleIsDisplayed("Checkout: Complete!");
    cartCheckoutCompletePage.verifyThankyouHeaderIsDisplayed(
      "THANK YOU FOR YOUR ORDER"
    );
    cartCheckoutCompletePage.verifyThankyouMessageIsDisplayed(
      "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
    );
  });
});
