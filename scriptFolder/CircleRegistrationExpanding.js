const registrationObserver = new IntersectionObserver((entries, observer)=>
{
  entries.forEach( entry =>
  {
    if (entry.isIntersecting){
      const area = document.getElementById('circle-spanning-area')
      area.innerHTML =
        "<span " +
        "style=\"visibility: visible; animation: zoomIn 1s ease; right: -100px; top: -120px; opacity: .20; position: absolute; background-position: center; background-repeat: no-repeat;    height: 360px; width: 360px; background-image: url('Registration_Form/icon-circle-3.png'); background-size: 100%;\">\n" +
        "        </span>"
    }
  })
}, {threshold: 0})
const registrationWrapper = document.getElementById('circle-spanning-wrapper')
registrationObserver.observe(registrationWrapper)