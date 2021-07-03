![logo](https://raw.githubusercontent.com/dannyho77/BoxStats/main/assets/logo.jpg)  
[Live Link](https://dannyho77.github.io/BoxStats/)

## Background
BoxStats is data visualization app that details various stats for the top 50 currently active boxers in the world today. The app renders CompuBox punch stats for each fighter's most recent fight, as well as their career stats (career K.O. %, career win %, etc.), relative to the other top fighters in the rankings.  

BoxStats utilizes vanillaJS as the foundational language to build out each component/function of the app, as well as DOM manipulation. The D3.js library is also used to create dynamic barcharts.

## Technologies
- vanilla Javascript
- D3.js
- HTML/CSS
- Webpack

## Features

### Fighter List Module
- BoxStats features a side module, listing the top 50 active boxers (according to their current BoxRec 'pound-for-pound' rankings).
- Users can click on a fighter's name from the module to render their bio and fight stats. 

### Fighter Bio/Snapshot
- Upon clicking on a fighter name from the aforementioned module, their respective fighter bio (photo, age, height, etc.) will render.
- The fighter's recent fight stats (CompuBox punch stats, counting jabs, power punches and total punches) will also render simultaneously. 
![bio/snapshot](https://media.giphy.com/media/QFjS3yUvyXQlPBVAS6/giphy.gif)  
```c
        return(
            <div onMouseEnter = {() => this.setState({ preview: movie.id })} onMouseLeave = {() => this.setState({ preview: null })}>
                {previewing ? preview : thumbnail}
            </div>
        );
```


![career-chart](https://media.giphy.com/media/uwfERUYKxhX3Kcqcnb/giphy.gif)  
