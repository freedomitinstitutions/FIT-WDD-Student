fetch(API,{
  method:"POST",
  body:JSON.stringify({action:"getAllStudents"})
})
.then(res=>res.json())
.then(data=>{
  let html="";
  for(let i=1;i<data.length;i++){
    html+=`
    <div>
      ${data[i][1]} - ${data[i][14]} Points - ${data[i][15]}
      <button onclick="approve('${data[i][0]}')">Approve</button>
    </div>
    `;
  }
  students.innerHTML=html;
});

function approve(id){
  fetch(API,{
    method:"POST",
    body:JSON.stringify({action:"approve",id:id})
  }).then(()=>location.reload());
}
