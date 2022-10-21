import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header data-testid='header' id='header'>
      <div class="logo">
        <a href="https://qwik.builder.io/" rel="noopener" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <li>
          <a href="https://qwik.builder.io/docs/components/overview/" rel="noopener" target="_blank">
            Docs
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/examples/introduction/hello-world/" rel="noopener" target="_blank">
            Examples
          </a>
        </li>
        <li>
          <a href="https://qwik.builder.io/tutorial/welcome/overview/" rel="noopener" target="_blank">
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
