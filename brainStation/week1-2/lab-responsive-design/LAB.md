# Responsive Design Lab

This lab builds upon the work you did in the flex-box lab. If you want a fresh start use the starter code, but otherwise you are welcome to use your own work from last lab. Just copy it over into the folder that you created for this lab.


## Opening your site on "mobile"
1. Open the `index.html` in your browser
2. Open the chrome inspector
3. In the top left corner of the inspector you will find an icon that says **Toggle device toolbar** when you hover over it
4. Click it to enable a **Responsive** view of the site
    - you can always click this button again to go back to the desktop view
5. To the right of the webpage you should now have a handle that you can use to adjust the size of the screen
    - this allows you to easily simulate screens of any size
6. See what the site looks like with a width of roughly...
    - 1200px
    - 768px
    - 480px
7. Do you notice any **responsive** behaviour?
    - what do you think is causing this behaviour?
8. Would you be happy with the current "mobile" experience?


## BEM
1. Change the class names of the header to follow the BEM convention
    - you may need to add classes to elements that don't currently have a class
    - make sure to change the selectors of your rulesets as well!


## Media Queries
1. create a media query that is activated when the screen width is less than 768px
2. This media query should...
    - change the arrangement of the elements in the `main` block such that they are stacked on top of each other
      - hint: review the flexbox lecture
    - remove the header items from the left and right of the header
      - only leave the logo
    - center the **Logo** within the header
      - hint: review the flexbox lecture
    - shorten the height of the `hero` to be 40% of the **width** of the screen
      - hint: review the css units lecture