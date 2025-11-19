let arrBool = [];

try {
    // cho phep nguoi dung so luong phan tu trong mang
    let n = prompt("Số lượng phần tử trong mảng: ");
    // chuyen kieu du lieu
    n = parseInt(n);

    // k be hon 0
    if (n < 0) {
        throw new Error("Số lượng phần tử không hợp lệ!");
    }

    // chay vong lap de nhap gia tri cho tung phan tu
    for (let index = 0; index < n; index++) {
        const element = confirm(
            `Gía trị phần tử ${index} là true?\n(OK: true, Cancel: false)`
        );
        arrBool.push(element); // them phan tu -> PUSH
    }
    // dem so luong tru
    let trueCounterTag = document.getElementById("trueCounter");
    let counter = 0;
    // // cach 1: dung vong lap forEach -----------------------
    // arrBool.forEach((value) => {
    //     if (value === true) {
    //         counter++;
    //     }
    // });
    // trueCounterTag.innerText = counter;

    // // cach 2: dung ham filter -----------------
    // // filter (callback: hàm trả về true/false) -> trả về 1 mảng mới
    // let trueArr = arrBool.filtel(function (item){
    //     return item === true;
    // });
    // trueCounterTag.innerText = trueArr.lenght;

    // cach 3: dung ham reduce -----------------
    // reduce (callback: hàm xử lý, initiaValue: giá trị khởi tạo) -> trả về 1 giá trị
    const trueCount = arrBool.reduce(function(accumulator, currentValue) {
        if (currentValue === true) {
            return accumulator + 1;
        }
    }, 0);
    trueCounterTag.innerText = trueCount;
} catch (error) {
    console.error("Co loi xay ra: ", error);
    alert(error);
}