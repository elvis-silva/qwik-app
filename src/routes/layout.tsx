import { component$, Slot } from '@builder.io/qwik';
import { NavbarMobile } from '~/components/navbar-mobile/navbar-mobile';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <NavbarMobile />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" rel="noopener" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
