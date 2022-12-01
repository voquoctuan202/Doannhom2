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
function removerow(code){
        console.log(code);
        window.localStorage.removeItem(code); 
        show_cart();
}
function show_cart(){
        var sum =0;
        $('#sanphamGH').empty();
        console.log("ok");
        for(i=0;i<window.localStorage.length;i++){
                var id = localStorage.key(i);
                var sl = localStorage.getItem(id);
                $('#sanphamGH').append("<tr><th><img src='"+itemSanPham[id].photo+"' alt='' width='200px' height='200px'></th> <th>"+itemSanPham[id].name+"</th><th>"+sl+"</th> <th>"+itemSanPham[id].price+"</th> <th>"+sl*itemSanPham[id].price+"</th><th> <Button data-code='"+id+"' onclick='removerow(this.dataset.code)'>XOA</Button></th></tr>");
                sum = sum + sl*itemSanPham[id].price;
        }
        document.getElementById('tongtien').innerHTML = sum + "đ";
        var ck =  Math.floor(Math.random() * 5) + 1;
        document.getElementById('chietkhau').innerHTML = ck+ "%";
        document.getElementById('tongtiencuoi').innerHTML =sum - (sum*ck/100)+ "đ";


}

function ready(){

    console.log(window.innerWidth);
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
    showNoiChao();
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
        "0":{ "name":"NỒI INOX ","price":150000,"photo":"assets/img/sanpham/naunuong/noiinox.jpg",
                "des":"Nồi được làm từ chất liệu inox đẹp mắt bền bỉ theo thời gian"},
        "1":{ "name":"BỘ NỒI SUNHOUSE","price":780000,"photo":"assets/img/sanpham/naunuong/BoNoiSunHouse.jpg",
                "des":"Bộ nồi được làm từ chất liệu inox do hãng Sunhouse sản xuất"},
        "2":{ "name":"BỘ NỒI GỐM SỨ","price":1500000,"photo":"assets/img/sanpham/naunuong/bonoipremium.jpg",
                "des":"Bộ nồi làm từ gốm sứ tạo cho đồ ăn luôn thơm ngon"},
        "3":{ "name":"NỒI THỦY TINH","price":800000,"photo":"assets/img/sanpham/naunuong/noi-thuy-tinh-visions.jpg",
                "des":"Sản xuất từ chất liệu thủy tinh chịu nhiệt"},
        "4":{ "name":"CHẢO BẾP TỪ SUNHOUSE","price":350000,"photo":"assets/img/sanpham/naunuong/chao-bep-tu-Sunhousepg.jpg",
                "des":"Thiết kế dẹp mắt chắc chắn, bền bỉ "},
        "5":{ "name":"CHẢO BERNDES SAUTEPAN","price":1200000,"photo":"assets/img/sanpham/naunuong/Chao-Berndes-Sautepan-Inse-24cm-2.jpg",
                "des":"Hàng cao cấp nhập khẩu từ Đức"},
        "6":{ "name":"CHẢO INOX CAO CẤP","price":300000,"photo":"assets/img/sanpham/naunuong/chaoinox.jpg",
                "des":"Chảo có nhiều size phù hợp với mọi nhu cầu"},
        "7":{ "name":"CHẢO THÉP CÔNG NGHIỆP","price":900000,"photo":"assets/img/sanpham/naunuong/ChaoThep.jpg",
                "des":"Được gia công từ thép chắc chắn, chuyên dùng cho nhà hàng"},
        

        "8":{ "name":"COMBO 5 MÓN ĐỒ NẤU GỖ ","price":245000,"photo":"assets/img/sanpham/naunuong/combo5MonGo.jpg",
                "des":"Combo 5 món đồ nấu gỗ cao cấp như hình với giá siêu ưu đãi"},
        "9":{ "name":"COMBO 10 MUỖNG CÀ PHÊ","price":12000,"photo":"assets/img/sanpham/naunuong/ComBo-6-Muong-Ca-Phe.jpg",
                "des":"Muỗng được thiết kế với chất liệu inox không gỉ chắc chắn "},
        "10":{ "name":"BỘ 5 MUỖNG ĂN CƠM","price":15000,"photo":"assets/img/sanpham/naunuong/combo5muong.jpg",
                "des":"Được làm từ chất liệu inox bền chắc, dễ dàng vệ sinh"},
        "11":{ "name":"BỘ 10 MUỖNG NHỰA","price":10000,"photo":"assets/img/sanpham/naunuong/combo10muongnhua.jpg",
                "des":"Bộ gồm 10 muỗng nhựa nhiều màu sắc lựa chọn"},
        "12":{ "name":"BỘ ĐŨA GỖ","price":19000,"photo":"assets/img/sanpham/naunuong/DuaGo.jpg"
        ,"des":"Bộ bao gồm 10 đôi đũa gỗ, hàng Việt Nam chất lượng cao"},
        "13":{ "name":"BỘ ĐŨA NHỰA","price":12000,"photo":"assets/img/sanpham/naunuong/DuaNhua.jpg"
                ,"des":"Bộ gồm 10 đôi đũa nhựa sang trọng, chịu được nhệt độ cao"},
        "14":{ "name":"VÁ CANH CAO CẤP","price":100000,"photo":"assets/img/sanpham/naunuong/Muoi-muc-canh-mau-den.jpg",
                "des":"Vá được thiết kế giả đá sang trọng, bằng chất liệu nhựa chịu nhiệt "},
        "15":{ "name":"VÁ CHIÊN ĐA DỤNG ","price":30000,"photo":"assets/img/sanpham/naunuong/MuoiLoInox.jpg",
                "des":"Vá được được làm từ inox có lỗ giúp thoát dầu"},
      
        "16":{ "name":"NỒI CƠM ĐIỆN SUNHOUSE ","price":850000,"photo":"assets/img/sanpham/noidien/noicomdienSunhouse.jpg",
                "des":"Nồi cơm điện với dung tích 1.8L phù hợp với gia đình"},
        "17":{ "name":"NỒI CƠM ĐIỆN ZOJIRUSHI","price":1100000,"photo":"assets/img/sanpham/noidien/noicomdienZojirushi.jpg",
                "des":"Nồi cơm điện nhập khẩu từ Nhật Bản bán chạy nhất tại Việt Nam "},
        "18":{ "name":"NỒI ÁP SUẤT NAGAKAWA","price":1200000,"photo":"assets/img/sanpham/noidien/noiapsuatNagakawa.jpg",
                "des":"Nồi được sản xuất tại Nhật Bản nhập khẩu chính hãng "},
        "19":{ "name":"NỒI CHIÊN NƯỚNG TEFAL","price":2100000,"photo":"assets/img/sanpham/noidien/noichienTefal.jpg",
                "des":"Nồi nhập khẩu với 2 công dụng chiên và nướng không khói "},
        "20":{ "name":"BẾP ĐIỆN TỪ MIDEA","price":1900000,"photo":"assets/img/sanpham/noidien/Bep-dien-tu-Midea.jpg",
                "des":"Bếp có mặt kính chống trầy, tiết kiệm điện"},
        "21":{ "name":"BẾP ĐIỆN CANZY","price":2600000,"photo":"assets/img/sanpham/noidien/bepdientuCanzy.jpg",
                "des":"Bếp điện từ Canzy là sản phẩm cao cấp nhập khẩu từ châu Âu"},
        "22":{ "name":"BẾP GA IKURA","price":900000,"photo":"assets/img/sanpham/noidien/bepgaIkura.jpg",
                "des":"Bếp ga 2 bếp, mặt kính đen bóng loáng sang trọng "},
        "23":{ "name":"LÒ NƯỚNG ALASKA","price":940000,"photo":"assets/img/sanpham/noidien/lonuongAlaska.jpg",
                "des":"Lò nướng alaska loại lò khai nướng, công suất 1500W"},
   
        "24":{ "name":"MÁY XAY SINH TỐ SUNHOUSE ","price":600000,"photo":"assets/img/sanpham/noidien/May-xay-sinh-to-da-nang-Sunhouse.jpg",
                "des":"Máy xay sinh tố Sunhouse công suất 2000W vô cùng mạnh mẽ, tặng thêm 2 cối xay"},
        "25":{ "name":"MÁY XAY SINH TỐ KANGAROO ","price":550000,"photo":"assets/img/sanpham/noidien/may-xay-sinh-to-kangaroo.jpg",
                "des":"Máy xay sinh tố Kangaru công suất 1800W , dung tích lớn, tăng thêm 2 cối xay"},
        "26":{ "name":"MÁY ÉP TRÁI CÂY COMET","price":750000,"photo":"assets/img/sanpham/noidien/mayeptraicayComet.jpg",
                "des":"Máy ép trái cây Comet công suất 2000W , ép được hầu hết trái cấy"},
        "27":{ "name":"MÁY ÉP TRÁI CÂY PHILIPS","price":700000,"photo":"assets/img/sanpham/noidien/mayeptraicayPhilips.jpg",
                "des":"Máy ép trái cây Comet công suất 2400W, là sản phẩm bán chạy nhất hiện nay"},
        "28":{ "name":"MÁY XAY THỊT MISHIO","price":680000,"photo":"assets/img/sanpham/noidien/mayxaythitMishio.jpg",
                "des":"Máy xay thịt Mishio cối xay được làm từ thủy tinh chắc chắn "},
        "29":{ "name":"MÁY RỬA CHÉN MINI","price":4200000,"photo":"assets/img/sanpham/noidien/mayruachenmini.jpeg",
                "des":"Máy rửa chén nhỏ gọn phù hợp với gia đình "},
        "30":{ "name":"MÁY RỬA CHÉN TEKA","price":7000000,"photo":"assets/img/sanpham/noidien/may-rua-chen-teka.jpg",
                "des":"Máy rửa chén lớn rửa được nhiều chén dĩa hơn"},
        "31":{ "name":"MÁY RỬA CHÉN CÔNG NGHIỆP","price":15000000,"photo":"assets/img/sanpham/noidien/mayruachencongnhiep.jpg",
                "des":"Máy rửa rất lớn quy mô công nghiệp"},
    
        "32":{ "name":"CHỔI CỎ QUÉT NHÀ V1","price":30000,"photo":"assets/img/sanpham/vesinh/choi-co-quet-nha.jpg",
                "des":"Chổi cỏ làm thủ công có lượt mua cao nhất"},
        "33":{ "name":"CHỔI CỎ CÁN NHỰA V2","price":35000,"photo":"assets/img/sanpham/vesinh/choicocannhuajpg.jpg",
                "des":"Sản phẩm cải tiến hơn với bảng to và bền hơn"},
        "34":{ "name":"CHỔI NHỰA CAO CẤP","price":37000,"photo":"assets/img/sanpham/vesinh/Choinhua.jpg",
                "des":"Chổi được làm từ nhựa bền chắc, có thể quét nước"},
        "35":{ "name":"CHỔI QUÉT TRẦN NHÀ","price":70000,"photo":"assets/img/sanpham/vesinh/choi-quet-tran-nha.jpg",
                "des":"Chổi làm từ nhựa, cây nối có thể kéo dài đến 3m"},
        "36":{ "name":"CỌ TOILET NHỰA","price":35000,"photo":"assets/img/sanpham/vesinh/co-toilet-nhua.jpg",
                "des":"Cọ toilet bằng nhựa thiết kế tròn dễ vệ sinh"},
        "37":{ "name":"CỌ ĐA NĂNG NHỰA","price":39000,"photo":"assets/img/sanpham/vesinh/codanang.jpg",
                "des":"Được thiết kế đặc biệt dễ dàng vệ sinh các ngóc ngách của vật dụng"},
        "38":{ "name":"BÀN CHẢI NHỰA","price":20000,"photo":"assets/img/sanpham/vesinh/banchainhua.jpg",
                "des":"Bàn chải nhựa dẻo, bệnh bỉ, dễ dàng vệ sinh"},
        "39":{ "name":"KHĂN LAU","price":10000,"photo":"assets/img/sanpham/vesinh/khanlau.jpg",
                "des":"Khăn được làm từ vải mềm, thấm nước, khô nhanh"},
       
        "40":{ "name":"BỘT TẨY RỬA VETO KOREAN","price":120000,"photo":"assets/img/sanpham/vesinh/botayruaveto.jpg",
                "des":"Bột có thể tẩy rửa các vết bẩn cứng đầu, không hại da tay"},
        "41":{ "name":"BỘ VỆ SINH MÁY GIẶT","price":150000,"photo":"assets/img/sanpham/vesinh/botvesinhlonggiatHanQuoc.jpg",
                "des":"Bột có xuất xứ từ Hàn Quốc có khả năng tẩy sạch lồng giặt"},
        "42":{ "name":"DUNG DỊCH VỆ SINH TỦ LẠNH","price":90000,"photo":"assets/img/sanpham/vesinh/Dung-dich-ve-sinh-tu-lanh.jpg",
                "des":"Dung dịch chuyên dụng để khử khuẩn, khử mùi cho tủ lạnh"},
        "43":{ "name":"CHAI TẨY RỬA ĐA NĂNG","price":89000,"photo":"assets/img/sanpham/vesinh/tayruadanang.jpg",
                "des":"Tẩy rửa các vết bẩn ở nhà bếp, phòng khách, nhà vệ sinh"},
        "44":{ "name":"TẨY CẶN CANXI JULI","price":80000,"photo":"assets/img/sanpham/vesinh/taycancanxi.jpg",
                "des":"Dung dịch chuyên dụng tẩy các mảng cặn canxi bám lâu ngày"},
        "45":{ "name":"NƯỚC RỬA KÍNH GIFT","price":35000,"photo":"assets/img/sanpham/vesinh/nuocruakinh.jpg",
                "des":"Nước rửa kính được dùng nhiều nhất Việt Nam"},
        "46":{ "name":"NƯỚC RỬA TAY ZYTO","price":40000,"photo":"assets/img/sanpham/vesinh/nuocruatayZYTO.jpg",
                "des":"Nước rửa tay với mùi thơm dễ chịu diệt được 99% vi khuẩn"},
        "47":{ "name":"TẨY BỒN CẦU VIM ZERO","price":52000,"photo":"assets/img/sanpham/vesinh/vim.jpg",
                "des":"Vim được bình chọn là nước tẩy bồn cầu tốt nhất hiện nay"},
        };
                    
function showNoiChao(){   
    
    
    $('#tensp1').html(itemSanPham[0].name);
    $("#tensp2").html(itemSanPham[1].name);
    $("#tensp3").html(itemSanPham[2].name);
    $("#tensp4").html(itemSanPham[3].name);
    $("#tensp5").html(itemSanPham[4].name);
    $("#tensp6").html(itemSanPham[5].name);
    $("#tensp7").html(itemSanPham[6].name);
    $("#tensp8").html(itemSanPham[7].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[0].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[1].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[2].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[3].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[4].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[5].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[6].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[7].des);
    
    $("#hinhsp1").attr("src",itemSanPham[0].photo);
    $("#hinhsp2").attr("src",itemSanPham[1].photo);
    $("#hinhsp3").attr("src",itemSanPham[2].photo);
    $("#hinhsp4").attr("src",itemSanPham[3].photo);
    $("#hinhsp5").attr("src",itemSanPham[4].photo);
    $("#hinhsp6").attr("src",itemSanPham[5].photo);
    $("#hinhsp7").attr("src",itemSanPham[6].photo);
    $("#hinhsp8").attr("src",itemSanPham[7].photo);
 
   $("#giasp1").html( itemSanPham[0].price + "đ");
   $("#giasp2").html( itemSanPham[1].price+ "đ");
   $("#giasp3").html( itemSanPham[2].price+ "đ");
   $("#giasp4").html( itemSanPham[3].price+ "đ");
   $("#giasp5").html( itemSanPham[4].price+ "đ");
   $("#giasp6").html( itemSanPham[5].price+ "đ");
   $("#giasp7").html( itemSanPham[6].price+ "đ");
   $("#giasp8").html( itemSanPham[7].price+ "đ");

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
   
    
    $('#tensp1').html(itemSanPham[8].name);
    $("#tensp2").html(itemSanPham[9].name);
    $("#tensp3").html(itemSanPham[10].name);
    $("#tensp4").html(itemSanPham[11].name);
    $("#tensp5").html(itemSanPham[12].name);
    $("#tensp6").html(itemSanPham[13].name);
    $("#tensp7").html(itemSanPham[14].name);
    $("#tensp8").html(itemSanPham[15].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[8].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[9].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[10].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[11].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[12].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[13].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[14].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[15].des);
    
    $("#hinhsp1").attr("src",itemSanPham[8].photo);
    $("#hinhsp2").attr("src",itemSanPham[9].photo);
    $("#hinhsp3").attr("src",itemSanPham[10].photo);
    $("#hinhsp4").attr("src",itemSanPham[11].photo);
    $("#hinhsp5").attr("src",itemSanPham[12].photo);
    $("#hinhsp6").attr("src",itemSanPham[13].photo);
    $("#hinhsp7").attr("src",itemSanPham[14].photo);
    $("#hinhsp8").attr("src",itemSanPham[15].photo);
 
   $("#giasp1").html( itemSanPham[8].price + "đ");
   $("#giasp2").html( itemSanPham[9].price+ "đ");
   $("#giasp3").html( itemSanPham[10].price+ "đ");
   $("#giasp4").html( itemSanPham[11].price+ "đ");
   $("#giasp5").html( itemSanPham[12].price+ "đ");
   $("#giasp6").html( itemSanPham[13].price+ "đ");
   $("#giasp7").html( itemSanPham[14].price+ "đ");
   $("#giasp8").html( itemSanPham[15].price+ "đ");

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
   
    
    $('#tensp1').html(itemSanPham[16].name);
    $("#tensp2").html(itemSanPham[17].name);
    $("#tensp3").html(itemSanPham[18].name);
    $("#tensp4").html(itemSanPham[19].name);
    $("#tensp5").html(itemSanPham[20].name);
    $("#tensp6").html(itemSanPham[21].name);
    $("#tensp7").html(itemSanPham[22].name);
    $("#tensp8").html(itemSanPham[23].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[16].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[17].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[18].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[19].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[20].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[21].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[22].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[23].des);
    
    $("#hinhsp1").attr("src",itemSanPham[16].photo);
    $("#hinhsp2").attr("src",itemSanPham[17].photo);
    $("#hinhsp3").attr("src",itemSanPham[18].photo);
    $("#hinhsp4").attr("src",itemSanPham[19].photo);
    $("#hinhsp5").attr("src",itemSanPham[20].photo);
    $("#hinhsp6").attr("src",itemSanPham[21].photo);
    $("#hinhsp7").attr("src",itemSanPham[22].photo);
    $("#hinhsp8").attr("src",itemSanPham[23].photo);
 
   $("#giasp1").html( itemSanPham[16].price + "đ");
   $("#giasp2").html( itemSanPham[17].price+ "đ");
   $("#giasp3").html( itemSanPham[18].price+ "đ");
   $("#giasp4").html( itemSanPham[19].price+ "đ");
   $("#giasp5").html( itemSanPham[20].price+ "đ");
   $("#giasp6").html( itemSanPham[21].price+ "đ");
   $("#giasp7").html( itemSanPham[22].price+ "đ");
   $("#giasp8").html( itemSanPham[23].price+ "đ");

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
    
    
    $('#tensp1').html(itemSanPham[24].name);
    $("#tensp2").html(itemSanPham[25].name);
    $("#tensp3").html(itemSanPham[26].name);
    $("#tensp4").html(itemSanPham[27].name);
    $("#tensp5").html(itemSanPham[28].name);
    $("#tensp6").html(itemSanPham[29].name);
    $("#tensp7").html(itemSanPham[30].name);
    $("#tensp8").html(itemSanPham[31].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[24].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[25].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[26].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[27].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[28].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[29].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[30].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[31].des);
    
    $("#hinhsp1").attr("src",itemSanPham[24].photo);
    $("#hinhsp2").attr("src",itemSanPham[25].photo);
    $("#hinhsp3").attr("src",itemSanPham[26].photo);
    $("#hinhsp4").attr("src",itemSanPham[27].photo);
    $("#hinhsp5").attr("src",itemSanPham[28].photo);
    $("#hinhsp6").attr("src",itemSanPham[29].photo);
    $("#hinhsp7").attr("src",itemSanPham[30].photo);
    $("#hinhsp8").attr("src",itemSanPham[31].photo);
 
   $("#giasp1").html( itemSanPham[24].price + "đ");
   $("#giasp2").html( itemSanPham[25].price+ "đ");
   $("#giasp3").html( itemSanPham[26].price+ "đ");
   $("#giasp4").html( itemSanPham[27].price+ "đ");
   $("#giasp5").html( itemSanPham[28].price+ "đ");
   $("#giasp6").html( itemSanPham[29].price+ "đ");
   $("#giasp7").html( itemSanPham[30].price+ "đ");
   $("#giasp8").html( itemSanPham[31].price+ "đ");

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
    
    
    $('#tensp1').html(itemSanPham[32].name);
    $("#tensp2").html(itemSanPham[33].name);
    $("#tensp3").html(itemSanPham[34].name);
    $("#tensp4").html(itemSanPham[35].name);
    $("#tensp5").html(itemSanPham[36].name);
    $("#tensp6").html(itemSanPham[37].name);
    $("#tensp7").html(itemSanPham[38].name);
    $("#tensp8").html(itemSanPham[39].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[32].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[33].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[34].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[35].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[36].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[37].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[38].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[39].des);
    
    $("#hinhsp1").attr("src",itemSanPham[32].photo);
    $("#hinhsp2").attr("src",itemSanPham[33].photo);
    $("#hinhsp3").attr("src",itemSanPham[34].photo);
    $("#hinhsp4").attr("src",itemSanPham[35].photo);
    $("#hinhsp5").attr("src",itemSanPham[36].photo);
    $("#hinhsp6").attr("src",itemSanPham[37].photo);
    $("#hinhsp7").attr("src",itemSanPham[38].photo);
    $("#hinhsp8").attr("src",itemSanPham[39].photo);
 
   $("#giasp1").html( itemSanPham[32].price + "đ");
   $("#giasp2").html( itemSanPham[33].price+ "đ");
   $("#giasp3").html( itemSanPham[34].price+ "đ");
   $("#giasp4").html( itemSanPham[35].price+ "đ");
   $("#giasp5").html( itemSanPham[36].price+ "đ");
   $("#giasp6").html( itemSanPham[37].price+ "đ");
   $("#giasp7").html( itemSanPham[38].price+ "đ");
   $("#giasp8").html( itemSanPham[39].price+ "đ");

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
    
    $('#tensp1').html(itemSanPham[40].name);
    $("#tensp2").html(itemSanPham[41].name);
    $("#tensp3").html(itemSanPham[42].name);
    $("#tensp4").html(itemSanPham[43].name);
    $("#tensp5").html(itemSanPham[44].name);
    $("#tensp6").html(itemSanPham[45].name);
    $("#tensp7").html(itemSanPham[46].name);
    $("#tensp8").html(itemSanPham[47].name);


    $("#motasp1").html("Mô tả: "+itemSanPham[40].des);
    $("#motasp2").html("Mô tả: "+itemSanPham[41].des);
    $("#motasp3").html("Mô tả: "+itemSanPham[42].des);
    $("#motasp4").html("Mô tả: "+itemSanPham[43].des);
    $("#motasp5").html("Mô tả: "+itemSanPham[44].des);
    $("#motasp6").html("Mô tả: "+itemSanPham[45].des);
    $("#motasp7").html("Mô tả: "+itemSanPham[46].des);
    $("#motasp8").html("Mô tả: "+itemSanPham[47].des);
    
    $("#hinhsp1").attr("src",itemSanPham[40].photo);
    $("#hinhsp2").attr("src",itemSanPham[41].photo);
    $("#hinhsp3").attr("src",itemSanPham[42].photo);
    $("#hinhsp4").attr("src",itemSanPham[43].photo);
    $("#hinhsp5").attr("src",itemSanPham[44].photo);
    $("#hinhsp6").attr("src",itemSanPham[45].photo);
    $("#hinhsp7").attr("src",itemSanPham[46].photo);
    $("#hinhsp8").attr("src",itemSanPham[47].photo);
 
   $("#giasp1").html( itemSanPham[40].price + "đ");
   $("#giasp2").html( itemSanPham[41].price+ "đ");
   $("#giasp3").html( itemSanPham[42].price+ "đ");
   $("#giasp4").html( itemSanPham[43].price+ "đ");
   $("#giasp5").html( itemSanPham[44].price+ "đ");
   $("#giasp6").html( itemSanPham[45].price+ "đ");
   $("#giasp7").html( itemSanPham[46].price+ "đ");
   $("#giasp8").html( itemSanPham[47].price+ "đ");

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
 var sl= document.getElementById('slsp1').value; 
 if(sl<1)
    alert('Vui lòng chọn số lượng cho sản phẩm');
    else{
        window.localStorage.setItem(id,sl);
        alert("Đã thêm "+itemSanPham[id].name+" với số lượng "+sl+" vào giỏ hàng");
    }
}

