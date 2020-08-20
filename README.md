# Wanderlust
Your personal travel companion!

## Table of Contents
* [General Info](#general-info)
* [Inspiration](#inspiration)
* [Demonstration Video](#demonstration-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## Link to Backend Git Repository
[Wanderlust Backend Repository](https://github.com/haleykelling/Travel_Planner_Backend)

## General Info
Wanderlust is a mobile app that was created to help you plan and organize your future travel. You can generate a blank itinerary by creating a trip with starting and ending dates. From there you can add various activities, transportation, and accommodations to keep everything organized in one location. You can add additional activities and notes while you are travelling so you will never forget the name of that hole in the wall restaurant you happened upon or the time you almost missed the sighting of two baby black bears and their mother. Once you are back from your trip you will always have a way to look back and remember all of those fond memories.

## Inspiration 
I grew up with a love for travel and was able to spend a month travelling Europe with my husband and family a couple years ago. I would have loved to have Wanderlust with me to remember all the places and things that happened while I was there that are quickly slipping from my memory. Nowadays we always have our phone with us and it would be so easy to take it out and write down a quick story so you have it forever. 

## Demonstration Video
[Wanderlust Youtube Demonstration](https://youtu.be/ua200teEPl8)

## Backend and Frontend Technologies 
* Ruby - version 2.6.1
* Rails - version 6.0.3, >= 6.0.3.2
* PostgreSQL
* HTML5
* CSS3 
* React - version 16.11.0
* React Native
* Expo - version 38.0.8

Gems:
* Bcrypt - version 3.1.15
* JWT - version 2.2.1
* Excon - version 0.75.0
* Figaro - version 1.2.0


## Setup 
My backend has been deployed on Heroku, so to get Wanderlust installed and running clone this frontend git repository into your directory and npm install:
```ruby
npm install
```
To get the app running you will need to have a simulator set up or the Expo app downloaded on your phone and run npm start from your terminal:
```ruby
npm start
```
This will open up the Expo dev tools in your browser where you can select if you would like to run the app on a simulator or you can scan the QR code and view it on your mobile device.

You can create a new user on the sign in page and start planning your own trips!


## Challenges
My previous experience was with web development using vanilla Javascript and React, but this was my first time developing a native mobile app. I used Expo's managed workflow to get the project started, which was extremely helpful but it also presented some challenges with using libraries and other technologies. I found it difficult to find libraries that did exactly what I needed that were also compatible with Expo. Being new to the world of mobile development, I know I have only scratched the surface of understanding all of the intricacies and capabilities and I look forward to learning more in the future.


## Features
Current Features:
* Create a user and login with authentication using bcrypt and jwt
* Use asyncStorage to check if user is already logged in
* Create a new trip and automatically generate day objects based on dates
* Update dates for trip and backend will change days to match without deleting any previously added itinerary items
* Add starting and ending locations to individual days
* Add new activities, transportations, and accommodations to trips
* Accommodations can be added to multiple days at once
* View all relevant information for activities, transportation, and accommodations in the detailed day view
* When a new location is added to days or a specific event, geolocation is obtained from Google's geolocation API and sent to the frontend to be placed on the map
* Map screen utilizes Google Maps to show all locations plotted with ability to zoom and click on a point of interest
* Comments screen can be accessed from the detailed day view to add or view comments for that day
* All screens are able to sort by date or time, depending on the information available

Technical Accomplishments:
* I created the entire app using hooks with React-Native
* This was my first time developing a native mobile application
* I incorporated multiple libraries that were compatible with React-Native and Expo's managed workflow

Future Features:
* Better integration with Google maps to allow for searching and adding events from map screen
* Add ability to upload photos and store them on a cloud service linked to the specific trip
* Add feature to be able to choose pictures to display on your itinerary cards
* Add friends and share trips and images with friends

## Status
The application is fully functional and ready to be enjoyed at current status. Future updates and improvements are still a possibility for future renditions.

## Contact
Created by [Haley Kelling](https://www.linkedin.com/in/haley-kelling/).

If you have any questions or comments feel free to reach out to me.

