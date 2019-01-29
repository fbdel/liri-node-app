require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var omdb = new (require('omdbapi'))('http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&apikey=trilogy');
var axios = require("axios");
var moment = require("moment");

//Assign variables to arguements
var task = process.argv[2];
var value = process.argv.slice(3).join(" ");


var movie = "";
var artist = "";
var song = "";
var whatISaid = "";


//Initiate corresponding functions related to the first arguement.
function switchTask () {
    switch (task) {
        case "concert-this":
            artist = value;
            searchConcert();
            break;

        case "spotify-this-song":
            song = value;
            searchSong();
            break;

        case "movie-this":
            movie = value;
            searchMovie();
            break;
        
        case "do-what-it-says":
            whatISaid = value;
            doThis();
            break; 

    }
}

switchTask()







//Function that searches a move using the OMDb API
function searchMovie() {
    
    //Set default return to "Mr. Robot"
    if (movie) {
        movieData();
    } else {
    
        console.log ("")
        movie = "mr-nobody";
        var mrNobodyUrl = " http://www.imdb.com/title/tt0485947/";
        console.log("=================================================================================================")
        console.log("")
        console.log('If you haven\'t watched "Mr.Nobody" then you should:' + mrNobodyUrl);
        console.log("It's on Netflix!");
        console.log("")
        movieData();

    }  

    //Function which prints out specific movie data based on the arguement made
    function movieData() {
        axios.get("http://www.omdbapi.com/?t=" + movie +"&y=&plot=short&apikey=trilogy").then(
            function (response) {
                
                console.log("");
                console.log("Searching Movie: " + response.data.Title);
                console.log("");

                // Print Title of the movie.
                console.log("Movie Title: " + response.data.Title);

                // PrintYear the movie came out.
                console.log("Year: " + response.data.Year);

                //Print IMDB Rating of the movie.
                console.log("Rating: " + response.data.ImdbRating);

                //Print Rotten Tomatoes Rating of the movie.
                console.log("Rotten Tomatoes Rating: " + response.data.Tomatoes);

                //Print Country where the movie was produced.
                console.log("Country:" + response.data.Country);

                //Print Language of the movie.
                console.log("Language:" + response.data.Language);

                //Print Plot of the movie.
                console.log("Plot: " + response.data.Plot);

                //Print Actors in the movie.
                console.log("Actors:" + response.data.Actors);
                console.log("=================================================================================================")
                console.log("=================================================================================================")



            }
        
        );
    };
      
        
        
};



//Function that will search for concert info related to arguements made above.
function searchConcert(){

    //Error message for when this is no artist arguement.
    if (!artist){
        console.log("=================================================================================================");
        console.log("");
        console.log("You have not entered the correct Band/Artist name, please try again.")
        console.log("");
        console.log("=================================================================================================");

    }else {
        // We then run the request with axios module on a URL with a JSON
        axios.get("https://rest.bandsintown.com/artists/" + artist +"/events?app_id=codingbootcamp").then(
            function(response) {
                                 //Retrieve date info then chane formate to MM-DD-YYYY using moment.js
                                 var concertDate = response.data[0].datetime;
                                 var convertedDate = moment(`${concertDate}`).format("MM-DD-YYYY");

                                 console.log("=================================================================================================");
                                 console.log("");
                                 //Explanitory section
                                 console.log("Your Artist/Band search: " + artist);
                                 console.log("");
                                 //Print Venue Name
                                 console.log("Venue: " + response.data[0].venue.name);
                                 //Print City  Venue
                                 console.log("City: " + response.data[0].venue.city);

                                 //Print Date of the Event
                                 console.log("Date of Event: " + convertedDate);
                                 console.log("");

                                 console.log("=================================================================================================");
                               }
        );
    }
}





function searchSong(){
    
    //Set "i" variable to zero, "i" will specify the index element from API data
    var i= 0

    //Specify the default song and artist to be searched 
    if (song) {
        songData();
    } else {
        console.log("===============================================================");
        console.log ("You have entered a song, below is the default song!")
        song = "the-sign";
        i=4
        songData();
    }

    //Function the retrieves song data using Spotify API 
    function songData() {
        var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret:
            process.env.SPOTIFY_SECRET
        });

        spotify
        .search({
            type: "track",
            query: song
        }).then(function(response) {
            console.log("===============================================================");
            console.log("");

            //Explanitory section
            console.log ("Searched Song: " + song)
            console.log("");
        
            //Artist name
            console.log("Artist Name: "+ response.tracks.items[i].artists[0].name);

            //Song Preview Link
            console.log("Song preview link: " +response.tracks.items[i].preview_url);

            //Album
            console.log("Album: " + response.tracks.items[i].album.name);

            console.log("")

        })
        .catch(function(err) {
            console.log(err);
        });
    }
}



//Function that reads data from the random.txt file and use text as arguments
function doThis(){
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            //Return and Error 
            return console.log(err);
        }else 
            //Convert Data into a Array
            var dataArray = data.split(",");

            //Setting the values read to variables task and value
            task = dataArray[0];
            value = dataArray[1].slice(1,-1);
            
            //Iniate the Switch function
            switchTask()

    });
}



