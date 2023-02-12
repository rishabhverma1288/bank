
// Components to add - 
const nav = require("../components/navbar")
// 
const {getError} = require("./helpers")
//

const avatarsMale = [
    
  'https://bootdey.com/img/Content/avatar/avatar7.png',

  'https://bootdey.com/img/Content/avatar/avatar7.png',
]

const avatarsFemale = [
  'https://bootdey.com/img/Content/avatar/avatar3.png',
  'https://bootdey.com/img/Content/avatar/avatar3.png',
]
const randomAvt = ()=>{
    let oneOrZero = (Math.random()>=0.5)? 1 : 0
    return oneOrZero
}




const init = {
	body({items1,items2,errors}){
		return `

		
        
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="public/css/prodlist.css">

    ${nav}

    
  <div class="container">
  <div class="row justify-content-center">
  
    <div class="col-12 col-sm-8 col-lg-6">
    
      <!-- Section Heading-->
      <div class="section_heading text-center wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
        <h3>Transfer Money</h3>
       
        <div class="line"></div>
      </div>
    </div>
  </div>
  <div class="row">
    <!-- Single Advisor-->
    <div class="col-xl">
    User 1
      <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp;">
        <!-- Team Thumb-->
        <div class="advisor_thumb"><img src="${items1.gender==="Male"?avatarsMale[randomAvt()] : avatarsFemale[randomAvt()]}" alt="">
          <!-- Social Info-->
        </div>
        <!-- Team Details-->
        <div class="single_advisor_details_info">
          <h6>${items1.username}</h6>
          <p class="designation">${items1.occupation}</p>
          <p class="designation">Current balance - ${items1.cb}</p>
        </div>
      </div>
    </div>
    <!-- Single Advisor-->
                <div class="col" >
                
                <br>
                <br>
                <br>
                <br>
                
                <label for="name" id="header">Send Money from User 1 Account to User 2 Account:</label>
                <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
              
                <form  method="POST" action="/done">
                

                <div class="input-group">
                
                
                <input type="text"  name="sender" value = "${items1.id}" hidden>
                <input type="text"  name="reciever" value = "${items2.id}" hidden>
                <input type="text" class="form-control rounded" placeholder="Amount" aria-label="Search by Email" aria-describedby="search-addon" name="amount"/>
                <button type="submit" class="btn btn-outline-primary">Send</button>
                
                
                
                
                
                
                </div>
                
                </div>
                ${getError(errors,"amount")}
                
                <img id = "arrow" src="/images/right.png" alt="" class="resize" style="margin-left: auto; margin-right: auto;display: block;">
                <input id = "fromto" type="text"  value = "right" name= "fromto"  hidden>
                <p style=" text-align: center;
                line-height: 100px;">Clicke above arrow to change</p>
                
                </form>
                </div>
    <div class="col-xl">
    User 2
      <div class="single_advisor_profile wow fadeInUp" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
        <!-- Team Thumb-->
        <div class="advisor_thumb"><img src="${items2.gender==="Male"?avatarsMale[randomAvt()] : avatarsFemale[randomAvt()]}" alt="">
          <!-- Social Info-->
        </div>
        <!-- Team Details-->
        <div class="single_advisor_details_info">
          <h6>${items2.username}</h6>
          <p class="designation">${items2.occupation}</p>
          <p class="designation">Current balance - ${items2.cb}</p>
        </div>
        <br>
        <form  method="POST" action="/allUsers/users/${items1.id}/transfer/transferto">
        
          <div class="input-group">
          <input type="text"  name="userFirst" value = "${items1.id}" hidden>
          <input type="text"  name="userSecond" value = "${items2.id}" hidden>
          <input type="text" class="form-control rounded" placeholder="Search" aria-label="Search by Email" aria-describedby="search-addon" name="search"/>
          <button type="submit" class="btn btn-outline-primary">Search</button>
          
          </div>
          
        </form>
        ${getError(errors,"search")}
      </div>
      
    </div>
    <!-- Single Advisor-->

				`
	},
	title(){
		return "Welcome"
	},
	style(){
		return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="/css/compare.css">`
	},
	js(){
		return `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    <script src="/js/compare1.js"></script>
    `
    
	}

}


module.exports = init


// center p tag in div?





//Source: https://stackoverflow.com/questions/15121343


