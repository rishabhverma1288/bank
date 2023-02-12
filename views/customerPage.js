
// Components to add - 
const nav = require("../components/navbar")
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
	body({items}){
    let Balance = 0
    
    for (i of items){
        Balance = Balance+parseInt(i.cb)
        // Balance = Balance+parseInt(i)
    }
    

    const renderedItems = items
    .map(item=> {return `
      <tr class="inner-box">
      <th scope="row">
          <div class="event-date">
              <span>${item.username}</span>
              <p>${item.email}</p>
          </div>
      </th>
      <td>
          <div class="event-img">
          <img src="${item.gender==="Male"?avatarsMale[randomAvt()] : avatarsFemale[randomAvt()]}" alt="" />
              
          </div>
      </td>
      <td>
          <div class="event-wrap">
          Age - ${item.age}
          </div>
          <div class="r-no">
              <span>Gender - ${item.gender}</span>
          </div>
      </td>
      <td>
          <div class="r-no">
              <span class="pull-right">${item.cb}</span>
          </div>
      </td>
      <td>
          <div class="primary-btn">
              <a class="btn btn-primary" href="/allUsers/users/${item.id}">View Details</a>
          </div>
          <br>
          <div class="primary-btn">
              <a class="btn btn-primary" href="/allUsers/users/${item.id}/transfer">Transfer Money</a>
          </div>
      </td>
      </tr>
      `
    }).join("")
		return `

		<link rel="stylesheet" href="css/index.css">
        
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="public/css/prodlist.css">

    ${nav}

    <div class="event-schedule-area-two bg-color pad100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title text-center">
                        <div class="title-text">
                            <h2>USERS</h2>
                        </div>
                        <form  method="POST" action="/allUsers/search">
                            <div class="input-group">
                            <input type="text" class="form-control rounded" placeholder="Search" aria-label="Search by Email" aria-describedby="search-addon" name="search"/>
                            <button type="submit" class="btn btn-outline-primary">search</button>
                            </div>
                        </form>

                    </div>
                </div>
                <!-- /.col end-->
            </div>
            <!-- row end-->
            <div class="row">
                <div class="col-lg-12">
                    
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade active show" id="home" role="tabpanel">
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="text-center" scope="col">User Details</th>
                                            <th class="text-center" scope="col">Avatar</th>
                                            <th scope="col">Age and Gender</th>
                                            <th scope="col ">Current Balance</th>
                                            <th class="text-center" scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="mainContainer">
                                    ${renderedItems}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                                       
                        
                    </div>
                   
                </div>
                <!-- /col end-->
            </div>
            <!-- /row end-->
        </div>
    </div>

				`
	},
	title(){
		return "Welcome"
	},
	style(){
		return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="/css/prodlist.css">`
	},
	js(){
		return `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>

    `
    
	}

}


module.exports = init