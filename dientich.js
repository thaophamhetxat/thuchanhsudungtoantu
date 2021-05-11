//*Khai báo các biến để nhận giá trị chiều cao và chiều rộng từ người dùng.
let inputWidth;
let inputHeight;
//* Sử dụng hàm prompt để lấy dữ liệu nhập vào từ người dùng
inputWidth = prompt("Nhập chiều cao");
inputHeight = prompt("nhập chiều rộng");
//*Sử dụng hàm parseInt() để chuyển kiểu dữ liệu từ chuỗi sang số nguyên.
inputWidth = parseInt(inputWidth);
inputHeight = parseInt(inputHeight);
//*Tính diện tích của hình chữ nhật và hiển thị ra màn hình
let dientich = inputWidth * inputHeight;
document.write("Diện tích hình chữ nhật là: " + dientich);