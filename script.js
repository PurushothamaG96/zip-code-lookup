const result = document.getElementsByClassName("result-datails")
const input = document.getElementById("input")
const btn = document.getElementById("btn")


btn.addEventListener("click", ()=>{
    if(input.value==="") return result[0].innerHTML = "<h1>Field is Empty</h1>"
    if(isNaN(input.value)) return result[0].innerHTML = "<h1>Fild must be ZIP codes and not Alphabets</h1>"
    const url =`https://api.postalpincode.in/pincode/${input.value}`;
    fetch(url)
	.then(res => res.json())
	.then(json =>{
        console.log(json)
        if(json[0].Status!=="Success") return result[0].innerHTML = "<h1>Enter Valid zip codes</h1>"
        let val = json[0].PostOffice[0]
        let innerElemets = `<p><b>ZIP Code:</b>${val.Pincode}</p>
        <p><b>City:</b>${val.District}</p>
        <p><b>State:</b>${val.State}</p>
        <p><b>Country:</b>${val.Country}</p>`
        result[0].innerHTML = innerElemets

    })
	.catch(err => console.error('error:' + err));
})
