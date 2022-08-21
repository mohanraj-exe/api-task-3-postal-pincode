document.querySelector("#search").addEventListener("click", async(e) => {
    e.preventDefault();
  
    var pincode = document.getElementById("pincode").value

    const fetchUrl = await fetch (`https://api.postalpincode.in/pincode/${pincode}`,{method: 'GET'})
    const data = await fetchUrl.json()
    data.forEach(ele =>{
        Object.keys(ele).forEach(key =>{
            if(key === 'PostOffice'){
                const resultData = ele[key]
                resultData.forEach(ele =>{
                    let tr = document.createElement("tr")
                    Object.keys(ele).forEach(key =>{
                        let td = document.createElement("td")
                        td.innerText = ele[key]
                        tr.append(td)
                    })
                    document.getElementById("tableBody").append(tr);
                })
            }
        })
    })
});


