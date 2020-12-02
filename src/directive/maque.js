import reactPng from '@/assets/react2x.png'
export default {
    componentUpdated (el, binding) {
        const { speed, count, containerHeight, itemHeight } = binding.value
        let moveY = 0
        let timer = null
        let timerCheckStop = null
        // 临时用来存储的timer
        let timerSwap = null
        const oMaqueArea = el.querySelector('.maque-move-area')
        if (containerHeight >= count * itemHeight) {
            // 说明容器足够放得下内容，不需要滚动
            return
        }
        // 建立一个矩形方块 完成视图设计
        const oReact = document.createElement('div')
        oReact.className = 'react-has-dot'
        oReact.style.position = 'absolute'
        oReact.style.top = '29px'
        oReact.style.left = '25px'
        oReact.style.width = 'calc(100% - 50px)'
        oReact.style.height = '60px'
        oReact.style.zIndex = 2
        oReact.style.backgroundImage = `url(${reactPng})`
        oReact.style.backgroundSize = 'contain'
        oReact.style.backgroundRepeat = 'no-repeat'
        oReact.style.backgroundPosition = 'center center'
        // oReact.style.backgroundPosition = '-5px -3px'
        // 因为矩形框可能会超出content层，所以只能加到content外层，以免hidden掉
        el.parentElement.append(oReact)

        // 复制一份，以供无缝滚动使用
        oMaqueArea.style.transition = `top .5s linear`
        const oMaqueAreaClone = oMaqueArea.innerHTML
        oMaqueArea.innerHTML += oMaqueAreaClone
        // 第一个元素变绿
        oMaqueArea.children[0].style.color = '#48EF5B'
        timerSwap = setTimeout(() => {
            if (timer) {
                oMaqueArea.children[0].style.color = ''
            } else {
                timerCheckStop = setInterval(() => {
                    if (timer) {
                        setTimeout(() => {
                            oMaqueArea.children[0].style.color = ''
                        }, speed * 1000)
                        clearInterval(timerCheckStop)
                        timerCheckStop = null
                    }
                }, 500)
            }
        }, speed * 1000 )

        timer = setInterval(() => {
            const activeIndex = (0 - moveY) / itemHeight + 1
            const activeItem = oMaqueArea.children[activeIndex]
            // 上滚动画结束后，变绿
            setTimeout(() => {
                activeItem.style.color = '#48EF5B'
                // 一个周期后，恢复颜色
                timerSwap = setTimeout(() => {
                    if (timer) {
                        activeItem.style.color = ''
                    } else {
                        timerCheckStop = setInterval(() => {
                            if (timer) {
                                setTimeout(() => {
                                    activeItem.style.color = ''
                                }, speed * 1000)
                                clearInterval(timerCheckStop)
                                timerCheckStop = null
                            }
                        }, 500)
                    }
                }, speed * 1000 )
            }, 500)
            moveY -= itemHeight
            oMaqueArea.style.top = `${moveY}px`
            if (moveY < (0 - itemHeight) * count) {
                // 归零的时候，不能有动画
                oMaqueArea.style.transition = ''
                oMaqueArea.style.top = '0px'
                setTimeout(() => {
                    oMaqueArea.style.transition = 'top .5s linear'
                    oMaqueArea.style.top = `-${itemHeight}px`
                    // 第二个元素变绿
                    oMaqueArea.children[1].style.color = '#48EF5B'
                    timerSwap = setTimeout(() => {
                        if (timer) {
                            oMaqueArea.children[1].style.color = ''
                        } else {
                            timerCheckStop = setInterval(() => {
                                if (timer) {
                                    setTimeout(() => {
                                        oMaqueArea.children[1].style.color = ''
                                    }, speed * 1000)
                                    clearInterval(timerCheckStop)
                                    timerCheckStop = null
                                }
                            }, 500)
                        }
                    }, speed * 1000)
                }, 20)
                moveY = (0 - itemHeight)
            }
        }, speed * 1000)

        oMaqueArea.addEventListener('mouseover', () => {
            clearInterval(timer)
            clearInterval(timerCheckStop)
            clearTimeout(timerSwap)
            timer = null
            timerCheckStop = null
            timerSwap = null
        }, false)
        oMaqueArea.addEventListener('mouseleave', () => {
            timer = setInterval(() => {
                const activeIndex = (0 - moveY) / itemHeight + 1
                const activeItem = oMaqueArea.children[activeIndex]
                // 上滚动画结束后，变绿
                setTimeout(() => {
                    activeItem.style.color = '#48EF5B'
                    // 一个周期后，恢复颜色
                    timerSwap = setTimeout(() => {
                        if (timer) {
                            activeItem.style.color = ''
                        } else {
                            timerCheckStop = setInterval(() => {
                                if (timer) {
                                    setTimeout(() => {
                                        activeItem.style.color = ''
                                    }, speed * 1000)
                                    clearInterval(timerCheckStop)
                                    timerCheckStop = null
                                }
                            }, 500)
                        }
                    }, speed * 1000 )
                }, 500)
                moveY -= itemHeight
                oMaqueArea.style.top = `${moveY}px`
                if (moveY < (0 - itemHeight) * count) {
                    // 归零的时候，不能有动画
                    oMaqueArea.style.transition = ''
                    oMaqueArea.style.top = '0px'
                    setTimeout(() => {
                        oMaqueArea.style.transition = 'top .5s linear'
                        oMaqueArea.style.top = `-${itemHeight}px`
                        // 第二个元素变绿
                        oMaqueArea.children[1].style.color = '#48EF5B'
                        timerSwap = setTimeout(() => {
                            if (timer) {
                                oMaqueArea.children[1].style.color = ''
                            } else {
                                timerCheckStop = setInterval(() => {
                                    if (timer) {
                                        setTimeout(() => {
                                            oMaqueArea.children[1].style.color = ''
                                        }, speed * 1000)
                                        clearInterval(timerCheckStop)
                                        timerCheckStop = null
                                    }
                                }, 500)
                            }
                        }, speed * 1000)
                    }, 20)
                    moveY = (0 - itemHeight)
                }
            }, speed * 1000)           
        }, false)
    }
}
