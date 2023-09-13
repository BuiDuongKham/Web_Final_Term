const bannerTextJumpingObserver = new IntersectionObserver((entries, observer)=>
{
  entries.forEach((entry)=>
  {
    if (entry.isIntersecting){
      entry.target.style.animation= 'textInJumping 1s ease';
      entry.target.style.opacity = 1
    }
  })
}, {threshold: 0.25})
const contentInHeader1= document.getElementById("content-in-header-1");
const contentInHeader2= document.getElementById("content-in-header-2");
const aboutEventSection = document.getElementById("about-section");
const ourFeatureSection = document.getElementById("features-section-two")
const whyChoseUs = document.getElementById("why-choose-us")
bannerTextJumpingObserver.observe(contentInHeader1);
bannerTextJumpingObserver.observe(contentInHeader2);
bannerTextJumpingObserver.observe(aboutEventSection)
bannerTextJumpingObserver.observe(ourFeatureSection);
bannerTextJumpingObserver.observe(whyChoseUs)