function moveHands() {
    const currentTime = new Date();
    const seconds = currentTime.getSeconds() * 6;
    const minutes = currentTime.getMinutes() * 6;
    const hours = ((currentTime.getHours() % 12) + currentTime.getMinutes() / 60) * 30;

    const secondHand = document.querySelector(".second-hand");
    const minuteHand = document.querySelector(".minute-hand");
    const hourHand = document.querySelector(".hour-hand");

    secondHand.style.transform = `rotate(${seconds}deg)`;
    minuteHand.style.transform = `rotate(${minutes}deg)`;
    hourHand.style.transform = `rotate(${hours}deg)`;

    if (currentTime.getSeconds() === 0,15,30,45) {
      const tickSound = document.getElementById("tickSound");
      tickSound.play();
    }
}

setInterval(moveHands, 1000);