let products = [];
const limitCardRender = 20;
let currentPage = 0;
for (let i = 1; i <= 55; i++) {
    products.push({
        name: `Cá nước ngọt ${i}`,
        price: `${(i * 1000).toLocaleString()} VND`,
        img: "/images/product/ca-canh-buom-mau-hong.webp"
    });
}
renderProducts();

document.getElementById("type-product").addEventListener("change", (event) => {
    const value = event.target.value;
    products = [];
    // chưa có sản phẩm nên đây chỉ là test 
    if (value === "ca-nuoc-ngot") {
        for (let i = 1; i <= 40; i++) {
            products.push({
                name: `Cá nước ngọt ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/ca-canh-buom-mau-hong.webp"
            });
        }
    }
    else if(value === "ca-nuoc-man"){
        for (let i = 1; i <= 23; i++) {
            products.push({
                name: `Cá nước mặn ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/Amphiprion_ocellaris_(Clown_anemonefish)_Nemo.jpg"
            });
        }
    }
    else if(value === "thuy-sinh-ngot"){
        for (let i = 1; i <= 44; i++) {
            products.push({
                name: `Thủy sinh nước ngọt ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/la-han-xanh.jpg"
            });
        }
    }
    else if(value === "thuy-sinh-man"){
        for (let i = 1; i <= 50; i++) {
            products.push({
                name: `Thủy sinh mặn ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/hai-quy.jpg"
            });
        }
    }
    else if(value === "ho-ca"){
        for (let i = 1; i <= 50; i++) {
            products.push({
                name: `Hồ cá ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/vn-11134207-7r98o-lqr0y0qb2ptj16_tn.jpg"
            });
        }
    }
    else if(value === "phu-kien"){
        for (let i = 1; i <= 50; i++) {
            products.push({
                name: `Phụ kiện hồ cá ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/b6gVnwasNdRwyYlC2jfW.jpg.jpg"
            });
        }
    }
    else if(value === "thuc-an"){
        for (let i = 1; i <= 50; i++) {
            products.push({
                name: `Thức ăn và dung dịch ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/vn-11134207-7ra0g-m6aor70tkhfaf7_tn.webp"
            });
        }
    }
    else{
        for (let i = 1; i <= 50; i++) {
            products.push({
                name: `Cá nước Mặn ${i}`,
                price: `${(i * 1000).toLocaleString()} VND`,
                img: "/images/product/ca-canh-buom-mau-hong.webp"
            });
        }
    }
    currentPage = 0;
    renderProducts()
});
function renderProducts() {
    const startIndex = currentPage * limitCardRender;
    const endIndex = startIndex + limitCardRender;
    const pageItems = products.slice(startIndex, endIndex);
    const productList = document.getElementById("product-show");
    productList.innerHTML = "";
    pageItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("product-card");
        card.innerHTML=
        "<img src=\"" + item.img + "\" alt=\"" + item.name + "\" class=\"product-card__image\" loading=\"lazy\">" +
        "<h3 class=\"product-card__title\">" + item.name + "</h3>" +
        "<p class=\"product-card__price\">" + item.price + "</p>";
        productList.appendChild(card);
    });
    document.getElementById("page-control-direct").value = currentPage + 1;
}

document.getElementById("next").addEventListener("click", () => {
    if ((currentPage + 1) * limitCardRender < products.length) {
        currentPage++;
        renderProducts();
    }
});

document.getElementById("previous").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderProducts();
    }
});

document.getElementById("page-control-direct").addEventListener("change", (event) => {
    const pageNum=parseInt(event.target.value);
    if(Number.isInteger(pageNum) == false ){
        alert("Số trang không hợp lệ !");
    }
    else if(pageNum  <= 0|| pageNum > Math.ceil(products.length / limitCardRender)){
        alert("trang không tồn tại!");
    }
    else{
        currentPage=pageNum-1;
        renderProducts();
    }
});
renderProducts();

