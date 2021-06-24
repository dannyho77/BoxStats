# BoxStats (6/24/2021)
BoxStats is data visualization tool that shows a quick recent-fight snapshot and a more detailed career-chart of each of the top fighters in the world of boxing today.

## Functionality & MVP
- Fighter names are listed on the left-hand side in a scrollable module.
- Each fighter name is a clickable link that renders that fighters info on the current page upon a click.
- Individual fighter info. includes:
    - the fighter's photo;
    - a mini diagram showing that fighter's stats for his most recent fight (%punches landed, %power punches landed, #of knockdowns achieved);
    - as well as a more detailed chart showing such fighter's career W/L%; ; K.O.%; #belts won; #divisions won; etc. The wireframe just below shows a basic visualization of this format.  
![Box_chart](https://user-images.githubusercontent.com/75692984/113572441-33435700-95e6-11eb-9293-c2e06dca6fb9.png)  

## Technical details
- This project will be written in JavaScript, also implementing HTML and CSS, and using the D3.js data visualization library.  

## Implementation Timeline
### Day 1:
- set up basic file structure skeleton
- review  the [BoxRec API](https://github.com/boxing/boxrec) for boxer stats
- read up on basics of D3

### Day 2:
- render individual boxer info. on page as plain text
- design left-hand boxer list module
- figure out which D3 data-represenation models to use

### Day 3:
- place individual boxer data elements on apge in specified positional blocks

### Day 4:
- render all top boxer info in page
- style page elements

### Day 5:
- cleanup/debug and polish CSS
