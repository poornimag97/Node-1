fetch("http://localhost:5000/").then(res=>res.json()).then(data=>{
    
    let div=document.getElementById("id01")
    let output=""
    data.forEach(employee => {
        output+=`<h1>${employee.empname}</h1>`
    });
    div.innerHTML=output
    
})