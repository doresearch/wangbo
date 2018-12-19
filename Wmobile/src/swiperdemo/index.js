// Swiper + tweenMax
import './tweenMax'
import Swiper from 'swiper'
import { randomColor } from '../../lib/js/extend'
import './index.less'
import './animate.less'

function _$(el) {
  return [...document.querySelectorAll(el)]
}

_$('.swiper-slide').map((item, i) => {
  item.style.background = randomColor()
})

var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical', // 垂直切换选项
  // slidesPerView: 'auto',
  // autoHeight: 'auto',
  // loop: true, // 循环模式选项

  // 如果需要分页器
  // pagination: {
  //   el: '.swiper-pagination'
  // },

  // // 如果需要前进后退按钮
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // },

  // // 如果需要滚动条
  scrollbar: {
    el: '.swiper-scrollbar'
  }
})
