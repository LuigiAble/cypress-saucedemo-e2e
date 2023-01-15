/// <reference types="Cypress" />

import productsPage from "../pages/productsPage";
import headerPage from "../pages/shared/headerPage";
import cartCheckoutCompletePage from "../pages/shopping-cart/cartCheckoutCompletePage";
import cartCheckoutOverviewPage from "../pages/shopping-cart/cartCheckoutOverviewPage";
import cartCheckoutPage from "../pages/shopping-cart/cartCheckoutPage";
import cartPage from "../pages/shopping-cart/cartPage";
import { PAGE_TITLES, PRODUCT_SORT_OPTIONS } from "./constants/constants";
import ProductsList from "../fixtures/productsInCart.json";

const {
  products,
  addedProducts,
  remainingProducts,
  removedProducts,
  userInfo,
  success_message: SUCCESS_MESSAGE,
} = ProductsList;

describe("The user makes purchases of items through the Saucedemo App", () => {
  before(() => {
    cy.loginViaUi({
      username: Cypress.env("username"),
      password: Cypress.env("password"),
    });
  });

  it("should select products from the list", () => {
    headerPage.verifyTitleIsDisplayed(PAGE_TITLES.products);
    productsPage.sortProductsBy(PRODUCT_SORT_OPTIONS.highToLow);
    productsPage.selectProducts(products);
    productsPage.verifyCartBadgeItems(addedProducts);
    productsPage.navigateToCartPage();
  });

  it("should check and modify added items", () => {
    headerPage.verifyTitleIsDisplayed(PAGE_TITLES.myCart);
    cartPage.verifyItemsAddedAreDisplayed(addedProducts);
    cartPage.updateCartOfItems(removedProducts);
    cartPage.verifyItemsAddedAreDisplayed(remainingProducts);
    cartPage.clickOnCheckout();
  });

  it("should complete checkout user information", () => {
    headerPage.verifyTitleIsDisplayed(PAGE_TITLES.stepOne);
    cartCheckoutPage.completeCheckoutInformation(userInfo);
    cartCheckoutPage.clickOnContinue();
  });

  it("should review purchase details: subtotal, taxes, and price before confirm", () => {
    headerPage.verifyTitleIsDisplayed(PAGE_TITLES.stepTwo);
    cartCheckoutOverviewPage.verifySummaryInfoIsCorrectlyDisplayed();
    cartCheckoutOverviewPage.clickOnFinish();
  });

  it("should confirm that purchase was successfull", () => {
    headerPage.verifyTitleIsDisplayed(PAGE_TITLES.complete);
    cartCheckoutCompletePage.verifyHeaderIsDisplayed(SUCCESS_MESSAGE.header);
    cartCheckoutCompletePage.verifyMessageIsDisplayed(
      SUCCESS_MESSAGE.description
    );
  });

  // after(() => {
  //   cy.logout();
  // });
});
