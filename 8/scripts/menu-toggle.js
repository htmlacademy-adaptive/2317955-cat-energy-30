var e="header__nav",s="header__menu-toggle",c="--is-opened",o="--is-closed",n=document.querySelector(`.${e}`),t=document.querySelector(`.${s}`),i=()=>{t.style.setProperty("--animation-top-strip","top-to-burger"),t.style.setProperty("--animation-bottom-strip","bottom-to-burger")},r=()=>{n.classList.toggle(`${e}${c}`),n.classList.toggle(`${e}${o}`),t.classList.toggle(`${s}${c}`),t.classList.toggle(`${s}${o}`)},l=()=>{n.classList.add(`${e}${o}`),t.classList.add(`${s}${o}`),t.addEventListener("click",i,{once:!0}),t.addEventListener("click",r)};export{l as init};
