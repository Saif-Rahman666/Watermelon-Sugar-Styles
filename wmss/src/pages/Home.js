import React from 'react'

const Home = () => {
    return(
        <React.Fragment>
            <div class="wrapper">
            <div class="logo">
                <img src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/images/WMSS.png" alt="Logo"/>
            </div>
            <ul class="nav-area">
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Products</a></li>
                <li><a href="/#">Login</a></li>
                <li><a href="/#">Cart</a></li>
            </ul>
        </div>
        <div class="welcome">
            <h1>Welcome to Watermelon Sugar Styles</h1>
        </div>
      
    <div class="slider">
        <div class="slides">
         
          <input type="radio" name="radio-btn" id="radio1"/>
          <input type="radio" name="radio-btn" id="radio2"/>
          <input type="radio" name="radio-btn" id="radio3"/>
          <input type="radio" name="radio-btn" id="radio4"/>
         
          <div class="slide first">
            <img src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/images/1.jpeg" alt=""/>
          </div>
          <div class="slide">
            <img src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/images/2.jpg" alt=""/>
          </div>
          <div class="slide">
            <img src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/images/3.jpg" alt=""/>
          </div>
          <div class="slide">
            <img src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/images/4.jpg" alt=""/>
          </div>
          
          <div class="navigation-auto">
            <div class="auto-btn1"></div>
            <div class="auto-btn2"></div>
            <div class="auto-btn3"></div>
            <div class="auto-btn4"></div>
          </div>
     
        </div>
   
        <div class="navigation-manual">
          <label for="radio1" class="manual-btn"></label>
          <label for="radio2" class="manual-btn"></label>
          <label for="radio3" class="manual-btn"></label>
          <label for="radio4" class="manual-btn"></label>
        </div>
       
      </div>
    
        <div class="footer"> &#169 Copyrights to Watermelon Suger Styles</div>

        <script src="/Users/saifrahman/Downloads/pdf/Watermelon Sugar Styles/wmss/src/components/index.js" type="text/javascript">
    
        </script>
    
        </React.Fragment>
    )
}
export default Home