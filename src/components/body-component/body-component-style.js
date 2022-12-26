import {css} from 'lit-element'

export default css `

@charset "UTF-8";
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

      .pagination {
        --bs-pagination-padding-x: 0.75rem;
        --bs-pagination-padding-y: 0.375rem;
        --bs-pagination-font-size: 1rem;
        --bs-pagination-color: var(--bs-link-color);
        --bs-pagination-bg: #fff;
        --bs-pagination-border-width: 1px;
        --bs-pagination-border-color: #dee2e6;
        --bs-pagination-border-radius: 0.375rem;
        --bs-pagination-hover-color: var(--bs-link-hover-color);
        --bs-pagination-hover-bg: #e9ecef;
        --bs-pagination-hover-border-color: #dee2e6;
        --bs-pagination-focus-color: var(--bs-link-hover-color);
        --bs-pagination-focus-bg: #e9ecef;
        --bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
        --bs-pagination-active-color: #fff;
        --bs-pagination-active-bg: #0d6efd;
        --bs-pagination-active-border-color: #0d6efd;
        --bs-pagination-disabled-color: #6c757d;
        --bs-pagination-disabled-bg: #fff;
        --bs-pagination-disabled-border-color: #dee2e6;
        display: flex;
        padding-left: 0;
        list-style: none;
      }
      .page-item:not(:first-child) .page-link {
        margin-left: -1px;
      }
      .page-item:first-child .page-link {
        border-top-left-radius: var(--bs-pagination-border-radius);
        border-bottom-left-radius: var(--bs-pagination-border-radius);
      }
      .page-item:last-child .page-link {
        border-top-right-radius: var(--bs-pagination-border-radius);
        border-bottom-right-radius: var(--bs-pagination-border-radius);
      }
      .page-link {
        position: relative;
        display: block;
        padding: var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);
        font-size: var(--bs-pagination-font-size);
        color: var(--bs-pagination-color);
        text-decoration: none;
        background-color: var(--bs-pagination-bg);
        border: var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      }
      @media (prefers-reduced-motion: reduce) {
        .page-link {
          transition: none;
        }
      }
      .page-link:hover {
        z-index: 2;
        color: var(--bs-pagination-hover-color);
        background-color: var(--bs-pagination-hover-bg);
        border-color: var(--bs-pagination-hover-border-color);
      }
      .page-link:focus {
        z-index: 3;
        color: var(--bs-pagination-focus-color);
        background-color: var(--bs-pagination-focus-bg);
        outline: 0;
        box-shadow: var(--bs-pagination-focus-box-shadow);
      }
      .page-link.active, .active > .page-link {
        z-index: 3;
        color: var(--bs-pagination-active-color);
        background-color: var(--bs-pagination-active-bg);
        border-color: var(--bs-pagination-active-border-color);
      }
      .page-link.disabled, .disabled > .page-link {
        color: var(--bs-pagination-disabled-color);
        pointer-events: none;
        background-color: var(--bs-pagination-disabled-bg);
        border-color: var(--bs-pagination-disabled-border-color);
      } 
      .container,
    .container-fluid,
    .container-xxl,
    .container-xl,
    .container-lg,
    .container-md,
    .container-sm {
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-right: auto;
    margin-left: auto;
    }

    @media (min-width: 576px) {
    .container-sm, .container {
        max-width: 540px;
    }
    }
    @media (min-width: 768px) {
    .container-md, .container-sm, .container {
        max-width: 720px;
    }
    }
    @media (min-width: 992px) {
    .container-lg, .container-md, .container-sm, .container {
        max-width: 960px;
    }
    }
    @media (min-width: 1200px) {
    .container-xl, .container-lg, .container-md, .container-sm, .container {
        max-width: 1140px;
    }
    }
    @media (min-width: 1400px) {
    .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {
        max-width: 1320px;
    }
    }
    .card {
        --bs-card-spacer-y: 1rem;
        --bs-card-spacer-x: 1rem;
        --bs-card-title-spacer-y: 0.5rem;
        --bs-card-border-width: 1px;
        --bs-card-border-color: var(--bs-border-color-translucent);
        --bs-card-border-radius: 0.375rem;
        --bs-card-box-shadow: ;
        --bs-card-inner-border-radius: calc(0.375rem - 1px);
        --bs-card-cap-padding-y: 0.5rem;
        --bs-card-cap-padding-x: 1rem;
        --bs-card-cap-bg: rgba(0, 0, 0, 0.03);
        --bs-card-cap-color: ;
        --bs-card-height: ;
        --bs-card-color: ;
        --bs-card-bg: #fff;
        --bs-card-img-overlay-padding: 1rem;
        --bs-card-group-margin: 0.75rem;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        height: var(--bs-card-height);
        word-wrap: break-word;
        background-color: var(--bs-card-bg);
        background-clip: border-box;
        border: var(--bs-card-border-width) solid var(--bs-card-border-color);
        border-radius: var(--bs-card-border-radius);
    }
    .card > hr {
        margin-right: 0;
        margin-left: 0;
    }
    .card > .list-group {
        border-top: inherit;
        border-bottom: inherit;
    }
    .card > .list-group:first-child {
        border-top-width: 0;
        border-top-left-radius: var(--bs-card-inner-border-radius);
        border-top-right-radius: var(--bs-card-inner-border-radius);
    }
    .card > .list-group:last-child {
        border-bottom-width: 0;
        border-bottom-right-radius: var(--bs-card-inner-border-radius);
        border-bottom-left-radius: var(--bs-card-inner-border-radius);
    }
    .card > .card-header + .list-group,
    .card > .list-group + .card-footer {
        border-top: 0;
    }
    
    .card-body {
        flex: 1 1 auto;
        padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
        color: var(--bs-card-color);
    }
    
    .card-title {
        margin-bottom: var(--bs-card-title-spacer-y);
    }
    
    .card-subtitle {
        margin-top: calc(-0.5 * var(--bs-card-title-spacer-y));
        margin-bottom: 0;
    }
    
    .card-text:last-child {
        margin-bottom: 0;
    }
    
    .card-link + .card-link {
        margin-left: var(--bs-card-spacer-x);
    }
    
    .card-header {
        padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
        margin-bottom: 0;
        color: var(--bs-card-cap-color);
        background-color: var(--bs-card-cap-bg);
        border-bottom: var(--bs-card-border-width) solid var(--bs-card-border-color);
    }
    .card-header:first-child {
        border-radius: var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0;
    }
    
    .card-footer {
        padding: var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);
        color: var(--bs-card-cap-color);
        background-color: var(--bs-card-cap-bg);
        border-top: var(--bs-card-border-width) solid var(--bs-card-border-color);
    }
    .card-footer:last-child {
        border-radius: 0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius);
    }
    
    .card-header-tabs {
        margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
        margin-bottom: calc(-1 * var(--bs-card-cap-padding-y));
        margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
        border-bottom: 0;
    }
    .card-header-tabs .nav-link.active {
        background-color: var(--bs-card-bg);
        border-bottom-color: var(--bs-card-bg);
    }
    
    .card-header-pills {
        margin-right: calc(-0.5 * var(--bs-card-cap-padding-x));
        margin-left: calc(-0.5 * var(--bs-card-cap-padding-x));
    }
    
    .card-img-overlay {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: var(--bs-card-img-overlay-padding);
        border-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-top,
    .card-img-bottom {
        width: 100%;
    }
    
    .card-img,
    .card-img-top {
        border-top-left-radius: var(--bs-card-inner-border-radius);
        border-top-right-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-img,
    .card-img-bottom {
        border-bottom-right-radius: var(--bs-card-inner-border-radius);
        border-bottom-left-radius: var(--bs-card-inner-border-radius);
    }
    
    .card-group > .card {
        margin-bottom: var(--bs-card-group-margin);
    }
    @media (min-width: 576px) {
        .card-group {
        display: flex;
        flex-flow: row wrap;
        }
        .card-group > .card {
        flex: 1 0 0%;
        margin-bottom: 0;
        }
        .card-group > .card + .card {
        margin-left: 0;
        border-left: 0;
        }
        .card-group > .card:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        }
        .card-group > .card:not(:last-child) .card-img-top,
    .card-group > .card:not(:last-child) .card-header {
        border-top-right-radius: 0;
        }
        .card-group > .card:not(:last-child) .card-img-bottom,
    .card-group > .card:not(:last-child) .card-footer {
        border-bottom-right-radius: 0;
        }
        .card-group > .card:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        }
        .card-group > .card:not(:first-child) .card-img-top,
    .card-group > .card:not(:first-child) .card-header {
        border-top-left-radius: 0;
        }
        .card-group > .card:not(:first-child) .card-img-bottom,
    .card-group > .card:not(:first-child) .card-footer {
        border-bottom-left-radius: 0;
        }
    } 
    .row {
        --bs-gutter-x: 1.5rem;
        --bs-gutter-y: 0;
        display: flex;
        flex-wrap: wrap;
        margin-top: calc(-1 * var(--bs-gutter-y));
        margin-right: calc(-0.5 * var(--bs-gutter-x));
        margin-left: calc(-0.5 * var(--bs-gutter-x));
      }
      .row > * {
        flex-shrink: 0;
        width: 100%;
        max-width: 100%;
        padding-right: calc(var(--bs-gutter-x) * 0.5);
        padding-left: calc(var(--bs-gutter-x) * 0.5);
        margin-top: var(--bs-gutter-y);
      }
      .row-cols-1 > * {
        flex: 0 0 auto;
        width: 100%;
      }
      .row-cols-sm-2 > * {
        flex: 0 0 auto;
        width: 50%;
      }
      .row-cols-md-3 > * {
        flex: 0 0 auto;
        width: 33.3333333333%;
      }
      .g-3,
      .gx-3 {
      --bs-gutter-x: 1rem;
      }
      .position-relative {
        position: relative !important;
      }S
      .bottom-0 {
        bottom: 0 !important;
      }
      .end-0 {
        right: 0 !important;
      }
      .d-flex {
        display: flex !important;
      }
      .form-check {
        display: block;
        min-height: 1.5rem;
        padding-left: 1.5em;
        margin-bottom: 0.125rem;
      }
      .form-check .form-check-input {
        float: left;
        margin-left: -1.5em;
      }
      
      .form-check-reverse {
        padding-right: 1.5em;
        padding-left: 0;
        text-align: right;
      }
      .form-check-reverse .form-check-input {
        float: right;
        margin-right: -1.5em;
        margin-left: 0;
      }
      
      .form-check-input {
        width: 1em;
        height: 1em;
        margin-top: 0.25em;
        vertical-align: top;
        background-color: #fff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        border: 1px solid rgba(0, 0, 0, 0.25);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        -webkit-print-color-adjust: exact;
        color-adjust: exact;
        print-color-adjust: exact;
      }
      .form-check-input[type=checkbox] {
        border-radius: 0.25em;
      }
      .form-check-input[type=radio] {
        border-radius: 50%;
      }
      .form-check-input:active {
        filter: brightness(90%);
      }
      .form-check-input:focus {
        border-color: #86b7fe;
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
      }
      .form-check-input:checked {
        background-color: #0d6efd;
        border-color: #0d6efd;
      }
      .form-check-input:checked[type=checkbox] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
      }
      .form-check-input:checked[type=radio] {
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e");
      }
      .form-check-input[type=checkbox]:indeterminate {
        background-color: #0d6efd;
        border-color: #0d6efd;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
      }
      .form-check-input:disabled {
        pointer-events: none;
        filter: none;
        opacity: 0.5;
      }
      .form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
        cursor: default;
        opacity: 0.5;
      }
      

`