// document.querySelector("#contentLH form#baoHanh").hidden = true;
// var selectNode = document.querySelector("#contentLH select")
// selectNode.addEventListener("change",function()
// {
//     var gopY    = document.querySelector("#contentLH form#gopY");
//     var baoHanh = document.querySelector("#contentLH form#baoHanh");
//     if(this.value == 2)
//     {
//         gopY.hidden     = true;
//         baoHanh.hidden  = false;
//     }
//     else{
//         gopY.hidden     = false;
//         baoHanh.hidden  = true;
//     }
// });

// Js trang sản phẩm

var lang;
if(lang === undefined){
        lang = "vi-vn";
}

function langVN(){
        lang = "vi-vn";
        showNoiChao();
        mutilang();
        show_cart();
}
function langUS(){
        lang = "en-us";
        showNoiChao();
        mutilang();
        show_cart();
}
function ready(){
    
    if(window.innerWidth < 700){
        $('#mainsanpham').removeClass();
        $('#mainsanpham').addClass('maingiohang2');
        $('#danhmucsanpham').removeClass();
        $('#danhmucsanpham').addClass('danhmuc2');
        $('#viewsanpham').removeClass();
        $('#viewsanpham').addClass('sanpham2');
        $('#pro1 #pro2 #pro3 #pro4 #pro5 #pro6 #pro7 #pro8').removeClass();
        $('#pro1 #pro2 #pro3 #pro4 #pro5 #pro6 #pro7 #pro8').addClass('product2');
        $('.search_button').css({"background-color": "rgb(178, 57, 57)", "magin-left":"5px"});
        $('#logo').hide();

    }else{
        $('#mainsanpham').removeClass();
        $('#mainsanpham').addClass('maingiohang');
        $('#danhmucsanpham').removeClass();
        $('#danhmucsanpham').addClass('danhmuc');
        $('#viewsanpham').removeClass();
        $('#viewsanpham').addClass('sanpham');
        $('#pro1 #pro2 #pro3 #pro4 #pro5 #pro6 #pro7 #pro8').removeClass();
        $('#pro1 #pro2 #pro3 #pro4 #pro5 #pro6 #pro7 #pro8').addClass('product');
        $('#logo').show();
    }
    langVN();
    showNoiChao();
}
function readyGH(){
        mutilang();
    }
var d = true;

function showNauNuong(){
    if(d==true){
        $('#shownaunnuong').show();
        $('#iconNN').removeClass();
        $('#iconNN').addClass("fa fa-caret-up");
        d=false;
    }else{
        $('#shownaunnuong').hide();
        $('#iconNN').removeClass();
        $('#iconNN').addClass("fa fa-caret-down");
        d=true;
    }
} 
var itemSanPham={
        "0":{"vi-vn":{ "name":"NỒI INOX ","price":150000,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
                "des":"Nồi được làm từ chất liệu inox đẹp mắt bền bỉ theo thời gian"},
             "en-us":{ "name":"POT INOX ","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
                "des":"The pot is made of beautiful stainless steel that is durable over time"}
        },
        "1":{"vi-vn":{ "name":"BỘ NỒI SUNHOUSE","price":780000,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Bộ nồi được làm từ chất liệu inox do hãng Sunhouse sản xuất"},
             "en-us":{ "name":"FULL SET OF POTS SUNHOUSE","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"The pot set is made of stainless steel manufactured by Sunhouse"}
        },
        "2":{"vi-vn": { "name":"BỘ NỒI GỐM SỨ","price":1500000,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Bộ nồi làm từ gốm sứ tạo cho đồ ăn luôn thơm ngon"},
             "en-us":{ "name":"CERAMIC KITCHEN SET","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Bộ nồi làm từ gốm sứ tạo cho đồ ăn luôn thơm ngon"}
        },
        "3":{"vi-vn": { "name":"NỒI THỦY TINH","price":800000,"photo":"assets/img/sanpham/naunuong/noi-thuy-tinh-visions.jpg",
                "des":"Sản xuất từ chất liệu thủy tinh chịu nhiệt"},
             "en-us":{ "name":"GLASS COOKER","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Manufactured from heat-resistant glass"}
        },
        "4":{"vi-vn":{ "name":"CHẢO BẾP TỪ SUNHOUSE","price":350000,"photo":"assets/img/sanpham/naunuong/chao-bep-tu-Sunhousepg.jpg",
                "des":"Thiết kế dẹp mắt chắc chắn, bền bỉ "},

             "en-us":{ "name":"KITCHEN WATCH FROM SUNHOUSE","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Rugged, durable eye-catching design"}
        },
        "5":{"vi-vn":{ "name":"CHẢO BERNDES SAUTEPAN","price":1200000,"photo":"assets/img/sanpham/naunuong/Chao-Berndes-Sautepan-Inse-24cm-2.jpg",
        "des":"Hàng cao cấp nhập khẩu từ Đức"},
                "en-us":{ "name":"BERNDES SAUTEPAN Wok","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"High-quality goods imported from Germany"}
        },
        "6":{"vi-vn":{ "name":"CHẢO INOX CAO CẤP","price":300000,"photo":"assets/img/sanpham/naunuong/chaoinox.jpg",
        "des":"Chảo có nhiều size phù hợp với mọi nhu cầu"},

                "en-us":{ "name":"PREMIUM stainless steel pans","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Pans come in a variety of sizes to suit all needs"}
        },
        "7":{"vi-vn":{ "name":"CHẢO THÉP CÔNG NGHIỆP","price":900000,"photo":"assets/img/sanpham/naunuong/ChaoThep.jpg",
        "des":"Được gia công từ thép chắc chắn, chuyên dùng cho nhà hàng"},


                "en-us":{ "name":"INDUSTRIAL STEEL WAYS","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Crafted from sturdy steel, specialized for restaurants"}
        },
        

        "8":{   "vi-vn":{ "name":"COMBO 5 MÓN ĐỒ NẤU GỖ ","price":245000,"photo":"assets/img/sanpham/naunuong/combo5MonGo.jpg",
        "des":"Combo 5 món đồ nấu gỗ cao cấp như hình với giá siêu ưu đãi"},

                "en-us":{ "name":"COMBO 5 WOODEN FOOD ","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
        "des":"Combo of 5 high-class wood cooking utensils as shown in the picture at a super discount"}
        },
        "9":{"vi-vn":{ "name":"COMBO 10 MUỖNG CÀ PHÊ","price":12000,"photo":"assets/img/sanpham/naunuong/ComBo-6-Muong-Ca-Phe.jpg",
        "des":"Muỗng được thiết kế với chất liệu inox không gỉ chắc chắn "},

        "en-us":{ "name":"COMBO 10 Tbsp Coffee","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"The spoon is designed with sturdy stainless steel material"}
        },
        "10":{"vi-vn":{ "name":"BỘ 5 MUỖNG ĂN CƠM","price":15000,"photo":"assets/img/sanpham/naunuong/combo5muong.jpg",
        "des":"Được làm từ chất liệu inox bền chắc, dễ dàng vệ sinh"},

        "en-us":{ "name":"SET of 5 TABLETS OF RICE","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Made of durable stainless steel, easy to clean"}
        },
        "11":{"vi-vn":{ "name":"BỘ 10 MUỖNG NHỰA","price":10000,"photo":"assets/img/sanpham/naunuong/combo10muongnhua.jpg",
        "des":"Bộ gồm 10 muỗng nhựa nhiều màu sắc lựa chọn"},

        "en-us":{ "name":"SET of 10 PLASTIC SPICES","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Set of 10 colorful plastic spoons to choose from"}
        },
        "12":{"vi-vn":{ "name":"BỘ ĐŨA GỖ","price":19000,"photo":"assets/img/sanpham/naunuong/DuaGo.jpg"
        ,"des":"Set includes 10 pairs of wooden chopsticks, high quality Vietnamese goods"},


        "en-us":{ "name":"WOODEN DISK SET","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Rugged, durable eye-catching design"}
        },
        "13":{"vi-vn":{ "name":"BỘ ĐŨA NHỰA","price":12000,"photo":"assets/img/sanpham/naunuong/DuaNhua.jpg"
        ,"des":"Bộ gồm 10 đôi đũa nhựa sang trọng, chịu được nhệt độ cao"},

                "en-us":{ "name":"PLASTIC DISK SET","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Set includes 10 pairs of luxury plastic chopsticks, resistant to high temperatures"}
        },
        "14":{"vi-vn":{ "name":"VÁ CANH CAO CẤP","price":100000,"photo":"assets/img/sanpham/naunuong/Muoi-muc-canh-mau-den.jpg",
        "des":"Vá được thiết kế giả đá sang trọng, bằng chất liệu nhựa chịu nhiệt "},


                "en-us":{ "name":"PREMIUM SOUND PACK","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"The patch is designed with luxurious imitation of stone, made of heat-resistant plastic material"}
        },
        "15":{"vi-vn":{ "name":"VÁ CANH CAO CẤP","price":100000,"photo":"assets/img/sanpham/naunuong/Muoi-muc-canh-mau-den.jpg",
        "des":"Vá được thiết kế giả đá sang trọng, bằng chất liệu nhựa chịu nhiệt "},
                "en-us":{ "name":"MULTI-USE Frying Patch","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"The patch is designed with luxurious imitation of stone, made of heat-resistant plastic material"}
        },
      

        "16":{  "vi-vn":{ "name":"NỒI CƠM ĐIỆN SUNHOUSE ","price":850000,"photo":"assets/img/sanpham/noidien/noicomdienSunhouse.jpg", 
        "des":"Nồi cơm điện với dung tích 1.8L phù hợp với gia đình"},
                "en-us":{ "name":"SUNHOUSE ELECTRIC COOKER ","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
        "des":"Rice cooker with a capacity of 1.8L is suitable for families"}
        },
        "17":{"vi-vn":{ "name":"BỘ NỒI SUNHOUSE","price":780000,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Bộ nồi được làm từ chất liệu inox do hãng Sunhouse sản xuất"},
        "en-us":{ "name":"ZOJIRUSHI ELECTRIC RICE KITCHEN","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"The best selling rice cooker imported from Japan in Vietnam"}
        },
        "18":{"vi-vn":{ "name":"NỒI ÁP SUẤT NAGAKAWA","price":1200000,"photo":"assets/img/sanpham/noidien/noiapsuatNagakawa.jpg",
        "des":"Nồi được sản xuất tại Nhật Bản nhập khẩu chính hãng "},

        "en-us":{ "name":"PRESSURE KITCHEN NAGAKAWA","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"The pot is made in Japan and imported genuine"}
        },
        "19":{"vi-vn":{ "name":"NỒI CHIÊN NƯỚNG TEFAL","price":2100000,"photo":"assets/img/sanpham/noidien/noichienTefal.jpg",
        "des":"Nồi nhập khẩu với 2 công dụng chiên và nướng không khói "},

        "en-us":{ "name":"TEFAL GRILL","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Imported pot with 2 functions of frying and grilling without smoke"}
        },
        "20":{"vi-vn":{ "name":"BẾP ĐIỆN TỪ MIDEA","price":1900000,"photo":"assets/img/sanpham/noidien/Bep-dien-tu-Midea.jpg",
                "des":"Bếp có mặt kính chống trầy, tiết kiệm điện"},

        "en-us":{ "name":"ELECTRONIC KITCHEN MIDEA","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"The stove has anti-scratch, energy-saving glass"}
        },
        "21":{"vi-vn":{ "name":"BẾP ĐIỆN CANZY","price":2600000,"photo":"assets/img/sanpham/noidien/bepdientuCanzy.jpg",
        "des":"Bếp điện từ Canzy là sản phẩm cao cấp nhập khẩu từ châu Âu"},

                "en-us":{ "name":"ELECTRIC KITCHEN CANZY","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Canzy induction cooker is a high-class product imported from Europe"}
        },
        "22":{"vi-vn":{ "name":"BẾP GA IKURA","price":900000,"photo":"assets/img/sanpham/noidien/bepgaIkura.jpg",
        "des":"Bếp ga 2 bếp, mặt kính đen bóng loáng sang trọng "},
                "en-us":{ "name":"IKURA gas stove","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Gas stove with 2 stoves, luxurious glossy black glass"}
        },
        "23":{"vi-vn":{ "name":"LÒ NƯỚNG ALASKA","price":940000,"photo":"assets/img/sanpham/noidien/lonuongAlaska.jpg",
        "des":"Lò nướng alaska loại lò khai nướng, công suất 1500W"},   
                "en-us":{ "name":"ALASKA Oven Oven","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Alaska oven type oven, capacity 1500W"}
        },


        "24":{   "vi-vn":{ "name":"MÁY XAY SINH TỐ SUNHOUSE ","price":600000,"photo":"assets/img/sanpham/noidien/May-xay-sinh-to-da-nang-Sunhouse.jpg",
        "des":"Máy xay sinh tố Sunhouse công suất 2000W vô cùng mạnh mẽ, tặng thêm 2 cối xay"},
                "en-us":{ "name":"SUNHOUSE BLICHER","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
        "des":"Sunhouse blender with a capacity of 2000W is extremely powerful, giving away 2 more mills"}
        },
        "25":{  "vi-vn":{ "name":"MÁY XAY SINH TỐ KANGAROO ","price":550000,"photo":"assets/img/sanpham/noidien/may-xay-sinh-to-kangaroo.jpg",
                "des":"Máy xay sinh tố Kangaru công suất 1800W , dung tích lớn, tăng thêm 2 cối xay"},
        "en-us":{ "name":"KANGAROO SUPPLY MACHINE","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Kangaru blender with capacity of 1800W, large capacity, increased by 2 mills"}
        },
        "26":{  "vi-vn":{ "name":"MÁY ÉP TRÁI CÂY COMET","price":750000,"photo":"assets/img/sanpham/noidien/mayeptraicayComet.jpg",
                "des":"Máy ép trái cây Comet công suất 2000W , ép được hầu hết trái cấy"},
        "en-us":{ "name":"COMET . juicing machine","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Comet fruit juicer 2000W capacity, squeezing most of the transplanted fruit"}
        },
        "27":{"vi-vn":{ "name":"MÁY ÉP TRÁI CÂY PHILIPS","price":700000,"photo":"assets/img/sanpham/noidien/mayeptraicayPhilips.jpg",
                "des":"Máy ép trái cây Comet công suất 2400W, là sản phẩm bán chạy nhất hiện nay"},
        "en-us":{ "name":"PHILIPS juicing machine","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Comet juicer with a capacity of 2400W, the best-selling product today"}
        },
        "28":{"vi-vn":{ "name":"MÁY XAY THỊT MISHIO","price":680000,"photo":"assets/img/sanpham/noidien/mayxaythitMishio.jpg",
        "des":"Máy xay thịt Mishio cối xay được làm từ thủy tinh chắc chắn "},

        "en-us":{ "name":"MISHIO MEAT MACHINE","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Mishio meat grinder mill is made from sturdy glass"}
        },
        "29":{"vi-vn":{ "name":"MÁY RỬA CHÉN MINI","price":4200000,"photo":"assets/img/sanpham/noidien/mayruachenmini.jpeg",
        "des":"Máy rửa chén nhỏ gọn phù hợp với gia đình "},


                "en-us":{ "name":"MINI Dishwasher","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Compact dishwasher suitable for families"}
        },
        "30":{"vi-vn":{ "name":"MÁY RỬA CHÉN TEKA","price":7000000,"photo":"assets/img/sanpham/noidien/may-rua-chen-teka.jpg",
        "des":"Máy rửa chén lớn rửa được nhiều chén dĩa hơn"},



                "en-us":{ "name":"Dishwasher TEKA","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Large dishwashers can wash more dishes"}
        },
        "31":{"vi-vn":{ "name":"MÁY RỬA CHÉN CÔNG NGHIỆP","price":15000000,"photo":"assets/img/sanpham/noidien/mayruachencongnhiep.jpg",
        "des":"Máy rửa rất lớn quy mô công nghiệp"},
                "en-us":{ "name":"INDUSTRIAL Dishwasher","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Very large industrial-scale washing machine"}
        },
    

        "32":{  "vi-vn":{ "name":"CHỔI CỎ QUÉT NHÀ V1","price":30000,"photo":"assets/img/sanpham/vesinh/choi-co-quet-nha.jpg",
        "des":"Chổi cỏ làm thủ công có lượt mua cao nhất"},
                "en-us":{ "name":"HOME Sweeping Broom V1","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
        "des":"Handmade grass broom has the highest purchase"}
        },
        "33":{"vi-vn":{ "name":"CHỔI CỎ CÁN NHỰA V2","price":35000,"photo":"assets/img/sanpham/vesinh/choicocannhuajpg.jpg",
        "des":"Sản phẩm cải tiến hơn với bảng to và bền hơn"},

        "en-us":{ "name":"BRUSH PLASTIC HANDLE V2","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Improved product with bigger and more durable boards"}
        },
        "34":{"vi-vn":{ "name":"CHỔI NHỰA CAO CẤP","price":37000,"photo":"assets/img/sanpham/vesinh/Choinhua.jpg",
        "des":"Chổi được làm từ nhựa bền chắc, có thể quét nước"},

        "en-us":{ "name":"PREMIUM PLASTIC BRUSH","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"The broom is made of durable plastic, can sweep water"}
        },
        "35":{"vi-vn":{ "name":"CHỔI QUÉT TRẦN NHÀ","price":70000,"photo":"assets/img/sanpham/vesinh/choi-quet-tran-nha.jpg",
                "des":"Chổi làm từ nhựa, cây nối có thể kéo dài đến 3m"},

        "en-us":{ "name":"Ceiling Sweeper","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"The broom is made of plastic, the extension tree can extend up to 3m"}
        },
        "36":{"vi-vn":{ "name":"CỌ TOILET NHỰA","price":35000,"photo":"assets/img/sanpham/vesinh/co-toilet-nhua.jpg",
        "des":"Cọ toilet bằng nhựa thiết kế tròn dễ vệ sinh"},

        "en-us":{ "name":"PLASTIC TOILET","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Plastic toilet brush with round design is easy to clean"}
        },
        "37":{"vi-vn":{ "name":"CỌ ĐA NĂNG NHỰA","price":39000,"photo":"assets/img/sanpham/vesinh/codanang.jpg",
        "des":"Được thiết kế đặc biệt dễ dàng vệ sinh các ngóc ngách của vật dụng"},
                "en-us":{ "name":"MULTI-FUNCTION PLASTIC DOOR","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Specially designed for easy cleaning of nooks and crannies"}
        },
        "38":{"vi-vn":{ "name":"BÀN CHẢI NHỰA","price":20000,"photo":"assets/img/sanpham/vesinh/banchainhua.jpg",
        "des":"Bàn chải nhựa dẻo, bệnh bỉ, dễ dàng vệ sinh"},

                "en-us":{ "name":"PLASTIC BRUSH","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Plastic brush, durable, easy to clean"}
        },
        "39":{"vi-vn":{ "name":"KHĂN LAU","price":10000,"photo":"assets/img/sanpham/vesinh/khanlau.jpg",
        "des":"Khăn được làm từ vải mềm, thấm nước, khô nhanh"},

                "en-us":{ "name":"WIPER","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Towels are made of soft, absorbent, quick-drying fabric"}
        },


        "40":{   "vi-vn":{ "name":"BỘT TẨY RỬA VETO KOREAN","price":120000,"photo":"assets/img/sanpham/vesinh/botayruaveto.jpg",
        "des":"Bột có thể tẩy rửa các vết bẩn cứng đầu, không hại da tay"},

                "en-us":{ "name":"VETO KOREAN WASHING POWDER","price":8,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
        "des":"Powder can clean stubborn stains, not harmful to hands"}
        },
        "41":{  "vi-vn":{ "name":"BỘ VỆ SINH MÁY GIẶT","price":150000,"photo":"assets/img/sanpham/vesinh/botvesinhlonggiatHanQuoc.jpg",
        "des":"Bột có xuất xứ từ Hàn Quốc có khả năng tẩy sạch lồng giặt"},

        "en-us":{ "name":"WASHING MACHINE CLEANING SET","price":32,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Powder from Korea has the ability to clean the washing tub"}
        },
        "42":{  "vi-vn":{ "name":"DUNG DỊCH VỆ SINH TỦ LẠNH","price":90000,"photo":"assets/img/sanpham/vesinh/Dung-dich-ve-sinh-tu-lanh.jpg",
        "des":"Dung dịch chuyên dụng để khử khuẩn, khử mùi cho tủ lạnh"},

        "en-us":{ "name":"Refrigerator cleaning solution","price":62,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Specialized solution for disinfecting, deodorizing for refrigerators"}
        },
        "43":{"vi-vn":{ "name":"CHAI TẨY RỬA ĐA NĂNG","price":89000,"photo":"assets/img/sanpham/vesinh/tayruadanang.jpg",
        "des":"Tẩy rửa các vết bẩn ở nhà bếp, phòng khách, nhà vệ sinh"},

        "en-us":{ "name":"MULTI-FUNCTIONAL CLEANING BOTTLE","price":40,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Cleaning stains in the kitchen, living room, toilet"}
        },
        "44":{"vi-vn":{ "name":"TẨY CẶN CANXI JULI","price":80000,"photo":"assets/img/sanpham/vesinh/taycancanxi.jpg",
        "des":"Dung dịch chuyên dụng tẩy các mảng cặn canxi bám lâu ngày"},


        "en-us":{ "name":"CALCIUM CLEANING JULI","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Specialized solution to remove long-standing calcium deposits"}
        },
        "45":{"vi-vn":{ "name":"NƯỚC RỬA KÍNH GIFT","price":35000,"photo":"assets/img/sanpham/vesinh/nuocruakinh.jpg",
        "des":"Nước rửa kính được dùng nhiều nhất Việt Nam"},

                "en-us":{ "name":"GIFT . GLASS WASHING WATER","price":60,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"The most used glass cleaner in Vietnam"}
        },
        "46":{"vi-vn":{ "name":"NƯỚC RỬA TAY ZYTO","price":40000,"photo":"assets/img/sanpham/vesinh/nuocruatayZYTO.jpg",
        "des":"Nước rửa tay với mùi thơm dễ chịu diệt được 99% vi khuẩn"},

                "en-us":{ "name":"ZYTO HAND Sanitizer","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Hand sanitizer with pleasant fragrance kills 99% of bacteria"}
        },
        "47":{"vi-vn":{ "name":"VIM ZERO TOILET CLEANING","price":52000,"photo":"assets/img/sanpham/vesinh/vim.jpg",
        "des":"Vim được bình chọn là nước tẩy bồn cầu tốt nhất hiện nay"},
                "en-us":{ "name":"INDUSTRIAL Dishwasher","price":15,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
        "des":"Vim was voted as the best toilet cleaner today"}
        },
        "tien":{
                "vi-vn":"đ",
                "en-us":"$"
        }

}
var labels={
        "trangchu":{
                "vi-vn": "Trang chủ",
                "en-us": "Home"
        },
        "sanpham":{
                "vi-vn": "Sản Phẩm",
                "en-us": "Product"
        },
        "sanphamH":{
                "vi-vn": "Sản Phẩm",
                "en-us": "Product"
        },
        "thamgia":{
                "vi-vn": "Tham gia",
                "en-us": "Join"
        },
        "dangnhap":{
                "vi-vn": "Đăng nhập",
                "en-us": "Login"
        },
        "dangki":{
                "vi-vn": "Đăng kí",
                "en-us": "Register"
        },
        "lienhe":{
                "vi-vn": "Liên hệ",
                "en-us": "Contract"
        },
        "gopy":{
                "vi-vn": "Góp ý",
                "en-us": "Feedback"
        },
        "baohanh":{
                "vi-vn": "Bảo hành",
                "en-us": "Insurance"
        },
        "doitra":{
                "vi-vn": "Trang chủ",
                "en-us": "Product Return"
        },


        "danhmuc":{
                "vi-vn": "Danh mục",
                "en-us": "Category"
        },
        "spnaunuong":{
                "vi-vn": "Đồ nầu nướng",
                "en-us": "Product"
        },
        "spnoichao":{
                "vi-vn": "Nồi - chảo",
                "en-us": "Pots - Pan"
        },
        "spmuongdua":{
                "vi-vn": "Muỗng - đũa",
                "en-us": "Spoon -Chopsticks"
        },
        "spdientu":{
                "vi-vn": "Đồ điện tử",
                "en-us": "Electronice device"
        },
        "spnoidien":{
                "vi-vn": "Nồi điện",
                "en-us": "Pot electric"
        },
        "spmaydien":{
                "vi-vn": "Máy điện",
                "en-us": "Machine electric"
        },
        "spvesinh":{
                "vi-vn": "Dụng cụ vệ sinh",
                "en-us": "Tool clean"
        },
        "spdungcu":{
                "vi-vn": "Dụng cụ",
                "en-us": "Tool "
        },
        "spdungdich":{
                "vi-vn": "Dung dịch",
                "en-us": "Cleaning chemicals"
        },
        "soluongL":{
                "vi-vn": "Số lượng",
                "en-us": "Quantity"
        },
      

        "hoadonG":{
                "vi-vn": "Hóa Đơn",
                "en-us": "BILL"
        },
        "sosanphamG":{
                "vi-vn": "Số sản phẩm",
                "en-us": "Product number"
        },
        "tongtienG":{
                "vi-vn": "Tổng tiền",
                "en-us": "Cost"
        },
        "chietkhauG":{
                "vi-vn": "Chiết khấu",
                "en-us": "Discount"
        },
        "tongsotienG":{
                "vi-vn": "Thực trả",
                "en-us": "Total"
        },
        "chitietdonhangG":{
                "vi-vn": "Chi tiết đơn hàng",
                "en-us": "ORDER DETAIL"
        },
        "mausanphamG":{
                "vi-vn": "Mẫu sản phẩm",
                "en-us": "Photo"
        },
        "tensanphamG":{
                "vi-vn": "Tên sản phẩm",
                "en-us": "Name"
        },
        "soluongG":{
                "vi-vn": "Số lượng",
                "en-us": "Quanlity"
        },
        "giaG":{
                "vi-vn": "Giá",
                "en-us": "Cost"
        },
        "thanhtienG":{
                "vi-vn": "Thành tiền",
                "en-us": "Toltal"
        },
        "xacnhanG":{
                "vi-vn": "Xác nhận đơn hàng",
                "en-us": "OK"
        },
        "tienIcon":{
                "vi-vn": "đ",
                "en-us": "$"
        },

}
function mutilang(){
        $("#trangchu").html(labels["trangchu"][lang]).attr("title",labels["trangchu"][lang]);
        $("#sanpham").html(labels["sanpham"][lang]).attr("title",labels["sanpham"][lang]);
        $("#thamgia").html(labels["thamgia"][lang]).attr("title",labels["thamgia"][lang]);
        $("#dangnhap").html(labels["dangnhap"][lang]).attr("title",labels["dangnhap"][lang]);
        $("#dangki").html(labels["dangki"][lang]).attr("title",labels["dangki"][lang]);
        $("#lienhe").html(labels["lienhe"][lang]).attr("title",labels["lienhe"][lang]);
        $("#gopy").html(labels["gopy"][lang]).attr("title",labels["gopy"][lang]);
        $("#baohanh").html(labels["baohanh"][lang]).attr("title",labels["baohanh"][lang]);
        $("#doitra").html(labels["doitra"][lang]).attr("title",labels["doitra"][lang]);

        $("#danhmuc").html(labels["danhmuc"][lang]).attr("title",labels["danhmuc"][lang]);
        $("#spnaunuong").html(labels["spnaunuong"][lang]).attr("title",labels["spnaunuong"][lang]);
        $("#spnoichao").html(labels["spnoichao"][lang]).attr("title",labels["spnoichao"][lang]);
        $("#spmuongdua").html(labels["spmuongdua"][lang]).attr("title",labels["spmuongdua"][lang]);
        $("#spdientu").html(labels["spdientu"][lang]).attr("title",labels["spdientu"][lang]);
        $("#spnoidien").html(labels["spnoidien"][lang]).attr("title",labels["spnoidien"][lang]);
        $("#spmaydien").html(labels["spmaydien"][lang]).attr("title",labels["spmaydien"][lang]);
        $("#spvesinh").html(labels["spvesinh"][lang]).attr("title",labels["spvesinh"][lang]);
        $("#spdungcu").html(labels["spdungcu"][lang]).attr("title",labels["spdungcu"][lang]);
        $("#spdungdich").html(labels["spdungdich"][lang]).attr("title",labels["spdungdich"][lang]);
        $("#sanphamH").html(labels["sanphamH"][lang]).attr("title",labels["sanphamH"][lang]);
        $(".soluongH").html(labels["soluongL"][lang]).attr("title",labels["soluongL"][lang]);

        $("#hoadonG").html(labels["hoadonG"][lang]).attr("title",labels["hoadonG"][lang]);
        $("#sosanphamG").html(labels["sosanphamG"][lang]).attr("title",labels["sosanphamG"][lang]);
        $("#tongtienG").html(labels["tongtienG"][lang]).attr("title",labels["tongtienG"][lang]);
        $("#chietkhauG").html(labels["chietkhauG"][lang]).attr("title",labels["chietkhauG"][lang]);
        $("#tongsotienG").html(labels["tongsotienG"][lang]).attr("title",labels["tongsotienG"][lang]);
        $("#chitietdonhangG").html(labels["chitietdonhangG"][lang]).attr("title",labels["chitietdonhangG"][lang]);
        $("#mausanphamG").html(labels["mausanphamG"][lang]).attr("title",labels["mausanphamG"][lang]);
        $("#soluongG").html(labels["soluongG"][lang]).attr("title",labels["soluongG"][lang]);
        $("#giaG").html(labels["giaG"][lang]).attr("title",labels["giaG"][lang]);
        $("#thanhtienG").html(labels["thanhtienG"][lang]).attr("title",labels["thanhtienG"][lang]);
        $("#xacnhanG").html(labels["xacnhanG"][lang]).attr("title",labels["xacnhanG"][lang]);
        $("#tensanphamG").html(labels["tensanphamG"][lang]).attr("title",labels["tensanphamG"][lang]);
}
function showNoiChao(){   
    
    
    $('#tensp1').html(itemSanPham[0][lang].name);
    $("#tensp2").html(itemSanPham[1][lang].name);
    $("#tensp3").html(itemSanPham[2][lang].name);
    $("#tensp4").html(itemSanPham[3][lang].name);
    $("#tensp5").html(itemSanPham[4][lang].name);
    $("#tensp6").html(itemSanPham[5][lang].name);
    $("#tensp7").html(itemSanPham[6][lang].name);
    $("#tensp8").html(itemSanPham[7][lang].name);


    $("#motasp1").html( itemSanPham[0][lang].des);
    $("#motasp2").html( itemSanPham[1][lang].des);
    $("#motasp3").html( itemSanPham[2][lang].des);
    $("#motasp4").html( itemSanPham[3][lang].des);
    $("#motasp5").html( itemSanPham[4][lang].des);
    $("#motasp6").html( itemSanPham[5][lang].des);
    $("#motasp7").html( itemSanPham[6][lang].des);
    $("#motasp8").html( itemSanPham[7][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[0]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[1]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[2]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[3]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[4]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[5]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[6]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[7]["vi-vn"].photo);
 
   $("#giasp1").html( new Intl.NumberFormat().format(Number.parseInt(itemSanPham[0][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[1][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[2][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[3][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[4][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[5][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[6][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[7][lang].price))+ itemSanPham["tien"][lang]);

//    $("#idsp1").html(0);
   $("#idsp2").html(1);
   $("#idsp3").html(2);
   $("#idsp4").html(3);
   $("#idsp5").html(4);
   $("#idsp6").html(5);
   $("#idsp7").html(6);
   $("#idsp8").html(7);
}

function showMuongDua(){
   
    
    $('#tensp1').html(itemSanPham[8][lang].name);
    $("#tensp2").html(itemSanPham[9][lang].name);
    $("#tensp3").html(itemSanPham[10][lang].name);
    $("#tensp4").html(itemSanPham[11][lang].name);
    $("#tensp5").html(itemSanPham[12][lang].name);
    $("#tensp6").html(itemSanPham[13][lang].name);
    $("#tensp7").html(itemSanPham[14][lang].name);
    $("#tensp8").html(itemSanPham[15][lang].name);


    $("#motasp1").html( itemSanPham[8][lang].des);
    $("#motasp2").html( itemSanPham[9][lang].des);
    $("#motasp3").html( itemSanPham[10][lang].des);
    $("#motasp4").html( itemSanPham[11][lang].des);
    $("#motasp5").html( itemSanPham[12][lang].des);
    $("#motasp6").html( itemSanPham[13][lang].des);
    $("#motasp7").html( itemSanPham[14][lang].des);
    $("#motasp8").html( itemSanPham[15][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[8]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[9]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[10]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[11]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[12]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[13]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[14]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[15]["vi-vn"].photo);
 
   $("#giasp1").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[8][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[9][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[10][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[11][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[12][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[13][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[14][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[15][lang].price))+ itemSanPham["tien"][lang]);

   $("#idsp1").html("8");
   $("#idsp2").html("9");
   $("#idsp3").html("10");
   $("#idsp4").html("11");
   $("#idsp5").html("12");
   $("#idsp6").html("13");
   $("#idsp7").html("14");
   $("#idsp8").html("15");
}
var dD= true;

function showDienTu(){
    if(dD==true){
        $('#showdientu').show();
        $('#iconDT').removeClass();
        $('#iconDT').addClass("fa fa-caret-up");
        dD= false;
    }else{
        $('#showdientu').hide();
        $('#iconDT').removeClass();
        $('#iconDT').addClass("fa fa-caret-down");
        dD= true;
    }
}
function showNoiDien(){   
   
    
    $('#tensp1').html(itemSanPham[16][lang].name);
    $("#tensp2").html(itemSanPham[17][lang].name);
    $("#tensp3").html(itemSanPham[18][lang].name);
    $("#tensp4").html(itemSanPham[19][lang].name);
    $("#tensp5").html(itemSanPham[20][lang].name);
    $("#tensp6").html(itemSanPham[21][lang].name);
    $("#tensp7").html(itemSanPham[22][lang].name);
    $("#tensp8").html(itemSanPham[23][lang].name);


    $("#motasp1").html( itemSanPham[16][lang].des);
    $("#motasp2").html( itemSanPham[17][lang].des);
    $("#motasp3").html( itemSanPham[18][lang].des);
    $("#motasp4").html( itemSanPham[19][lang].des);
    $("#motasp5").html( itemSanPham[20][lang].des);
    $("#motasp6").html( itemSanPham[21][lang].des);
    $("#motasp7").html( itemSanPham[22][lang].des);
    $("#motasp8").html( itemSanPham[23][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[16]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[17]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[18]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[19]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[20]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[21]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[22]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[23]["vi-vn"].photo);
 
   $("#giasp1").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[16][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[17][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[18][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[19][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[20][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[21][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[22][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[23][lang].price))+ itemSanPham["tien"][lang]);

   $("#idsp1").html("16");
   $("#idsp2").html("17");
   $("#idsp3").html("18");
   $("#idsp4").html("19");
   $("#idsp5").html("20");
   $("#idsp6").html("21");
   $("#idsp7").html("22");
   $("#idsp8").html("23");
}

function showMayDien(){
    
    
    $('#tensp1').html(itemSanPham[24][lang].name);
    $("#tensp2").html(itemSanPham[25][lang].name);
    $("#tensp3").html(itemSanPham[26][lang].name);
    $("#tensp4").html(itemSanPham[27][lang].name);
    $("#tensp5").html(itemSanPham[28][lang].name);
    $("#tensp6").html(itemSanPham[29][lang].name);
    $("#tensp7").html(itemSanPham[30][lang].name);
    $("#tensp8").html(itemSanPham[31][lang].name);


    $("#motasp1").html( itemSanPham[24][lang].des);
    $("#motasp2").html( itemSanPham[25][lang].des);
    $("#motasp3").html( itemSanPham[26][lang].des);
    $("#motasp4").html( itemSanPham[27][lang].des);
    $("#motasp5").html( itemSanPham[28][lang].des);
    $("#motasp6").html( itemSanPham[29][lang].des);
    $("#motasp7").html( itemSanPham[30][lang].des);
    $("#motasp8").html( itemSanPham[31][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[24]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[25]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[26]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[27]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[28]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[29]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[30]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[31]["vi-vn"].photo);
 
   $("#giasp1").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[24][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[25][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[26][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[27][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[28][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[29][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[30][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[31][lang].price))+ itemSanPham["tien"][lang]);

   $("#idsp1").html("24");
   $("#idsp2").html("25");
   $("#idsp3").html("26");
   $("#idsp4").html("27");
   $("#idsp5").html("28");
   $("#idsp6").html("29");
   $("#idsp7").html("30");
   $("#idsp8").html("31");
}
var dVS= true;
function showVeSinh(){
    if(dVS==true){
        $('#showvesinh').show();
        $('#iconVS').removeClass();
        $('#iconVS').addClass("fa fa-caret-up");
        dVS= false;
    }else{
        $('#showvesinh').hide();
        $('#iconVS').removeClass();
        $('#iconVS').addClass("fa fa-caret-down");
        dVS= true;
    }
}
function showDungCu(){   
    
    
    $('#tensp1').html(itemSanPham[32][lang].name);
    $("#tensp2").html(itemSanPham[33][lang].name);
    $("#tensp3").html(itemSanPham[34][lang].name);
    $("#tensp4").html(itemSanPham[35][lang].name);
    $("#tensp5").html(itemSanPham[36][lang].name);
    $("#tensp6").html(itemSanPham[37][lang].name);
    $("#tensp7").html(itemSanPham[38][lang].name);
    $("#tensp8").html(itemSanPham[39][lang].name);


    $("#motasp1").html( itemSanPham[32][lang].des);
    $("#motasp2").html( itemSanPham[33][lang].des);
    $("#motasp3").html( itemSanPham[34][lang].des);
    $("#motasp4").html( itemSanPham[35][lang].des);
    $("#motasp5").html( itemSanPham[36][lang].des);
    $("#motasp6").html( itemSanPham[37][lang].des);
    $("#motasp7").html( itemSanPham[38][lang].des);
    $("#motasp8").html( itemSanPham[39][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[32]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[33]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[34]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[35]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[36]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[37]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[38]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[39]["vi-vn"].photo);
 
   $("#giasp1").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[32][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[33][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[34][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[35][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[36][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[37][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[38][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[39][lang].price))+ itemSanPham["tien"][lang]);

   $("#idsp1").html("32");
   $("#idsp2").html("33");
   $("#idsp3").html("34");
   $("#idsp4").html("35");
   $("#idsp5").html("36");
   $("#idsp6").html("37");
   $("#idsp7").html("38");
   $("#idsp8").html("38");
}

function showDungDich(){
    
    $('#tensp1').html(itemSanPham[40][lang].name);
    $("#tensp2").html(itemSanPham[41][lang].name);
    $("#tensp3").html(itemSanPham[42][lang].name);
    $("#tensp4").html(itemSanPham[43][lang].name);
    $("#tensp5").html(itemSanPham[44][lang].name);
    $("#tensp6").html(itemSanPham[45][lang].name);
    $("#tensp7").html(itemSanPham[46][lang].name);
    $("#tensp8").html(itemSanPham[47][lang].name);


    $("#motasp1").html( itemSanPham[40][lang].des);
    $("#motasp2").html( itemSanPham[41][lang].des);
    $("#motasp3").html( itemSanPham[42][lang].des);
    $("#motasp4").html( itemSanPham[43][lang].des);
    $("#motasp5").html( itemSanPham[44][lang].des);
    $("#motasp6").html( itemSanPham[45][lang].des);
    $("#motasp7").html( itemSanPham[46][lang].des);
    $("#motasp8").html( itemSanPham[47][lang].des);
    
    $("#hinhsp1").attr("src",itemSanPham[40]["vi-vn"].photo);
    $("#hinhsp2").attr("src",itemSanPham[41]["vi-vn"].photo);
    $("#hinhsp3").attr("src",itemSanPham[42]["vi-vn"].photo);
    $("#hinhsp4").attr("src",itemSanPham[43]["vi-vn"].photo);
    $("#hinhsp5").attr("src",itemSanPham[44]["vi-vn"].photo);
    $("#hinhsp6").attr("src",itemSanPham[45]["vi-vn"].photo);
    $("#hinhsp7").attr("src",itemSanPham[46]["vi-vn"].photo);
    $("#hinhsp8").attr("src",itemSanPham[47]["vi-vn"].photo);
 
   $("#giasp1").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[40][lang].price)) + itemSanPham["tien"][lang]);
   $("#giasp2").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[41][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp3").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[42][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp4").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[43][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp5").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[44][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp6").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[45][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp7").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[46][lang].price))+ itemSanPham["tien"][lang]);
   $("#giasp8").html(new Intl.NumberFormat().format(Number.parseInt(itemSanPham[47][lang].price))+ itemSanPham["tien"][lang]);

   $("#idsp1").html("40");
   $("#idsp2").html("41");
   $("#idsp3").html("42");
   $("#idsp4").html("43");
   $("#idsp5").html("44");
   $("#idsp6").html("45");
   $("#idsp7").html("46");
   $("#idsp8").html("47");
}

function add_cart(code){
 var id = document.getElementById(code).innerHTML;
 var idsl = Number.parseInt(id) + 1;
 var sl= document.getElementById("slsp"+idsl+"").value; 
 if(sl<1)
    alert('Vui lòng chọn số lượng cho sản phẩm');
    else{
        window.localStorage.setItem(id,sl);
        if(lang === "vi-vn"){
                alert("Đã thêm "+itemSanPham[id][lang].name+" với số lượng "+sl+" vào giỏ hàng");
        }else{
                alert("Added to cart "+itemSanPham[id][lang].name+" with quantity "+sl);
        }
        
    }
}

function removerow(code){
        console.log(code);
        window.localStorage.removeItem(code); 
        show_cart();
}

function show_cart(){
        
        var sum =0;
        var sumsp =0;
        $('#sanphamGH').empty();
        
        for(i=0;i<window.localStorage.length;i++){
                var id = localStorage.key(i);
                var sl = localStorage.getItem(id);
                if(itemSanPham[id]["vi-vn"].photo !== "undefined")
                $('#sanphamGH').append("<tr><th><img src='" + itemSanPham[id]["vi-vn"].photo + "' alt='' width='200px' height='200px'></th> <th>"+itemSanPham[id][lang].name+"</th><th>"+sl+"</th> <th>"+new Intl.NumberFormat().format(itemSanPham[id][lang].price)+ " "+labels["tienIcon"][lang] +"</th> <th>"+new Intl.NumberFormat().format(sl*itemSanPham[id][lang].price)+""+labels["tienIcon"][lang] +"</th><th> <Button data-code='"+id+"' onclick='removerow(this.dataset.code)'>XOA</Button></th></tr>");
                sum = sum + sl*itemSanPham[id][lang].price;
                sumsp = sumsp + Number.parseInt(sl) ;
                console.log(sum);
                
        }
        document.getElementById('sosanpham').innerHTML =  sumsp + " sp";
        document.getElementById('tongtien').innerHTML =  new Intl.NumberFormat().format(sum)+ itemSanPham["tien"][lang];
        var ck;
        if(sumsp<=3 ) ck=1;
        if(sumsp>3 && sumsp<=5) ck=2;
        if(sumsp>=5 && sumsp<10) ck=3;
        if(sumsp>=10) ck=4;
        document.getElementById('chietkhau').innerHTML = new Intl.NumberFormat().format(ck)+ "%";
        document.getElementById('tongtiencuoi').innerHTML =new Intl.NumberFormat().format(sum - (sum*ck/100))+ itemSanPham["tien"][lang];
        


}

