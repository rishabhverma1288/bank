
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
	body({user,items}){

        
    const renderedItems = items
    .map(item=> {return `
      <tr class="inner-box">
      <th scope="row">
          <div class="event-date" >
              ${item.date}
          </div>
      </th>
     

      <td>
        <div class="event-wrap">
        <span class="pull-right ${item.statColor}"> ${item.stat}${item.amount}</span>
       
          </div>
      </td>
      <td>
        <div class="event-wrap" style="text-align: center">
               ${item.person}
          </div>
      </td>
      <td>
        <div class="event-wrap" style="text-align: center">
               ${item.id}
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
 
            
    <div class="container">
    <div class="main-body">
    
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb" class="main-breadcrumb">
            <br>
            </nav>
            <!-- /Breadcrumb -->
    
            <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
                <div class="card">
                <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                 
                    <img src="${user.gender==="Male"?avatarsMale[randomAvt()] : avatarsFemale[randomAvt()]}" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                        <h4>${user.username}</h4>
                        <p class="text-secondary mb-1">${user.occupation}</p>
                        <hr>
                        <div class="primary-btn">
                            <a class="btn btn-primary" href="${user.id}/transfer">Transfer Money</a>
                        </div>
                        
                        
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div class="col-md-8">
                <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${user.username}
                    </div>
                    </div>
                    <hr>
                    <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        ${user.email}
                    </div>
                    </div>
                    <hr>

                    <div class="row">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Current Balance</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      ${user.cb}
                    </div>
                    </div>
                       
                                
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Gender</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            ${user.gender}
                        </div>
                      </div>
                    <hr>
                    <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Age</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                            ${user.age}
                        </div>
                      </div>
                    <hr>
                    
                    
                    <div class="row">
                      <div class="col-sm-3">
                          <h6 class="mb-0">Address</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        ${user.address}
                      </div>
                      </div>
                </div>
                </div>

            </div>
            </div>

  <hr>
<div class="event-schedule-area-two bg-color pad100">
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <div class="section-title text-center">
                <div class="title-text">
                    <h2>Transaction Table</h2>
                </div>
               

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
                                    <th class="text-center" scope="col">Date</th>
                                    
                                    <th scope="col"><span class="pull-right"> Amount</span></th>
                                    <th scope="col" style="text-align: center">Sender/Reciever</th>
                                    <th scope="col" style="text-align: center">Transaction ID</th>
                                    
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







</div>
</div>

  


	`
	},
	title(){
		return "User"
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