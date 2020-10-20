import $ from 'jquery'
import './app3.css'
const $square = $('#app3 .square')

$square.on('click', ()=>{
    $square.toggleClass('active')
    // toggleClass 意思是如果有就删掉，如果没有就加上
    // 有这个就能实现，让小方块被点击之后，往返移动
})

// summary
// 用到了 toggleClass