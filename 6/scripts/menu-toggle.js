var s="header__nav",t="header__menu-toggle",n="--is-opened",e="--is-closed",c=document.querySelector(`.${s}`),o=document.querySelector(`.${t}`),l=()=>{c.classList.toggle(`${s}${n}`),c.classList.toggle(`${s}${e}`),o.classList.toggle(`${t}${n}`),o.classList.toggle(`${t}${e}`)},$=()=>{c.classList.add(`${s}${e}`),o.classList.add(`${t}${e}`),o.addEventListener("click",l)};export{$ as init};
