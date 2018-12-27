加载完成 js 之后使用

let t = new TimelineMax()

创建了动画效果

### 基本用法

然后使用 api:

to: 通过设定动画终点来初始化一个 TweenMax，是最常用的 TweenMax 结构化方式。

TweenMax.to( target:Object, duration:Number, vars:Object ) : TweenMax

from: 通过设置动画起始点来初始化一个 TweenMax，相当于动画从设置点开始。

fromTo: 通过设置动画起始点和结束点来初始化一个 TweenMax，相当于动画从设置点到第二个设置点。

staggerTo:stagger 系列方法为多个目标制作一个有间隔的动画序列，相当于多个 TweenMax 的数组。需要设置每个动画的开始间隔。如不设置则为零，同时开始动画。

delayedCall：通过设定序列动画的终点来初始化一组 TweenMax。

TweenMax.delayedCall( delay:Number, callback:Function, params:Array, scope:\*, useFrames:Boolean ) : TweenMax

set: 提供一种在设定的时间（或帧）后调用函数的简单方法。

TweenMax.set( target:Object, vars:Object )


### 运动的属性

delay - 动画开始之前的延迟秒数（以帧为单位时则为帧数）。

ease - 过渡效果的速度曲线（缓动效果）。你可以在动画的参数中设置各种缓动来控制动画的变化率，赋予其特定的“感觉”。

paused - 如果设置为true，动画将在创建时立即暂停。默认false

immediateRender

overwrite

useFrames

lazy

autoCSS

callbackScope

repeat

repeatDelay

yoyo

yoyoEase

startAtx