document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".banner").forEach(banner => {
    var imageSlide=banner.querySelector(".banner__image");
    var next=banner.querySelector(".banner__button--prev");
    var prev=banner.querySelector(".banner__button--next");
    var index=0;
    var imageId=imageSlide.id;
    var imagesrc=[];
    if(imageId=="event"){
    imagesrc=[
        "/images/event/Event_1.png",
        "/images/event/Event_2.png",
        "/images/event/Event_3.png",
        "/images/event/Event_4.png",
    ];
    }
    else if (imageId == "blog"){
    imagesrc=[
        "/images/blog/Blog_1.png",
        "/images/blog/Blog_2.png",
        "/images/blog/Blog_3.png",
        "/images/blog/Blog_4.png",
    ];
    }
    function showImage(index){
        imageSlide.src=imagesrc[index];
    }
    next.addEventListener("click",()=>{
        index+=1;
        if(index >= imagesrc.length){
            index=0;
        }
        showImage(index);
    })
    prev.addEventListener("click",()=>{
        index-=1;
        if(index <0){
            index=imagesrc.length-1;
        }
        showImage(index);
    })
}
)
})
// !!trong lúc tìm cách code phần làm sao để image có thể đổi qua từ src này qua src khác 
//=> mình đã học được cách javascript hoạt động cơ bản
//ban đầu mình khá khó khăn với việc hình dung giải quyết bài toán trên javascript cho web , bởi vì trước giờ chỉ học code thông qua các bài toán logic không trực quan lắm
//=> mình cũng đã học được cách đặt biến trong js cho cấu trúc html
// các phần còn lại khá giống C ( ngôn ngữ mình đã học) nên các logic giải quyết khá nhanh
// !!lúc mà code xong phần event , mình đã làm tiếp cho blog nhưng đã gặp vấn đề là blog không hoạt động, chỉ có event hoạt động
//=> mình đã hiểu lí do là đoạn code ban đầu chỉ sử dụng được 1 lần do nó chỉ lấy id ban đầu là event thay vì cả hay 
// => mình đã tìm cách và học cách sử dụng forEach như đoạn code trên để phần code này có thể duyệt tất cả các loại banner có mặt thay vì 1 cái
// !! mình đã mắc lỗi kế tiếp khi sử dụng document. nó chỉ sử dụng và lấy phần tử đầu tiên nó matching trúng 
// => mình đã tìm hiểu và giải quyết các sử dụng banner(biến được đặt tên là banner), 
//=> ta có thể liên tưởng nó như trong i trong for(int i=0; ) và arr[i] , nó sẽ đại diện cho từng banner trong vòng lặp

// mình tóm lượt logic phần này như sau 
//load hết trang -> kiểm tra id loại gì lấy src ->nghe các sự kiện click vào button để đổi src phù hợp