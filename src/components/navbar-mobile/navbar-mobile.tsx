import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik'
import styles from './navbar-mobile.css?inline'

interface Toggle {
  isToggle?: boolean,
}

export const NavbarMobile = component$(() => {
  useStylesScoped$(styles)
  const store = useStore({ toggle: false })

  return (
    <>
      <div id="menu" onClick$={() => {store.toggle = !store.toggle}}>
        <MenuBars key="menu-bars" isToggle={store.toggle}/>
        {store.toggle ? <Child key="child"/> : null}      
      </div>
      <MenuBg key="menu-bg" isToggle={store.toggle}/>
    </>
  )
})

export const Child = component$(() => {
  useStylesScoped$(styles)
  return (
    <nav class="nav" id="nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav> 
  )
})

export const MenuBars = component$((props: Toggle) => {
  useStylesScoped$(styles)
  return (
    <div id="menu-bar" class={[props.isToggle ? "change" : ""]}>
      <div id="bar1" class={[props.isToggle ? "bar change" : "bar"]}></div>
      <div id="bar2" class={[props.isToggle ? "bar change" : "bar"]}></div>
      <div id="bar3" class={[props.isToggle ? "bar change" : "bar"]}></div>
    </div>
  )
})

export const MenuBg = component$((props: Toggle) => {
  useStylesScoped$(styles)
  return (
    <div id="menu-bg" class={[props.isToggle ? "menu-bg change-bg" : "menu-bg"]}></div>
  )
})