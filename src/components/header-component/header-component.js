import { LitElement, html, css } from 'lit-element';

class HeaderComponent  extends LitElement {

  static get styles() {
    return css`
    :root {
      --bs-blue: #0d6efd;
      --bs-indigo: #6610f2;
      --bs-purple: #6f42c1;
      --bs-pink: #d63384;
      --bs-red: #dc3545;
      --bs-orange: #fd7e14;
      --bs-yellow: #ffc107;
      --bs-green: #198754;
      --bs-teal: #20c997;
      --bs-cyan: #0dcaf0;
      --bs-black: #000;
      --bs-white: #fff;
      --bs-gray: #6c757d;
      --bs-gray-dark: #343a40;
      --bs-gray-100: #f8f9fa;
      --bs-gray-200: #e9ecef;
      --bs-gray-300: #dee2e6;
      --bs-gray-400: #ced4da;
      --bs-gray-500: #adb5bd;
      --bs-gray-600: #6c757d;
      --bs-gray-700: #495057;
      --bs-gray-800: #343a40;
      --bs-gray-900: #212529;
      --bs-primary: #0d6efd;
      --bs-secondary: #6c757d;
      --bs-success: #198754;
      --bs-info: #0dcaf0;
      --bs-warning: #ffc107;
      --bs-danger: #dc3545;
      --bs-light: #f8f9fa;
      --bs-dark: #212529;
      --bs-primary-rgb: 13, 110, 253;
      --bs-secondary-rgb: 108, 117, 125;
      --bs-success-rgb: 25, 135, 84;
      --bs-info-rgb: 13, 202, 240;
      --bs-warning-rgb: 255, 193, 7;
      --bs-danger-rgb: 220, 53, 69;
      --bs-light-rgb: 248, 249, 250;
      --bs-dark-rgb: 33, 37, 41;
      --bs-white-rgb: 255, 255, 255;
      --bs-black-rgb: 0, 0, 0;
      --bs-body-color-rgb: 33, 37, 41;
      --bs-body-bg-rgb: 255, 255, 255;
      --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
      --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
      --bs-body-font-family: var(--bs-font-sans-serif);
      --bs-body-font-size: 1rem;
      --bs-body-font-weight: 400;
      --bs-body-line-height: 1.5;
      --bs-body-color: #212529;
      --bs-body-bg: #fff;
      --bs-border-width: 1px;
      --bs-border-style: solid;
      --bs-border-color: #dee2e6;
      --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
      --bs-border-radius: 0.375rem;
      --bs-border-radius-sm: 0.25rem;
      --bs-border-radius-lg: 0.5rem;
      --bs-border-radius-xl: 1rem;
      --bs-border-radius-2xl: 2rem;
      --bs-border-radius-pill: 50rem;
      --bs-link-color: #0d6efd;
      --bs-link-hover-color: #0a58ca;
      --bs-code-color: #d63384;
      --bs-highlight-bg: #fff3cd;
    }
    
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
    
    @media (prefers-reduced-motion: no-preference) {
      :root {
        scroll-behavior: smooth;
      }
    }
    
    body {
      margin: 0;
      font-family: var(--bs-body-font-family);
      font-size: var(--bs-body-font-size);
      font-weight: var(--bs-body-font-weight);
      line-height: var(--bs-body-line-height);
      color: var(--bs-body-color);
      text-align: var(--bs-body-text-align);
      background-color: var(--bs-body-bg);
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .bg-dark {
      --bs-bg-opacity: 1;
      background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
    }
    .text-secondary {
      --bs-text-opacity: 1;
      color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
    }
    .px-4 {
      padding-right: 1.5rem !important;
      padding-left: 1.5rem !important;
    }
    .py-5 {
      padding-top: 3rem !important;
      padding-bottom: 3rem !important;
    }
    .text-center {
      text-align: center !important;
    }
    .display-5 {
      font-size: calc(1.425rem + 2.1vw);
      font-weight: 300;
      line-height: 1.2;
    }
    @media (min-width: 1200px) {
      .display-5 {
        font-size: 3rem;
      }
    }
    .fw-bold {
      font-weight: 700 !important;
    }
    .text-white {
      --bs-text-opacity: 1;
      color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
    }
    .col-lg-6 {
      flex: 0 0 auto;
      width: 50%;
    }
    .mx-auto {
      margin-right: auto !important;
      margin-left: auto !important;
    }
    .fs-5 {
      font-size: 1.25rem !important;
    }
    .mb-4 {
      margin-bottom: 1.5rem !important;
    }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="bg-dark text-secondary px-4 py-5 text-center">
      <div class="py-5">
        <h1 class="display-5 fw-bold text-white">Rick And Morty API</h1>
        <div class="col-lg-6 mx-auto">
          <p class="fs-5 mb-4">Este es un ejemplo de consumo de la api de rick and morty, haciendo paginacion y un poco de boostrap.</p>
        </div>
      </div>
    </div>      
    `;
  }
}

customElements.define('header-component', HeaderComponent);