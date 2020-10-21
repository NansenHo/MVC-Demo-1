import $ from 'jquery'
import './app4.css'

const $circle = $('#app4 .circle')
const html = `
    <section id="app4">
        <div class="circle"></div>
    </section>
`
const $element = $(html).appendTo($('body>.page'))

// 要监听 鼠标进去 和 鼠标出来 两个事件
$circle.on('mouseenter',()=>{
    $circle.addClass('active')
}).on('mouseleave',()=>{
    $circle.removeClass('active')
})

// summary
// 使用 add 和 remove 修改 class