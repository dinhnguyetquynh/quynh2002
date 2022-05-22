$(document).ready(function() {
    var i = 1;
    $("#btn2").click(function() {


        $("#myModal").modal();
    });





    function kiemTraTen() {
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-z]{1}[a-z]+){1,})$/;
        if ($("#Name").val() == "") {
            $("tbName").html("không để trống");
            return false;

        }
        if (!mauKT.test($("#Name").val())) {
            $("#tbName").html("mối ký tự đầu viết hoa ");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemTraTen);


    function KiemTraDiaChi() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if ($("#DC").val() == "") {
            $("#tbDC").html("Không để trống");
            return false;

        }
        if (!mauKT.test($("#DC").val())) {
            $("#tbDc").html("mõi ksy tự đầu phải viết hoa");
            return true;
        }
        $("#tbDc").html("*");
        return true;
    }
    $("#DC").blur(KiemTraDiaChi);



    function kiemTraSDT() {
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/;
        if ($("#SDT").val() == "") {
            $("#tbSDT").html("không để trống");
            return false;
        }
        if (!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html(" theo dạng");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemTraSDT);
    $("#Save").click(function() {
        if (kiemTraTen() == true && kiemTraSDT() == true && KiemTraDiaChi() == true) {
            row = "<tr>";

            row += "<th>" + $("#Name").val() + "</th>";

            row += "<th>" + $("#DC").val() + "</th>";

            row += "<th>" + $("#SDT").val() + "</th>";
            row += "<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");



        }
    })
})