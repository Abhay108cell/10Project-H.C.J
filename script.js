function calculateLove(){
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  
  if (name1==="" || name2===""){
    alert("please enter both names")
  } else{
    const lovePercentage = Math.floor(Math.random()*100+1)
    const result = document.getElementById("result")
  }

}

