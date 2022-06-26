export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}

export const getRandomColor = () => {
  const letters = 'ABCDEF1234567890'
  let color = '#'
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

export const getPosition = (event) => {
  if (!event) {
    event = window.event
  }

  const html = document.querySelector("html");
  const menu = document.querySelector('#menu')

  let menuWidth = window.getComputedStyle(menu).getPropertyValue("width")
  let menuHeight = window.getComputedStyle(menu).getPropertyValue("height")

  menuWidth = Number(menuWidth.split('').slice(0, menuWidth.length - 2).join(''))
  menuHeight = Number(menuHeight.split('').slice(0, menuHeight.length - 2).join(''))

  const clientWidth = html.clientWidth
  const clientHeight = html.clientHeight

  if(event.pageX + menuWidth > clientWidth) {
    return {
      x: clientWidth - menuWidth,
      y: event.pageY
    }
  } else if(event.pageY + menuHeight > clientHeight) {
    return {
      x: event.pageX,
      y: clientHeight - menuHeight
    }
  } else {
    return {
      x: event.pageX,
      y: event.pageY
    }
  }
}

export const getRandomPositionForElement = (elementWidth, elementHeight) => {
  const html = document.querySelector("html");
  const clientWidth = html.clientWidth;
  const clientHeight = html.clientHeight;
  return {
    x: random(0, clientWidth - elementWidth),
    y: random(0, clientHeight - elementHeight),
  }
}