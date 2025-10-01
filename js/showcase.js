document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".showcase").forEach(showcase => {
        var imageProduct = showcase.querySelector(".product--img");
        var next = showcase.querySelector(".showcase__button--next");
        var prev = showcase.querySelector(".showcase__button--prev");
        var getTopOf = showcase.querySelector(".product__container").id;
        var imageOne = showcase.querySelector(".img1");
        var imageTwo = showcase.querySelector(".img2");
        var imageThree = showcase.querySelector(".img3");
        var index1 = 0, index2 = 1, index3 = 2;
        var imagesrc = [];

        if (getTopOf == "fish") {
            imagesrc = [
                "/images/product/Product_1.png",
                "/images/product/Product_2.png",
                "/images/product/Product_3.png",
                "/images/product/Product_4.png",
                "/images/product/Product_5.png",
                "/images/product/Product_6.png",
            ];

            showImage(index1, index2, index3); // ✅ Sửa: hiển thị ảnh ban đầu
        }
        if (getTopOf == "accessory") {
            imagesrc = [
                "/images/product/Product_1.png",
                "/images/product/Product_2.png",
                "/images/product/Product_3.png",
                "/images/product/Product_4.png",
                "/images/product/Product_5.png",
                "/images/product/Product_6.png",
            ];

            showImage(index1, index2, index3); // ✅ Sửa: hiển thị ảnh ban đầu
        }
        if (getTopOf == "tank") {
            imagesrc = [
                "/images/product/Product_1.png",
                "/images/product/Product_2.png",
                "/images/product/Product_3.png",
                "/images/product/Product_4.png",
                "/images/product/Product_5.png",
                "/images/product/Product_6.png",
            ];

            showImage(index1, index2, index3); // ✅ Sửa: hiển thị ảnh ban đầu
        }

        function showImage(index1, index2, index3) {
            imageOne.src = imagesrc[index1];
            imageTwo.src = imagesrc[index2];
            imageThree.src = imagesrc[index3];
        }

        next.addEventListener("click", () => {
            index1 += 1;
            if (index1 >= imagesrc.length) {
                index1 = 0;
            }
            index2 = index1 + 1;
            if(index2 >= imagesrc.length){
                index2=0;
            }
            index3 = index2 + 1;
            if(index3 >= imagesrc.length){
                index3=0;
            }

            showImage(index1, index2, index3);
        });

        prev.addEventListener("click", () => {
            index1 -= 1;
            if (index1 < 0) {
                index1 = imagesrc.length-1;
            }
            index2 = index2-1;
            if(index2< 0){
                index2= imagesrc.length-1;
            }
            index3 = index3 - 1;
            if(index3 < 0){
                index3= imagesrc.length-1;
            }
            showImage(index1, index2, index3);
        });
    });
});