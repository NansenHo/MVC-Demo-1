import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
const n = localStorage.getItem('n')
$number.text(n || 100) // number 的初始值可能是 n ，但没有 n 的话就等于 100

$button1.on('click',()=>{
    let n = parseInt($number.text()) // 先获取内容。 parseInt 变成数字
    n += 1
    localStorage.setItem('n', n)
    $number.text(n) // 放回去
})
$button2.on('click',()=>{
    let n = parseInt($number.text())
    n -= 1
    $number.text(n)
})
$button3.on('click',()=>{
    let n = parseInt($number.text())
    n *= 1
    $number.text(n)
})
$button4.on('click',()=>{
    let n = parseInt($number.text())
    n /= 1
    $number.text(n)
})
// summary：
// 1. 用到很多事件监听
// 2. 用到了 text API