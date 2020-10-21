import './app2.css'
import $ from 'jquery'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const index = localStorage.getItem('app2.index') || 0
// 有可能 app2.index 还是空，所以要有一个保底值

const html = `
    <section id="app2">
        <ol class="tab-bar">
            <li><span>1111</span></li>
            <li><span>2222</span></li>
        </ol>
        <ol class="tab-content">
            <li>内容 1 </li>
            <li>内容 2 </li>
        </ol>
    </section>
`
const $element = $(html).appendTo($('body>.page'))

$tabBar.on('click','li', (e)=>{ //jquery 提供了一个可以监听子元素的事件的方法
    // console.log(e.target) // 定位精确，点击了什么就是什么，比如说我把东西写 li 里面的 span 里，那最后就是 span 被打出来了。
    // 但我并不想要这么精确，我只想知道是第几个 li ，所以用 currentTarget
    const $li = $(e.currentTarget) // 用 jquery 元素将这个 DOM 元素封装一下
    $li.addClass('selected')
        .siblings().removeClass('selected')
    const index = $li.index() // 知道 li 是第几个
    localStorage.setItem('app2.index', index)
    $tabContent.children()
        .eq(index).addClass('active') // eq(index) 即 eq 等于第 index 个的意思。
        .siblings().removeClass('active')
    // 用 addClass & removeClass ，JS 就不用去管 CSS 是怎么写的
})

$tabBar.children().eq(index).trigger('click')
// eq(0) 找到 index 等于 0 的
// trigger('click') 触发其 click 事件1

// summary
// 注意 index 的用法