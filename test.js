
const tesseract=require("./index");

const fs=require('fs');

let data=tesseract.str_hocr("C:/Users/ACODEZ/RD/tesseractnative/BankFinancialStatement001.png");
console.log(data);
fs.writeFile("gp004.png.html",data,(err)=>{
    console.log(err);
})