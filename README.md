![logo](https://raw.githubusercontent.com/dannyho77/BoxStats/main/assets/logo.jpg)  
[Live Link](https://dannyho77.github.io/BoxStats/)

## Background
BoxStats is data visualization app that details various stats for the top 50 currently active boxers in the world today. The app details CompuBox punch stats for each fighter's most recent fight, as well as their career stats (career K.O. %, career win %, etc.), erlative to the other top fighters in the rankings.  

BoxStats utilizes a ruby on rails backend to provide a framework for core app data, such as individual user data, movie and media information, genre data, and CRUD functionality for adding and removing movies to/from a user's personal collection. PostgreSQL is used to query/interact with the database. On the frontend, React/Redux is implemented to connect the backend data to a clean and intuitive user interface. For example, there are dedicated 'genre-show' pages that only show movies in a specific genre, as well as a dynamic 'my list' page, showing a users saved movies. Lastly, Amazon Web Services (S3) is used as server-side storage to house multimedia files related to all movies.

## Technologies
- vanilla Javascript
- D3.js
- HTML/CSS
- Webpack

## Features

### Fighter List Module
- Users can securely sign up and create a personal Cineflix account.
- Users who would like to sample the app first, may log in as a demo user to browse the site and test its functionality.
- Users can only browse/access movie titles through a valid Cineflix account (or through the provided demo account).

### Fighter Bio/Snapshot
- Upon logging in, users are directed to the main Cineflix page, displaying a main featured movie as well as an index of all Cineflix titles organized by genre.
- The featured movie autoplays on the main page, and all other individual movie titles are displayed in 'movie tiles', in their respective genre categories.
- Movie tiles expand and autoplay their trailers upon hover. Such movie's details (rating, year, runtime) are also displayed on hovering the movie tile (related .gif and code snippet below).  
![movietile](https://media.giphy.com/media/0EkDoKGMKZrcpEnZeO/giphy.gif)  
```c
        return(
            <div onMouseEnter = {() => this.setState({ preview: movie.id })} onMouseLeave = {() => this.setState({ preview: null })}>
                {previewing ? preview : thumbnail}
            </div>
        );
```
