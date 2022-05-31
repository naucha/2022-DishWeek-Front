# Dish Week App

## Data

Dishes

## Modifications

User:

- Create. Can create new Dish with this properties:
  - Name, Ingredients, Image, Recipe, Cooking time, Veggy (that option filters plates veggy option)
- Add: Can add a dish from the list to myWeek (personal ordered menu).
- Delete. Can delete any dish from the general list or mylist.

Form object DB

- Dishes (object):
  - Name (string)
  - Veggy (Boolean)
  - Ingredients (string)
  - Image (string)
  - Recipe (object):
    - Resume description (string)
    - Description (string)
  - Cooking Time (string)

## Components

---

BUTTONS:

- AddButton (+)

  - Dispatch an action to add.

    <br>

- DeleteButton (-)
  - Dispatch an action to delete.

<br>

- AddRecipeButton

  - This button allows to navigate to CreateForm
  - When the recipe is writed, dispatch the save action.

    <br>

- Pagination
  - ArrowLeft
  - ArrrowRight

LOGO:

- h1

SLOGAN

- h2

HEADER:

- Render Component Logo
- Logout

NAVBAR

- Dishes / My Week / Create / Logout / Filter Veggy

DISH

- Render h2
- Render CookingTime
- Render Image
- Conditional render (Render AddButton)
- Render DeleteButton
- Render Resume Description

DISHLIST

- Render DishComponent (8 units for page)

DISHDETAIL

- Render h2
- Render CookingTime
- Render Image
- Render AddButton
- Render Description

CREATEFORM

- Name: Label + input
- Ingredients: Label + input (this input can grow, adding more ingredients)
- Image: Label + input
- Description: Label + input
- Resume Description: Label + input
- Submitbutton
- Render X to close

<br>

LOGINFORM

- Name: Label + input (text placeholder)
- Username: Label + input (text placeholder)
- Render ArrowLeft to back
- Render X to close

<br>

SIGNUPFORM:

- Name: Label + input (text placeholder)
- Username: Label + input (text placeholder)
- Render ArrowLeft to back
- Render X to close

<br>

## Pages

---

- LANDING PAGE:

  - This page is used to navigate to SIGN IN or SIGN UP
  - Render DishWeek Logo, text and icon.
  - Render Slogan phrase
  - Render Button SIGN IN
  - Render Button SIGN UP

    <br>

- SIGN IN PAGE:

  - This page is for logIn users. Navigate to HOMEPAGE (when is logged) or SIGN UP (optional for user when is not registered)

  - Render DishWeek Logo, text and icon.

  - Render Slogan phrase

    <br>

- SIGN UP PAGE:

  - This page is for register a new user. Navigate to SING IN

  - Render DishWeek Logo, text and icon.
  - Render SLOGAN component

    <br>

- HOMEPAGE:

  - Contains ALL-DISHES
  - Render header
  - Navbar (underline "Dishes")
  - Render Pagination

    <br>

- CREATE RECIPE PAGE:

  - Render h1
  - Render h2
  - Render CreateForm

    <br>

- MYWEEK PAGE:

  - BackgroundColor blue
  - Render header
  - Navbar (underline "Myweek")
  - Render Dish with conditional render ("Show details")
  - Render Selected Dishes
  - Add Day of the week on top of two dishes

    <br>

- DETAIL PAGE:

  - Render header
  - Navbar (underline "Dishes")
  - Render DISHDETAIL

    <br>

- PAGE NOT FOUND

    <br>

## UI

---

- Modal Loading
- Dish added to myWeek
- Dish added to dishes
- Dish deleted
- Dish updated

- Wrong name or password
