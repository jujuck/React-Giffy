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

2. on `App`, fetch from giphy API. **Don't forget to create your API key!**
```http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=5```

3. iterate over a list of 5 gifs, and display the `Gif` on `GifList`.

4. when clicking on a `Gif`, it is displayed on `SelectedGif`

## Requirements
- React props, react state.
- Fetch.
