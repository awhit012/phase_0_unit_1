# U1.W2: Chrome Dev Tools Challenge Reflection

* Describe the Document Object Model? What about it makes sense to you? What doesn't? What seems good and bad about it?

The DOM models HTML so that a scripting language like JS can make sense of it. JS is object oriented, which means that everything it interacts with is an object. HTML needs DOM to convert all of its elements into objects in hierarchies. This makes sense to me in that HTML is just a bunch of information that a browser can display. For static pages, your browser doesn't need to understand the title as one object and the page as a whole as another object, etc. it just has to display the information. For JS to interact with the site, it needs to understand it as a group of objects. This seems good because it works... There is something counterintuitive about it to me. I think this is a function of HTML being developed for static sites before the advent of web 2.0. If we could redisign the web with web apps in mind, perhaps we would make HTML object oriented to begin with, and not need DOM. Of course if we do that, we might not even need JS either! Just something called OOHTML or something like that. 

* How did using Chrome Web Tools to look at your site and a wordpress.com site compare?

I went to my blog brainchomp.wordpress.com. The CSS is largely similar, although there are more customizations happening. The HTML has a lot of Javascript built in, which so far my github.io site does not. It also has a lot of tags under !doctype that I am unfamiliar with, but look like they identify language. 

* Did you find Chrome Web Tools fun, helpful, or a pain to work with?

It was helpful and fun for some things. Optimization is very cool, editing HTML and CSS on the fly is pretty cool, but I'd almost rather just open up Sublime Text. However I'm using the smallest Macbook Air, so my screen is pretty small, making the Dev Tools also small, and taking up most of the page. I might like it better on a nice big display. 

* Did you have an "aha" moments or were any concepts solidified?

Yes! I think it is really cool that you can play around with any site on the web. I had an 'Aha' moment when I realized I could probably customize some of my favorite sites and save the customization in such a way that anytime I open the site in Chrome the customizations would be applied. This lead me to understand better how some customization plug-ins work. 

* Did you find any resources on your own that helped you better understand a topic? If so, please list it.

Yes! Puru Dahal's short screencast he put up on the google+ page was very helpful. 

Here are my answers to the quiz:

Dev Tools Quize

Realtime editing of HTML and CSS is done in Elements.
Javascript debugging is done in Sources.
Performance optimization is done using Network. 
Quick key is Command Option 'I'

Postmachina background color is #0b0f11.


You can't tweak the color of the main text because it is actually a .jpg image, not text. 



On TicketsWizard.com the largest image is the tiny "share" img.
I found it by clicking on the Network tab of DevTools and then arranging by size, then looking for images. This image is 2kb http://s7.addthis.com/static/btn/v2/lg-share-en.gif

Optimizing images can reduce the size of the page by 885.9KB
Serving resources from consitent URLs would save another 797B
Minifying CSS, JS and HTML saves about another 9KB

I went to my blog brainchomp.wordpress.com. The CSS is largely similar, although there are more customizations happening. The HTML has a lot of Javascript built in, which so far my github.io site does not. It also has a lot of tags under !doctype that I am unfamiliar with, but look like they identify language. 


http://i.imgur.com/n6PCq9N.png

http://i.imgur.com/Yj28ey7.png
