const tabs = document.querySelectorAll('.page.right .tab'); // 只选右页上的标签
const pageGroups = document.querySelectorAll('.page-group');

const currentPageIndex = 0;

tabs.forEach(tab => {
  const idx = parseInt(tab.dataset.target);
  const color = tab.getAttribute('data-color'); // 获取自定义颜色
  const pageRight = pageGroups[idx]?.querySelector('.page.right');

  tab.addEventListener('mouseenter', () => {
    if (idx > currentPageIndex && pageRight) {
      pageGroups[idx].style.transform = 'translateX(10px) rotateY(-3deg)';
      tab.style.backgroundColor = color;
      pageRight.style.backgroundColor = color;
    }
  });



  tab.addEventListener('mouseleave', () => {
    if (idx > currentPageIndex && pageRight) {
      pageGroups[idx].style.transform = 'translateX(0px) rotateY(0deg)';
      tab.style.backgroundColor = '#f6f6f6'; // 恢复默认
      pageRight.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'; // 恢复透明磨砂
    }
  });
});
