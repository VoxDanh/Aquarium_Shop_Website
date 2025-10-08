const blogs = [];
// chưa có bài viết nên đây chỉ là test để biết chạy ok không thôi
for (let i = 1; i <= 25; i++) {
    blogs.push({
        img: `/images/blog/Blog_${(i % 4) + 1}.png`, 
        title: `Phụ kiện hồ cá ${i}`,
        content: `Thông tin về phụ kiện hồ cá số ${i}, giúp cải thiện môi trường sống cho cá.`,
        link: `blog${i}.html`
    });
}



const limitCardRender = 10;
let currentPage = 0;

function renderBlogs() {
    const startIndex = currentPage * limitCardRender;
    const endIndex = startIndex + limitCardRender;
    const pageItems = blogs.slice(startIndex, endIndex);
    const blogList = document.querySelector(".blog-content-list");
    blogList.innerHTML = "";
    pageItems.forEach(item => {
        const section = document.createElement("section");
        section.classList.add("blog-content-container");
        section.innerHTML =
        "<img src=\"" + item.img + "\" alt=\"" + item.title + "\" class=\"blog-content-img\">" +
        "<div class=\"blog-content-text\">" +
        "<h1 class=\"blog-content-title\">" + item.title + "</h1>" +
        "<p class=\"blog-content-summary\">" + item.content + "</p>" +
        "<div class=\"blog-content-information\">" +
        "<a class=\"blog-content-link\" href=\"" + item.link + "\">Xem thêm >></a>" +
        "</div>" +
        "</div>";
        blogList.appendChild(section);
    });
    document.getElementById("page-control-direct").value = currentPage + 1;
}

document.getElementById("next").addEventListener("click", () => {
    if ((currentPage + 1) * limitCardRender < blogs.length) {
        currentPage++;
        renderBlogs();
    }
});
document.getElementById("previous").addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        renderBlogs();
    }
});
document.getElementById("page-control-direct").addEventListener("change",(event) =>{
    const pageNum=parseInt(event.target.value);
    if(Number.isInteger(pageNum) == false ){
        alert("Số trang không hợp lệ !");
    }
    else if(pageNum  <= 0|| pageNum > Math.ceil(blogs.length / limitCardRender)){
        alert("trang không tồn tại!");
    }
    else{
        currentPage=pageNum-1;
        renderBlogs();
    }
});
renderBlogs();
