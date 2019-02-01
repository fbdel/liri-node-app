
#######Liri Bot App

#This App cannot be deployed to GitHub pages or Heroku, as this is a CLI App. Screenshots included at the bottom of page, with the results of the 4 functions.

###Overview

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.



###How It Works 


**API's Used** 
    -Spotify for songs
    -Bands in Town for concerts
    -OMDB for movies.

    -Utilizing *Axios* package to the Bands in Town, Spotify and OMDB APIs.



**Node Packages Used**

    -Node-Spotify-API  

    -Axios

    -Moment

    -DotEnv



#####Functions

**Liri.js takes in  two arguments:**

-First, one of the following commands:

    -concert-this
    -spotify-this-song
    -movie-this
    -do-what-it-says


    -Second, a value relating to the first if anything at all.




###What Each Command Should Do


**Concert-this Function**

-This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

    - Name of the venue
    - Venue location
    - Date of the Event (use moment to format this as "MM/DD/YYYY")



**Spotify-this-song Function**

-This renders the following information about the song in terminal/bash window

    - Artist(s)
    - The song's name
    - A preview link of the song from Spotify
    - The album that the song is from

    - If no song is provided the default song is "The Sign" by Ace of Base.



**Movie-this Function**

-This function will render the following information to the terminal/bash window:

   - Title of the movie.
   - Year the movie came out.
   - IMDB Rating of the movie.
   - Rotten Tomatoes Rating of the movie.
   - Country where the movie was produced.
   - Language of the movie.
   - Plot of the movie.
   - Actors in the movie.


    - Default movie rendered in the event no second argument is inserted 'Mr. Nobody', along with a printed message.



**Do-what-it-says Function**

    - File random.text is read, then the content from the file are set as the two arguments used required to execute the switchTask function 










######Links

[![Watch the video](/screenshots/LiriBot-Screen.png)](https://youtu.be/3ZlwUT_0Gh8)


![ScreenShot OMDb and BandInTown API called](/screenshots/OMDb-BandInTown-API-Results-Screen-Shot.png)

![ScreenShot Spotify API called, along with result of arguements extracted from random.txt file](/screenshots/SpotifyAPI-readFile-Command-Screenshot.png)

