function SelectedGif({ Gif }) {
  console.log(Gif);
  if (Gif === null) {
    return (
      <div className="gif-selected">
        <h3>Select a Gif on the list</h3>
      </div>
    );
  }
  return (
    <div className="gif-selected">
      <h3>{Gif.title}</h3>
      <img src={Gif.images.downsized_medium.url} alt="Gif selectionné" />
      <a href={Gif.source} target="_blank" rel="noreferrer">
        {Gif.title}
      </a>
    </div>
  );
}
export default SelectedGif;
