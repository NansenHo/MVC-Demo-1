import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')
// 有三种情况：yes no undefined
const active = localStorage.getItem('app3.active') === 'yes'

const html = `
    <section id="app3">
        <div class="square"></div>
    </section>
`
const $element = $(html).appendTo($('body>.page'))

// if(active){
//     $square.addClass('active')
// }else{
//     $square.removeClass('active')
// }
// 上面四行可以简化成下面的
$square.toggleClass('active', active)
// 会根据第二个参数是 true / false 来加不加第一个参数

$square.on('click', ()=>{
    if($square.hasClass('active')){
        $square.removeClass('active')
        localStorage.setItem('app3.active','no') // 移除之后，记录下来
    }else{
        $square.addClass('active')
        localStorage.setItem('app3.active','yes')
    } // 如果方块上有 active 就删掉，没有就加上
    // $square.toggleClass('active')
    // toggleClass 意思是如果有就删掉，如果没有就加上
    // 有这个就能实现，让小方块被点击之后，往返移动
})

// summary
// 用到了 toggleClass