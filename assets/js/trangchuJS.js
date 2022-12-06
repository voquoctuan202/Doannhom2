// Hiển thị đa ngôn ngữ cho trang chủ
let langs = document.querySelector(".langs"), 
     link = document.querySelectorAll("a"),
     char_menu1 = document.querySelector(".char_menu1"),
     char_menu2 = document.querySelector(".char_menu2"),
     char_menu3 = document.querySelector(".char_menu3"),
     char_menu4 = document.querySelector(".char_menu4"),
     char_menu5 = document.querySelector(".char_menu5"),
     char_menu6 = document.querySelector(".char_menu6"),
     // char_menu7 = document.querySelector(".char_menu7"),
     // char_menu8 = document.querySelector(".char_menu8"),
     // char_menu9 = document.querySelector(".char_menu9"),
     heading1 = document.querySelector(".heading1"),
     heading2 = document.querySelector(".heading2");
link.forEach(el=>{                    
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")
          char_menu1.textContent = data[attr].char_menu1
          char_menu2.textContent = data[attr].char_menu2
          char_menu3.textContent = data[attr].char_menu3
          char_menu4.textContent = data[attr].char_menu4
          char_menu5.textContent = data[attr].char_menu5
          char_menu6.textContent = data[attr].char_menu6
          // char_menu7.textContent = data[attr].char_menu7
          // char_menu8.textContent = data[attr].char_menu8
          // char_menu9.textContent = data[attr].char_menu9
          heading1.textContent = data[attr].heading1
          heading2.textContent = data[attr].heading2
     })
})

let data = {
     vietnamese: {
        char_menu1: "Trang chủ",
        char_menu2: "Sản phẩm",
        char_menu3: "Tham gia",
        char_menu4: "Đăng nhập",
        char_menu5: "Đăng kí",
        char_menu6: "Liên hệ",
     //    char_menu7: "Góp ý",
     //    char_menu8: "Bảo hành",
     //    char_menu9: "Đổi trả",
        heading1: "Thương hiệu nổi bật",
        heading2: "Sản phẩm bán chạy",
     },
     english: {
        char_menu1: "Homepage",
        char_menu2: "Product",
        char_menu3: "Join",
        char_menu4: "Login",
        char_menu5: "Sign Up",
        char_menu6: "Contact",
     //    char_menu7: "Suggest",
     //    char_menu8: "Warranty",
     //    char_menu9: "Refund",
        heading1: "Best brand",
        heading2: "Top seller",
     }
}