// Write all your Javascript here!
function initialize(){

    let bodyEl = document.querySelector(".card ");
         
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata`,
     success: function(data){
        console.log(data);
      
        
    bodyEl = document.querySelector(".card").innerHTML += ` <div class="card mb-3">
                        <img class="card-img-top" src="${data.imageURL}" alt="Card image cap" width="500px" height="300px">
                        <div class="card-body">
    
                        <p class="card-text date"><i class="fas fa-calendar-alt"></i>${data.date}</p>
                        <p class="card-text community"><i class="fas fa-user"></i>by </p>
                        </div>
                        </div>
                        <div class="para">
                        <h3>${data.info.heading}</h3>
                        <div class="details">${data.info.description}</div>
                    </div>`
    
            //  document.querySelector(".card-img-top").style ["background-image"] = `url(${data.imageURL})`;
            //  document.querySelector(".card-text date").innerHTML = `<p class="card-text date"><i class="fas fa-calendar-alt"></i>${data.date}</p>`;
            //  document.querySelector("h3").innerHTML = `<h3>${data.info.heading}</h3>`
            //  document.querySelector(".details").innerHTML = data.info.description;
     }
    
     });
    
}







