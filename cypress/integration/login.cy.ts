/// <reference types="cypress" />

describe("Given a loginform", () => {
  describe("When its invoked with correct name and password, then clicks in create and goes to menu", () => {
    it("Then it should create a post, edit and delete it", () => {
      const username = "testCypress";
      const password = "testCypress1234";

      const recipeName = "Veggie chilli rice";
      const recipeIngredients =
        "2 red onions / 2 sweet potatoes , (250g each) / 3 mixed-colour peppers / 4 large ripe tomatoes / olive oil / 1 teaspoon cumin seeds / 1 teaspoon smoked paprika / 4 cloves of garlic / 1 lemon / 1 x 400 g tin of cannellini beans / hot chilli sauce / 250 g black rice / 1 bunch of fresh mint , (30g) / 4 small flour tortillas / 4 tablespoons natural yoghurt";

      const recipeResume =
        "Using veg raw to make a salsa as well as cooking it in the stew is incredibly resourceful and delicious.";

      const recipeRecipe =
        "1. Preheat a griddle pan to high. / 2. Peel the onions, scrub the sweet potatoes and deseed the peppers. Cut off a small chunk of each and put aside with one tomato (this is for the salsa later). Roughly chop the rest of the veg into 4cm chunks and halve the remaining tomatoes, then chargrill, working in batches. / 3. Drizzle 1 tablespoon of oil into a large casserole pan over a medium-low heat and stir in the cumin and paprika. / 4. Peel, roughly chop and add the garlic, finely grate in the lemon zest, and add the grilled veg bit by bit as they’re ready, stirring regularly. / 5. Tip in the beans (juices and all), and 1½ tins’ worth of water, then add around 1 tablespoon of chilli sauce (or to your liking). Season with sea salt and black pepper and simmer for 30 minutes, or until thickened and reduced.";

      const cookingTime = "45min";

      cy.visit(
        "https://ignasi-reixach-front-final-project-202204-bcn.netlify.app/login"
      );

      cy.get("label").contains("Username").type(username);
      cy.get("label").contains("Password").type(password);

      cy.get("button").contains("Log In").click();

      cy.contains("Create").click();

      cy.get("h1").should("contain.text", "DishWeek");

      cy.get("label").contains("Name").type(recipeName);
      cy.get("label").contains("Ingredients").type(recipeIngredients);
      cy.get("label").contains("Resume").type(recipeResume);
      cy.get("label").contains("Cooking time").type(cookingTime);

      cy.get("label").contains("Method").type(recipeRecipe);
      cy.get("input[type=file]").attachFile("Veggie_Fried_Rice.jpg");
      cy.get('[type="checkbox"]').check();
      cy.get("button").contains("Add Recipe").click();

      cy.get("li").should("contain.text", recipeName);

      // cy.get("img").should("have.class", "buttons button--minus");
      cy.get('img[alt="Button for remove recipes"]').first().click();
    });
  });
});
