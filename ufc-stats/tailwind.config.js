/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
   "./src/**/*.{js,jsx,ts,tsx}",
 ],
 theme: {
    extend: {
      fontFamily: {
        NavBarFont: ['Oswald'],
        Table: ['Roboto Condensed'],
      },
      backgroundImage: {
        fightList:
          "url('./imgs/fighterList.jpg')",
        fightEvent:
          "url('./imgs/fightEvent.webp')",
        personalFav:
          "url('./imgs/personalFav.webp')",
        homePageBackground:
          "url('./imgs/homePageBackground.jpg')",
        homePageBackground2:
          "url('./imgs/homePageBackground2.jpg')",
        homePageBackground3:
          "url('./imgs/homePageBackground3.jpg')",
        RedBlackBackground:
          "url('./imgs/RedBlackBackground.jpg')",
      },
    },
  },
 plugins: [],
}