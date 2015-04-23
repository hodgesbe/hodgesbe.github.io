//Main function that gets exicuted on page ready
var main = function(){
        //getJSON function that retrieves the top stories from the NYT API
        $.getJSON("http://api.nytimes.com/svc/topstories/v1/home.json?&api-key=f2e425449a8965c26dd227193dc3d9c5:15:71605180", function (topStories) {
        //variable to store the returned data    
        var newsStories = topStories.results;
    
    //Loop to parse the data stored in the newsStories variable
    for(var i = 0; i < newsStories.length; i++){
        //creates variables that store the parsed data as well as variables that will be used to create div
        var abstract = "",
            imageUrl = "",
            title = "",
            url = "",
            $newsArticle = $("<article>"),
            $imageDiv = $("<div class = \"image\"></div> "),
            $titleDiv = $("<div class = \"title\"></div>"),
            $abstractDiv = $("<div class = \"abstract\"></div>"),
            $linkDiv = $("<div class = \"link\"</div>");
        
            //Appends the div elements to the article
            $($newsArticle).append($titleDiv);
            $($newsArticle).append($imageDiv);
            $($newsArticle).append($abstractDiv);
            $($newsArticle).append($linkDiv);
        
            //gets the title from the newsStories data and creates a new <h3> element with the data
            //appends the <h3> to the title div
            title = newsStories[i].title;
            $("<h3>"+title+"</h3>").appendTo($titleDiv);
            
            //checks to see if the newsStories data has an image associated with it
            if(newsStories[i].multimedia !== ""){
                //creates a new <img> element from the topStories data and appends it to the image div
                imageUrl = newsStories[i].multimedia[newsStories[i].multimedia.length-1].url;
                $("<img src="+imageUrl+"><br>").appendTo($imageDiv);
            }
        
            //gets the abstract data from the newStories data and creates a new <p> element with the data
            //appends the <p> element to the abstract div within the article
            abstract = newsStories[i].abstract;
            $("<p>"+abstract+"</p>").appendTo($abstractDiv);
        
            //gets the url data from the newsStories data and creates a new <a> element with the data
            //appends the data to te link div of the article
            url = newsStories[i].url;
            $("<a href="+url+">Link to full New York Times article</a>").appendTo($linkDiv);
            
            //appends the <article> element to the topStories div in the main DOM
            $(".topStories").append($newsArticle);
        
        }

    });
};
$(document).ready(main);