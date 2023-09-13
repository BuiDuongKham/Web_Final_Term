setInterval(()=>
{
  const amountTime = Date.UTC(2023, 12, 31, 23, 59, 59) - new Date();
  document.getElementById("countdown-days").innerText = ( Math.round((Date.UTC(2023, 12, 31, 23, 59, 59) - new Date())/1000/60/60/24) ).toString().padStart(2, "0");
  document.getElementById("countdown-hours").innerText = (new Date(amountTime).getHours()).toString().padStart(2, "0");
  document.getElementById("countdown-minutes").innerText = (new Date(amountTime).getMinutes()).toString().padStart(2, "0");
  document.getElementById("countdown-seconds").innerText = (new Date(amountTime).getSeconds()).toString().padStart(2, "0");
}, 1000)