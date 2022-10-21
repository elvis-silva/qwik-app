import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'
import styles from './navbar-mobile.css?inline'

interface MenuClass {
  toggle?: boolean
}

export const NavbarMobile = component$(() => {
  useStylesScoped$(styles);
  const store = useStore({ toggle: false })

  return (
    <>
      <div id="menu">
        <div id="menu-bar" onClick$={() => {
          store.toggle = !store.toggle
          console.log(`Toggle: ${store.toggle}`)
        }}>
          <div id="bar1" class="bar"></div>
          <div id="bar2" class="bar"></div>
          <div id="bar3" class="bar"></div>
      </div>
      {store.toggle ? <Child key="child"/> : null}      
    </div>
    {<MenuBg key="menuBg" toggle={store.toggle}/>}
  </>
  )
})

export const Child = component$(() => {
  useStylesScoped$(styles);
  return (
    <nav class="nav" id="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav> 
  );
});

export const MenuBg = component$((props: MenuClass) => {
  useStylesScoped$(styles);
  return (
    <div class={[props.toggle ? "menu-bg change-bg" : "menu-bg"]} id="menu-bg"></div>
  );
})