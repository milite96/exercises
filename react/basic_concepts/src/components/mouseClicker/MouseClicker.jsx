function MouseClicker() {

    function handleMouseClickOnButton(event) {
        console.log(event.target.name);
    }

    function handleMouseClickOnImg(event) {
        event.stopPropagation(); //esto es lo que evita que al pisar la imagen tambien se ejecute el evento del botón.
        console.log(event.target.src);
    }

  return (
    <button name='one' onClick={handleMouseClickOnButton}>
    <img src="https://picsum.photos/30" onClick={handleMouseClickOnImg} />Click me!
    </button>
  )
}

export default MouseClicker