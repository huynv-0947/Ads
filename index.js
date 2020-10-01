const clickAbles = [
  { parent: 'overlay', child: 'close' },
  { parent: 'quangcaopc', child: 'closepc' }
];
const PlayPageElementClass = [];
const regexp = new RegExp("^https://xem.90p.tv/.*.html$", 'i');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    clickAbles.forEach((clickAble, index) => {
      let parent = document.getElementById(clickAble.parent);
      parent.querySelector('button.' + clickAble.child).click();
    })

    // Check current url
    if(regexp.test(location.href)) {
      document.querySelectorAll('div.footer-banner div.container').forEach((banner) => {
        banner.style.display = 'none';
      })
    } else {
      document.querySelectorAll('div.list-channel a.banner-link').forEach((banner) => {
        banner.parentElement.style.display = 'none';
      })
    }
  }, 100);
})
