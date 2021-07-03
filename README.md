![logo](https://raw.githubusercontent.com/dannyho77/BoxStats/main/assets/logo.jpg)  
[Live Link](https://dannyho77.github.io/BoxStats/)

## Background
BoxStats is data visualization app that details various stats for the top 50 currently active boxers in the world today. The app renders CompuBox punch stats for each fighter's most recent fight, as well as their career stats (career K.O. %, career win %, etc.), relative to the other top fighters in the rankings.  

BoxStats utilizes vanillaJS as the foundational language to build out each component/function of the app, as well as to affect DOM manipulation. The D3.js library is also used to create dynamic barcharts.

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
        <script>
        d3.csv("https://raw.githubusercontent.com/dannyho77/BoxStats/main/assets/fighters_info.csv", function(data) {
                let bio = function(i){
                        
                        d3.select(".click-info").append("div")
                        .attr("id", "profile");

                        let picUrl = data[i].Picture;
                        let image = new Image();
                            image.src = picUrl;

                        let name = document.createElement('p');
                        name.innerHTML=`${data[i].Name}`;
                        let age = document.createElement('p');
                        age.innerHTML=`Age: ${data[i].Age}`;
                        let division = document.createElement('p');
                        division.innerHTML=`Division: ${data[i].Division}`;
                        let height = document.createElement('p');
                        height.innerHTML=`Height: ${data[i].Height}`;
                        let reach = document.createElement('p');
                        reach.innerHTML=`Reach: ${data[i].Reach}`;

                        document.getElementById('profile')
                          .appendChild(image);

                        document.getElementById('profile')
                          .appendChild(name);

                        document.getElementById('profile')
                          .appendChild(age);

                        document.getElementById('profile')
                          .appendChild(division);

                        document.getElementById('profile')
                          .appendChild(height);

                        document.getElementById('profile')
                          .appendChild(reach);
                 };
         )};
```

### Career Stats
- A fighter's career stats will appear at the bottom of the page simultaneously with the rendering of the aforemention fighter bio/snapshot.
- Career Stat charts consist of four distinct charts (career: (1)bouts, (2)rounds, (3)K.O.%, (4)win%), each of which can be viewed by clicking on the respective chart type in a dropdown menu.
- the currently selected fighter's career bar is highlighted orange to distinguish it from the other top fighters.
![career-chart](https://media.giphy.com/media/uwfERUYKxhX3Kcqcnb/giphy.gif)  
