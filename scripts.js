// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// let image = document.getElementById("image");
// image.src = "./images/moon.jpg";

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// let text = document.getElementById("caption");
// text.innerHTML = "القمر"

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1

function planet(){
    // let image = document.getElementById("image");
    // let body = document.getElementById("body");
    // image.src = "./images/moon.jpg";
    // body.style.background = "gray";
    

    // let text = document.getElementById("caption");
    //  text.innerHTML = "القمر"

     if(document.getElementById("caption").innerHTML == "الشمس"){
        let image = document.getElementById("image");
        let text = document.getElementById("caption");
        image.src = "./images/sun.jpg";
        text.innerHTML = "القمر";
        document.body.style.background = "gray";

        
     } else if(document.getElementById("caption").innerHTML == "القمر");
        image.src = "./images/moon.jpg";
        text.innerHTML = "الشمس";
        document.body.style.background = "white";
}

// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
