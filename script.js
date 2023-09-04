// JavaScript không cần thiết nếu bạn chỉ muốn hiển thị carousel tĩnh.

// Nếu bạn muốn tạo một carousel trượt tự động, bạn có thể sử dụng JavaScript để thực hiện điều này.
// Dưới đây là một ví dụ sử dụng JavaScript để tạo chuyển đổi tự động:

const slideItems = document.querySelectorAll('.slide-item');
let currentSlide = 0;

function nextSlide() {
    slideItems[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slideItems.length;
    slideItems[currentSlide].style.opacity = 1;
}

setInterval(nextSlide, 2000); // Tự động chuyển slide sau mỗi 5 giây
