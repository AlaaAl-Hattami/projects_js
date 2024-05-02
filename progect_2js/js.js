 
     let Books =[
   
     ]
  
      function storgeget(){
  
      let revers  = JSON.parse(localStorage.getItem("mybook"))
  
      if(revers == null){
          Books=[]
      }else{
        Books=revers ?? []
      }
  
  }   
          storgeget()
  
          function all(){
          let index=0
              
          document.getElementById("tasks").innerHTML=""
          for(i of Books){
              let x= 
              `
              <div class="tasks "  style="padding: 6px; ">
          <div class="task ${i.isdone ? '' : 'Done'}"style=" display: flex; height: 100px;  padding: 4px; ">
          <div  style=" display: inline; width: 70%;">
          <h2>${i.title}</h2>
          <div>
              <span  class="material-symbols-outlined">
                                      calendar_month
                                      </span>
          <span>${i.date}</span>
          </div>
          </div>
  
          <div style=" display: flex; justify-content: space-around; align-items: center; width: 25%; ">
          <button onclick="deletee(${index})" style="background-color: brown; color: white;" class="cir"><span class="material-symbols-outlined">
              delete </span>
              </button>
               ${i.isdone ? `
                  <button onclick="ceckit(${index})"  style="background-color: rgb(120,0,30); color: white;" class="cir"><span class="material-symbols-outlined">
              cancel</span>
          </button>
                  ` : `
                  <button onclick="ceckit(${index})"  style="background-color: chartreuse; color: white;" class="cir"><span class="material-symbols-outlined">
              check</span>
          </button>
          
                  `}
                    
          <button onclick="editee(${index})" style="background-color: blue; color: white;" class="cir"><span class="material-symbols-outlined">  edit</span></button>
  
          </div>
          </div>  
          </div>
              `
              document.getElementById("tasks").innerHTML +=x
            index++
          }
          }
          all()
  document.getElementById("btn").addEventListener("click",function(){
  
      let y= prompt("من فضلك ادخل الماده التي اتممتها التي تريد تسجيلها")
  let input= new Date()
  let date = input.getDay() + "/" + (input.getMonth()+1) + "/" + input.getFullYear()
      let arrneew={
          "title":y,
          "date":date,
          "isdone":true,
      }
      Books.push(arrneew)
    
  
      all()
  
  })
  
  
      //  حذف المهام
  
  function deletee(index){
   let z=Books[index]
   let con=confirm("هل انت متاكد من حذف هذه الماده : " + z.title)
   if(con==true){
      Books.splice(index,1)  
   } else{
      con==false
   }
   storagearr()
  
   all()
  }
  
          // تعديل المهام
  
  function editee(index){
      let z =Books[index]
  let pro= prompt("الرجاء ادخال الاسم الجديد للماده التي تريد تعديلها", z.title)
  z.title= pro
  storagearr()
  
   all()
  }
  function ceckit(index){
      let z =Books[index]
      if(z.isdone){
          z.isdone=false
      }else{
          z.isdone=true
      }
      storagearr()
  all()
  }
  
  function storagearr(index){
      let bookstring=JSON.stringify(Books)
      localStorage.setItem("mybook",bookstring)
      all()
  }
  
  