# README

Things you may want to know:

* Requires Ruby on Rails version: Rails 5.2.3, use rails -v to find out your version

* Git clone repository to begin

* start by initalizing the database and models run: rails db:migrate

* to start the server run: rails s 

* in your browser window visit: localhost:3000

* enter a search and get results in seconds! 

* the ui is... not my best work

What I was going for:

The goal of this rails app was to utilize instant search, faceting and autocomplete. In four hours, I got through full rails set up, a mostly failed attempt at bootstrap, and type-to-return search results powered by algolia, which are providing the user the ability to recieved suggested wine results at every addional letter they type giving them an easy to find and use search experience. 

I implemented this as a server side javascript integration, which was really easy to do the basics, but I do wish the documentation for this was a little easier to find. The standard javascript example was embedded in the rails doc that started off with details about server side integration, then went on to say that you highly suggest clientside. From there is was also confusing as to what the appropriate way to pass faceting in the javascript function was. 

In the end, you have a simple (eligant?) landing page for Bordeux wines, so you can grab the wines you love and forget the rest! 
