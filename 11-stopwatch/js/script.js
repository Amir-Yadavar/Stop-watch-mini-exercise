let $ = document
        let button = $.getElementsByTagName('button')
        let spanTime = $.querySelectorAll('.conteiner>section:nth-of-type(1)>span')
        let ulElem = $.querySelectorAll('.conteiner>section:nth-of-type(3)>ul')
        let spanUlElem = $.querySelectorAll('.label')

        let k = 0
        let s = 0
        let m = 0
        let temp

        let sumK = 0
        let sumS = 0
        let sumM = 0
        let baghiK = 0


        button[1].addEventListener('click', () => {
            statusName = button[1].getAttribute('data-status')

            if (statusName == 'Start') {
                temp = setInterval(startfunc, 10)

                button[1].innerHTML = 'Stop'
                button[1].style.backgroundColor = 'rgb(149 82 82)'
                button[1].setAttribute('data-status', 'Stop')

            }
            if (statusName == 'Stop') {
                clearInterval(temp)

                button[1].innerHTML = 'Resume'
                button[1].style.backgroundColor = '#0f4b6c'
                button[1].setAttribute('data-status', 'Resume')
                button[0].innerHTML = 'Reset'
                button[0].setAttribute('data-status', 'Reset')

            }
            if (statusName == 'Resume') {
                temp = setInterval(startfunc, 10)

                button[1].innerHTML = 'Stop'
                button[1].style.backgroundColor = 'rgb(149 82 82)'
                button[1].setAttribute('data-status', 'Stop')
                button[0].innerHTML = 'Lap'
                button[0].setAttribute('data-status', 'Lap')

            }
        })

        button[0].addEventListener('click', () => {
            statusName2 = button[0].getAttribute('data-status')

            if (statusName2 == 'Lap') {
                arrayK = []
                arrayS = []
                arrayM = []

                arrayK.push(k)
                arrayS.push(s)
                arrayM.push(m)

                lastK = arrayK[0]
                lastS = arrayS[0]
                lastM = arrayM[0]
                sumK = sumK + lastK
                sumS = sumS + lastS
                sumM = sumM + lastM

                if (sumK > 99) {
                    sumK = sumK - 100
                    sumS = sumS + 1

                }

                if (sumS > 59) {
                    sumS = sumS - 59
                    sumM = sumM + 1
                }

                if (sumK < 10) {
                    sumK = '0' + sumK
                }
                if (sumM == 0) {
                    sumM = 0
                    let liElem2 = $.createElement('li')

                    liElem2.innerHTML = sumM + ':' + sumS + '.' + sumK
                    ulElem[1].appendChild(liElem2)
                } else {
                    let liElem2 = $.createElement('li')

                    liElem2.innerHTML = sumM + ':' + sumS + '.' + sumK
                    ulElem[1].appendChild(liElem2)
                }

                if (s < 10) {
                    s = '0' + s
                }
                
                if (k < 10) {
                    k = '0' + k
                }

                let liElem = document.createElement('li')

                if (m == 0) {
                    liElem.innerHTML = "00 :" + s + " . " + k

                    ulElem[0].appendChild(liElem)
                } else {
                    liElem.innerHTML = m + " : " + s + " . " + k
                    ulElem[0].appendChild(liElem)
                }

                spanUlElem[0].style.opacity = '1'
                spanUlElem[0].style.visibility = 'visible'
                spanUlElem[1].style.opacity = '1'
                spanUlElem[1].style.visibility = 'visible'

            }


            if (statusName2 == 'Reset') {
                button[1].innerHTML = 'Start'
                button[1].style.backgroundColor = 'gray'
                button[1].setAttribute('data-status', 'Start')
                button[0].innerHTML = 'Lap'
                button[0].setAttribute('data-status', 'Lap')
                spanTime[0].innerHTML = '00'
                spanTime[2].innerHTML = '00'
                spanTime[4].innerHTML = '00'
                ulElem[0].innerHTML = ''
                ulElem[1].innerHTML = ''
                spanUlElem[0].style.opacity = '0'
                spanUlElem[0].style.visibility = 'hidden'
                spanUlElem[1].style.opacity = '0'
                spanUlElem[1].style.visibility = 'hidden'
                arrayK = []
                arrayM = []
                arrayS = []
                k = 0
                s = 0
                m = 0
                sumK = 0
                sumS = 0
                sumM = 0
            }
        })

        function startfunc() {

            if (k < 99) {
                k++

                if (k < 10) {
                    spanTime[4].innerHTML = '0' + k
                } else {
                    spanTime[4].innerHTML = k
                }
            } else {
                k = 0
                if (s < 59) {
                    s++
                    if (s < 10) {
                        spanTime[2].innerHTML = '0' + s
                    } else {
                        spanTime[2].innerHTML = s
                    }
                } else {
                    s = 0

                    m++
                    if (m < 10) {
                        spanTime[0].innerHTML = '0' + m
                    } else {
                        spanTime[0].innerHTML = m
                    }

                }


            }
        }