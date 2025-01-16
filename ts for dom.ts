// ts dom manupulation needs narrowing

let title = document.querySelector('#title')
title ? title.innerHTML = "altertitle" : void undefined

let link = document.querySelector('a[href="google.com"]')
link instanceof HTMLAnchorElement ?
  link.href = "https://www.google.com" :
  void 0