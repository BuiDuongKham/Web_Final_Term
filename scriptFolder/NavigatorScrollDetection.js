const observerForBluringHeader = new IntersectionObserver((entries, observer)=>
{
  entries.forEach(entry =>
  {
    if(entry.isIntersecting)
    {
      document.getElementById("main-header").style.background = 'rgba(0,0,0,0.1)'
    }
    else
    {
      document.getElementById("main-header").style.background = '#1e1f36';
    }
  })
})
const triggerPoint = document.querySelector('#trigger-point');
observerForBluringHeader.observe(triggerPoint);