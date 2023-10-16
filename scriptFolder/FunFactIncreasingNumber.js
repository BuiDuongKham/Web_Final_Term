let isFunFactVisited = false
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (isFunFactVisited === true) return
    if (entry.isIntersecting) {
      isFunFactVisited = true
      const wrapper = document.getElementById('fun-fact-wrapper')
      let counter1 = 1;
      let counter2 = 1;
      let counter3 = 1;
      let counter4 = 1;
      const increCounter1 = () =>
      {
        const interval = setInterval(()=>
        {
          if (counter1 === 192) clearInterval(interval)
          counter1 += 1
          document.getElementById('counter1').innerText = counter1
        }, 10)
      }
      const increCounter2 = () =>
      {
        const interval = setInterval(()=>
        {
          if (counter2 === 62) clearInterval(interval)
          counter2 += 1
          document.getElementById('counter2').innerText = counter2
        }, 10)
      }
      const increCounter3 = () =>
      {
        const interval = setInterval(()=>
        {
          if (counter3 === 69) clearInterval(interval)
          counter3 += 1
          document.getElementById('counter3').innerText = counter3
        }, 10)
      }
      const increCounter4 = () =>
      {
        const interval = setInterval(()=>
        {
          if (counter4 === 250) clearInterval(interval)
          counter4 += 1
          document.getElementById('counter4').innerText = counter4
        }, 10)
      }
      setTimeout(() => {
        const node = document.createElement('div')
        node.id = 'fun-fact-1'
        node.classList.add('fun-fact-div')
        node.style.display = 'flex';
        node.style.flexDirection = 'column';
        node.style.justifyContent = 'center';
        node.style.alignItems = "center";
        node.innerHTML = `<div><p style="display: block; background-color: #ffc20b; font-size: 60px; color: white; padding: 20px; border-radius: 50%" class="fa-solid fa-headphones fun-fact-icon"></p></div><div id="counter1" style=" font-size: 60px; line-height: 1em; color: #15212f; text-shadow: 10px 10px 10px rgba(0,0,0,0.10); font-weight: 600; margin-bottom: 10px;"></div><div style="color: #ffc20b;    position: relative; display: block; font-size: 18px; line-height: 22px; font-weight: 700;">Participants</div>`
        wrapper.appendChild(node)
        increCounter1()
      }, 0)
      setTimeout(() => {
        const node = document.createElement('div')
        node.id = 'fun-fact-2'
        node.classList.add('fun-fact-div')
        node.style.display = 'flex';
        node.style.flexDirection = 'column';
        node.style.justifyContent = 'center';
        node.style.alignItems = "center";
        node.innerHTML = '<div><p style="display: block; background-color: #40cbb4; font-size: 60px; color: white; padding: 20px 28px; border-radius: 50%" class="fa-solid fa-bookmark fun-fact-icon"></p></div><div id="counter2" style=" font-size: 60px; line-height: 1em; color: #15212f; text-shadow: 10px 10px 10px rgba(0,0,0,0.10); font-weight: 600; margin-bottom: 10px;"></div><div style="color: #40cbb4;    position: relative; display: block; font-size: 18px; line-height: 22px; font-weight: 700;">Awards Win</div>'
        wrapper.appendChild(node)
        increCounter2()
      }, 500)
      setTimeout(() => {
        const node = document.createElement('div')
        node.id = 'fun-fact-3'
        node.classList.add('fun-fact-div')
        node.style.display = 'flex';
        node.style.flexDirection = 'column';
        node.style.justifyContent = 'center';
        node.style.alignItems = "center";
        node.innerHTML = '<div><p style="display: block; background-color: #4c35a9; font-size: 60px; color: white; padding: 20px; border-radius: 50%" class="fa-solid fa-thumbs-up fun-fact-icon"></p></div><div id="counter3" style=" font-size: 60px; line-height: 1em; color: #15212f; text-shadow: 10px 10px 10px rgba(0,0,0,0.10); font-weight: 600; margin-bottom: 10px;"></div><div style="color: #4c35a9;    position: relative; display: block; font-size: 18px; line-height: 22px; font-weight: 700;">Certificated Teachers</div>'
        wrapper.appendChild(node)
        increCounter3()
      }, 1000)
      setTimeout(() => {
        const node = document.createElement('div')
        node.id = 'fun-fact-4'
        node.classList.add('fun-fact-div')
        node.style.display = 'flex';
        node.style.flexDirection = 'column';
        node.style.justifyContent = 'center';
        node.style.alignItems = "center";
        node.innerHTML = '<div><p style="display: block; background-color: #e6275a; font-size: 60px; color: white; padding: 20px 25px; border-radius: 50%" class="fa-solid fa-book fun-fact-icon"></p></div><div id="counter4" style=" font-size: 60px; line-height: 1em; color: #15212f; text-shadow: 10px 10px 10px rgba(0,0,0,0.10); font-weight: 600; margin-bottom: 10px;"></div><div style="color: #e6275a;    position: relative; display: block; font-size: 18px; line-height: 22px; font-weight: 700;">Courses</div>'
        wrapper.appendChild(node)
        increCounter4()
      }, 1500)
    }
  })
})

const funFactSection = document.getElementById('fun-fact-section')
observer.observe(funFactSection)