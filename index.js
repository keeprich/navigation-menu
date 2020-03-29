function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.body.style.backgroundColor = "rgba(255,0,0,0.3)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
      document.body.style.backgroundColor = "white";
  
  
  }


//   
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// 




// 




function openNav1() {
    document.getElementById("mySidenav1").style.width = "250px";
    document.getElementById("main1").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(255,0,0,0.4)";
    // document.getElementById("ope_me").style.color = "rgba(255,0,0,0.4)";
    document.getElementById("ope_me").style.visibility = "hidden";

     
  }
  
  function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
    document.getElementById("main1").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("ope_me").style.color = "red";
    document.getElementById("ope_me").style.visibility = "visible";


  }


//   