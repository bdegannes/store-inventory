# Store inventory

To run app

    npm install  
    npm start

Built with:  

    React, Redux, webpack, Node, Express

MV* app split into three parts
-  A form to add new products to a "shop"
-  A list that represents products in the shop
-  A subset list of selected items from the shop

### Features

#### Product Form

 - the title of a product
 - the price (in $)
 - numeric value representing quantity of stock to add
 - Form Validation

#### Inventory List

- list all products added through the form
- add an item to the Shopping Basket with an Add button next to each product.
- Multiple quantities of each item can be added to the shopping basket
- When no more stock is available for a particular item, item will be displayed in a disabled state.

##### Shopping Basket

- display a subset of products added from the Inventory List.
- Each row will include the product title, the quantity and
- A button to remove all items of that product from the basket
- When removed, the product is removed from the shopping basket and the quantity of the Inventory List is updated accordingly.
