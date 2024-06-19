
function AlertClock(    ) {
    function handleShowingTime() {
        const date = new Date()
        const localTime = date.toLocaleTimeString()

        alert(`The current time is: ${localTime}`);
    }

  return (
    <div>
    <p>Click the button below to show the current time!</p>
     <button onClick={handleShowingTime}>Show local time</button> 
    </div>
  )
}

export default AlertClock
