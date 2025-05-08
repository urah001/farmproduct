another idea :
dark | little dark | bright | little bright
#a5423d | #bc827b | #fff6f4 | #f3eed9

60 30 10
remeber : 2  4  9

# to do
- add pic
- add a mock up profile page
- remove the cart icon
find like a booked icon
- edit the profile page to collect data from kinde 
- authentication
- add landig page
- remove the category images 
-  change the categories pictures and name 

# Where to Download Crop Images? 📸

   - Unsplash (Free HD images) – https://unsplash.com/s/photos/farm-crops
   - Pexels (Free images) – https://www.pexels.com/search/crops/
   - Pixabay (No copyright restrictions) – https://pixabay.com/images/search/farm/

# learning

the featured product is the component that returns the product hook

    T-1 :
    edit the productgrid.tsx and see if it works

# testing

testing your api :
http://localhost:1337/api/[name]?populate=*
http://localhost:1337/api/posts?populate=*


# learning

understand the slug : /product/[slug]/
understand the slug : /categories/[slug]/

add the categories of all the item in the category/[slug]

change the category in the app/category/[slug]/: {this is where the slug for each category is generated from} to the slug name of the category slug object in component/ui/category-list





Home Beauty ,home-kitchen, logistics-transport, digital-tech, training-ed, repairs





# future docs [ how strapi is configured ]
* 1a try and understand the the testing/page
*  1b http://localhost:1337/api/posts?populate=* : check if you can acess the data via json format 
* set api permission : 
By default, Strapi blocks public access to your API.

  -  Go to Settings > Roles & Permissions.
  
  -  Under Public, enable find and findOne for your collection (posts).

  - Click Save.
  if work: 
repeat 1b
if works well and you understand testing/page 
then edit to your liking

bus - tp
famer - feed
food recommendation - feed
clinic - emergency

# how it works

word without the extension [.tsx , .jsx ]: is a component
word with the extension [.tsx , .jsx ]: is a file / directory

the `layout.tsx` is used to render the site layout, where the  `header` and `footer` comp are global in every rendered page. 
to avoid error leave the `CartProvider` the `usecart` needs it

starting page is the `page.ts`:
the unchangeable is a branch i will use for other project that concerns ecommercing .
the component `HeroSection` : for the image and side writing  .

`header` 
using object routes for navigation :
_const routes =[{}]_

**remember** to fix the `about.tsx`
page contains mobile repondsiveness


# category and food 
so i want to start the full code now and this is what i want strapi to return : {
    id: integer,
    name: "String",
    price: integer,
    image: "string",
    category: "string",
    featured: boolen,
    new: boolen,
    slug: "string",
  }, the slug is like a dynamic route that opens a page only for that item and im sure you know what i mean , and the category is like a grouped content manager that is used to join many items together used this to help explain how to go about the code , this are the category and each item that are stand alone on the website :  Grains & Cereals 🌾

grain 
    Rice
    Wheat
    Maize (Corn)
    Barley
    Millet
    Sorghum

2. Vegetables 🥦🥕

    Tomatoes
    Onions
    Carrots
    Spinach
    Cabbage
    Lettuce
    Bell Peppers
    Cucumbers
    Eggplants

3. Fruits 🍎🍌

    Apples
    Oranges
    Bananas
    Pineapples
    Mangoes
    Grapes
    Watermelon
    Strawberries

4. Tubers & Root Crops 🍠

    Cassava
    Yam
    Sweet Potatoes
    Irish Potatoes
    Ginger
    Garlic

5. Legumes & Nuts 🌰

    Beans (Black Beans, Kidney Beans, Soybeans)
    Peanuts
    Cashew Nuts
    Almonds

6. Herbs & Spices 🌿

    Basil
    Mint
    Thyme
    Oregano
    Turmeric
    Cinnamon


    # learning 

    i just learnt to fetch data from the server , using just one server path ( meaning i didnt share the data just one table instead of two or more tables )
    - next challendge is to try to do same but with more table to make the serve side more arranged 