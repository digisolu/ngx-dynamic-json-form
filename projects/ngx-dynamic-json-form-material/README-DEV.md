# Developer Guide

This is a short introduction for developers.

## Development

## Start the development build

Run the libraries you need

```bash
# Dev-Build Core
npm run lib:core:dev
```

```bash
# Dev-Build for Material Design
npm run lib:material:dev
```

## Start Storybook as Example Project and to read the Docs

```bash
# Dev-Build Storybook and Docs
npm run lib:material:storybook:dev
```

## Build

```bash
# Dev-Build Storybook and Docs
npm run build
```

Several tasks will be executed:

<table width="100%">
  <thead>
    <tr>
      <th align="left">Task</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>format</td>
        <td>Code Format: using Prettier</td>
      </tr>
      <tr>
        <td>lint:lib</td>
        <td>Code linting: using EsLint</td>
      </tr>
      <tr>
        <td>lint:scss</td>
        <td>SCSS Format: using StyleLint</td>
      </tr>
      <tr>
        <td>test:build</td>
        <td>Running Unit Tests: using Karma / Jasmine</td>
      </tr>
      <tr>
        <td>lib:core:build</td>
        <td>Building the Core Lib</td>
      </tr>
      <tr>
        <td>lib:material:build</td>
        <td>Building the Material Design Lib</td>
      </tr>
      <tr>
        <td>lib:material:docs:build</td>
        <td>Building Storybook</td>
      </tr>
  </tbody>
</table>

## Running unit tests

Running all Tests:

```bash
# Running all tests
npm run test
```

Running only the Core-Tests:

```bash
# Running only the Core-Tests
npm run npm:lib:core:test:dev
```

Running only Material-Tests:

```bash
# Running only Material-Tests
npm run npm:lib:material:test:dev
```

## Linting

Linting all libraries (TS / HTML):

```bash
# Lint all libs (TS / HTML)
npm run lint:lib
```

Linting all libraries (SCSS):

```bash
# Lint all libs (SCSS)
npm run lint:scss
```
