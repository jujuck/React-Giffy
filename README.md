# React Giphy

## Release / Update date
**20/11/2021**

## Install
Git clone && git install

## Description
Create a page that will display a list of gifs and show the selected gif.
![wireframe](./react-ghiphy.jpg)

1. create the components according to the [diagram](./react-giphy-diagram.jpg):
![diagram](./react-giphy-diagram.jpg)
  - Create the composant <SelectedGif /> in components Folder
  - Create the composant <GifList /> in components Folder
  - Inside the composant <GifList>, create a composant <Gif /> in components Folder
  
2. Now, improve your import. Add a index.js file in the component folder where you import all components. In app.js, import only the component needed with the index.js
  
3. In Gapp, add a state and then use 'useEffect to fetch the data
      on `App`, fetch from giphy API. **Don't forget to create your API key!**
      ```http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5```
  
4. Use props and maps correctly to add dynamically the Gif container (Without data)

5. Add the dot-env module with npm (https://www.npmjs.com/package/react-dotenv) and look at the documentation to protect your API key (Don't forget to gitignore it)

6. Improve the CSS of the components
  
7. Use the props on each gif to display the image and the title

8. Add a state on app.js for the seletedGif
    add a props function, onclick on the image on the gif componants to update this new state
    Then give this state as a props on the selected Gif to display it with image, title and a link to the source
  
9. Add two input (A textfiled and a button) in app.js in order to let the user change the query of the gifs (As an example 'cheesburger'
    

## Requirements
- React props, react state.
- Fetch.
