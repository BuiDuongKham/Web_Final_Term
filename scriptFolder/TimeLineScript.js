<!--This is script for timeline section-->
  const buttons = document.getElementsByClassName('schedule-button')
  for (let element of buttons) {
  element.addEventListener('click', (event) => {
    choseDay(event)
  });
  if (element.attributes['id'] !== undefined && element.attributes['id'].value === "chosed-button") {
  if (element.attributes['name'].value === "day1") {
  element.style.boxShadow = '0px 0px 30px rgba(227, 208, 54, 0.3)'
  element.style.border = '1px solid rgb(255,203,0)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px) ; width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else if (element.attributes['name'].value === 'day2') {
  element.style.boxShadow = '0 0px 30px rgba(64,203,180,.30)'
  element.style.border = '1px solid rgb(57,219,189)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else if (element.attributes['name'].value === 'day3') {
  element.style.boxShadow = '0 0px 30px rgba(76,53,169,.30)'
  element.style.border = '1px solid rgb(128,0,255)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else {
  element.style.boxShadow = '0 0px 30px rgba(230,39,90,.30)'
  element.style.border = '1px solid rgb(255, 0, 0)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>6.50 AM</div>\n' +
  '                <div>9.53 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
}
} else {
  element.style.boxShadow = 'none'
  element.style.border = '1px solid #dddddd'
}
}
  const choseDay = (event) => {
  const buttons = document.getElementsByClassName('schedule-button')

  for (let element of buttons) {
  if (element.attributes['id'] === 'chosed-button') {
  element.setAttribute('id', '')
}
  if (element === event.target) {
  element.setAttribute('id', 'chosed-button')
  if (element.attributes['name'].value === "day1") {
  element.style.boxShadow = '0px 0px 30px rgba(227, 208, 54, 0.3)'
  element.style.border = '1px solid rgb(255,203,0)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else if (element.attributes['name'].value === 'day2') {
  element.style.boxShadow = '0 0px 30px rgba(64,203,180,.30)'
  element.style.border = '1px solid rgb(57,219,189)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else if (element.attributes['name'].value === 'day3') {
  element.style.boxShadow = '0 0px 30px rgba(76,53,169,.30)'
  element.style.border = '1px solid rgb(128,0,255)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.53 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
} else {
  element.style.boxShadow = '0 0px 30px rgba(230,39,90,.30)'
  element.style.border = '1px solid rgb(255, 0, 0)'
  const scheduleDetails = document.getElementById('schedule-details')
  scheduleDetails.innerHTML ='<div style="display: flex; flex-direction: column">\n' +
  '        <!--        Right -->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner1"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #ffc20b; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>6.50  AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#ffc20b\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #ffc20b; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#ffc20b\'; this.style.borderTop = \'2px solid #ffc20b\'; this.style.borderBottom = \'2px solid #ffc20b\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#ffc20b\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse1"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#40cbb4\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #40cbb4; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#40cbb4\'; this.style.borderTop = \'2px solid #40cbb4\'; this.style.borderBottom = \'2px solid #40cbb4\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#40cbb4\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #40cbb4; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Right-->\n' +
  '        <div style="position: relative; margin-bottom: 30px;">\n' +
  '          <div style="position: relative; float: right; width: 50%; text-align: left;">\n' +
  '            <div class="inner2"\n' +
  '                 style="position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 80px; border-radius: 20px;">\n' +
  '              <div\n' +
  '                style="position: absolute; left: -132px; width: 100px; top: 0px; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #4c35a9; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '              <div style="position: relative; padding-left: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; left: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#4c35a9\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #4c35a9; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#4c35a9\'; this.style.borderTop = \'2px solid #4c35a9\'; this.style.borderBottom = \'2px solid #4c35a9\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#4c35a9\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <!--      Left-->\n' +
  '        <div style="position: relative; margin-bottom: 30px; top: 100% ">\n' +
  '          <div style="position: relative; float: left; width: 50%; text-align: right;">\n' +
  '            <div class="inner-reverse2"\n' +
  '                 style="display: flex; flex-direction: row-reverse; position: relative; padding: 20px 30px 20px; background-color: #ffffff; border: 1px solid #dddddd; box-shadow: 0 0 30px rgba(0,0,0,0.05); margin-left: 0;margin-right: 80px; border-radius: 20px;">\n' +
  '              <div style="position: relative; padding-right: 80px; padding-top: 10px; min-height: 60px;">\n' +
  '                <!--              Thumbnail-->\n' +
  '                <div style="position: absolute; right: 0; top: 0; width: 60px; border-radius: 50%; overflow: hidden;">\n' +
  '                  <img style="width: 100%; aspect-ratio: 1/1; object-fit: cover" src="Speaker/speaker-background.jpg"\n' +
  '                       alt="schedule-img">\n' +
  '                </div>\n' +
  '                <!--              Name-->\n' +
  '                <div style="font-size: 16px; color: #212639; font-weight: 500; line-height: 1.2em;">\n' +
  '                  Ashli Scroggy\n' +
  '                </div>\n' +
  '                <!--              Position-->\n' +
  '                <div style="font-size: 13px;">\n' +
  '                  Founder & CEO\n' +
  '                </div>\n' +
  '                <!--              News-->\n' +
  '                <div>\n' +
  '                  <h4>\n' +
  '                    <a style="position: relative; font-size: 22px; line-height: 1.2em; color: #0f1925; font-weight: 600; margin-bottom: 15px; padding-top: 15px;" onmouseover="this.style.color = \'#e6275a\'; this.style.transition=  \'color 400ms ease\'" onmouseleave="this.style.color = \'black\'; this.style.transition=  \'color 400ms ease\'" href="#">Modern Marketing Summit Sydney 2018</a>\n' +
  '                  </h4>\n' +
  '                  <div style="position: relative; font-size: 16px; line-height: 26px; color: #888888; margin-bottom: 15px;">\n' +
  '                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusamus alias aliquam aut beatae earum eius, fugiat incidunt laboriosam obcaecati optio provident, qui quibusdam quo quos rerum similique sit tenetur?\n' +
  '                  </div>\n' +
  '                  <a href="#" style="display: inline-block; background-color: #e6275a; padding: 10px 20px; line-height: 20px; font-size: 14px; color: #ffffff; border-top: 2px solid transparent; border-bottom: 2px solid transparent; border-radius: 5px" onmouseover="this.style.backgroundColor = \'transparent\'; this.style.color=\'#e6275a\'; this.style.borderTop = \'2px solid #e6275a\'; this.style.borderBottom = \'2px solid #e6275a\'; this.style.transition = \'all 300ms ease\'" onmouseleave="this.style.backgroundColor = \'#e6275a\'; this.style.color=\'white\'; this.style.borderTop = \'2px solid transparent\'; this.style.borderBottom = \'2px solid transparent\'; this.style.transition = \'all 300ms ease\'">\n' +
  '                    Read More\n' +
  '                  </a>\n' +
  '                </div>\n' +
  '              </div>\n' +
  '              <div\n' +
  '                style="position: absolute; left: calc(100% + 30px); width: 100px; top: 0; height: 100px; background-color: #ffffff; text-align: center; font-size: 14px; line-height: 18px; color: #212639; font-weight: 500; padding: 30px 15px 0; border-radius: 50%; border: 2px dashed #e6275a; box-shadow: 0 0 30px rgba(0,0,0,0.05);">\n' +
  '                <div>9.00 AM</div>\n' +
  '                <div>10.00 AM</div>\n' +
  '              </div>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>'
}
} else {
  element.style.boxShadow = 'none'
  element.style.border = '1px solid #dddddd'
}
}
}