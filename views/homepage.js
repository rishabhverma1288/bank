const nav = require("../components/navbar")
const init = {
    body(){
        return `
        <link rel="stylesheet" href="css/index.css">
        
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="public/css/prodlist.css">

    ${nav}

    <style>
    body {
      text-align: center;
      padding: 40px 0;
      ;
    }
      h1 {
        color: #88B04B;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-weight: 900;
        font-size: 40px;
        margin-bottom: 10px;
      }
      p {
        color: #404F5E;
        font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
        font-size:20px;
        margin: 0;
      }
    i {
      color: #9ABC66;
      font-size: 100px;
      line-height: 200px;
      margin-left:-15px;
    }
    .card {
      background: white;
      padding: 60px;
      border-radius: 4px;
      box-shadow: 0 2px 3px #C8D0D8;
      display: inline-block;
      margin: 0 auto;
    }
  </style>
  <br>
  <div>
    <h2>Hello, Welcome to Banking Application</h2><br>
    <h4>For - thesparksfoundation</h4>
  </div>

        `
    },
    

}

module.exports = init


// center a div?