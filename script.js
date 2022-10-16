const body= document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      HideMenu = body.querySelector(".btnHide");
      menuicon = body.querySelector(".hm");
      menu= body.querySelector(".menu")
      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });
      HideMenu.addEventListener("click",()=>{
        menu.classList.toggle("close");
      })
      menuicon.addEventListener("click",()=>{
        menu.classList.toggle("close");
      })
      function openTab(tabname) {
        var i;
        var x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
        //   x[i].style.display = "none";
          x[i].classList.remove("active");
        }
        // document.getElementById(tabname).style.display = "block";
        document.getElementById(tabname).classList.add("active");
      }

     
      function search_project(){
        let input = document.getElementById('searchbar').value;
        let count= document.getElementById('cardcount').value;
        input= input.toLowerCase();
        let x = document.getElementsByClassName('card');
        for(var i=0; i< x.length;i++){
          if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
        }
      }