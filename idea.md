another idea :
dark | little dark | bright | little bright
#a5423d | #bc827b | #fff6f4 | #f3eed9

60 30 10
remeber : 2  4  9
# to do

add pic
add a mock up profile page
remove the cart icon
find like a booked icon


# Where to Download Crop Images? 📸

    Unsplash (Free HD images) – https://unsplash.com/s/photos/farm-crops
    Pexels (Free images) – https://www.pexels.com/search/crops/
    Pixabay (No copyright restrictions) – https://pixabay.com/images/search/farm/

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

# todo
authentication




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
the `layout.tsx` is used to render the site layout, where the  `header` and `footer` comp are global in every rendered page. 
to avoid error leave the `CartProvider` the `usecart` needs it

starting page is the `page.ts`:
the unchangeable is a branch i will use for other project that concerns ecommercing .
the component `HeroSection` : for the image and side writing  