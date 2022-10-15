const body= document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      HideMenu = body.querySelector(".btnHide");
      menu= body.querySelector(".menu")
      toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
      });
      HideMenu.addEventListener("click",()=>{
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

     