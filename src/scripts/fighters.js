document.addEventListener("DOMContentLoaded", () => {

    d3.csv(
        "https://raw.githubusercontent.com/dannyho77/BoxStats/main/assets/fighters_info.csv",
        (d) => {
          return {
            name: d.Name
          }
        },
      ).then((data) => {
        render(data)
        console.log(data)
      })

})