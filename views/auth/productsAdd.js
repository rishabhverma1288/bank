
const main = require("./main")


const body = `


<body>
  <div class="row">
<div class="col-md-12">
  <form  method="POST" >
    <h1> ADD PRODUCT </h1>
    
    <fieldset>

      <label for="name">Name:</label>
      <input type="text"  name="username">
      
      <label for="name">User Email:</label>
      <input type="text"  name="email">
      
      <label for="description">Gender:</label>


      <select name="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <label for="Occupation">Occupation</label>
      <input type="text"  name="occupation">

      <label for="price">Age</label>
      <input type="text"  name="age">


      <label for="price">Address</label>
      <textarea  name="address"></textarea>

      <label for="price">Current Balance</label>
      <input type="text" name="cb">
      


    </fieldset>
    
   
    <button type="submit">Add</button>
    
   </form>
    </div>
  </div>
  
</body>
</html>



        `       // <textarea id="description" name="gender"></textarea>
const title = "Add Products"
const style = `<link rel="stylesheet" href="/css/prodAdd.css">`
const   js = ``


module.exports = main({body,title,style,js})

/* <footer>
<p>
    Created with <i class="fa fa-heart"></i> by
    <a target="_blank" href="https://florin-pop.com">Florin Pop</a>
    - Read how I created this and how you can join the challenge
    <a target="_blank" href="https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/">here</a>.
</p>
</footer> */