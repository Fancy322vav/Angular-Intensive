# TodoFetch

An Angular application demonstrating RxJS-based data fetching with multiple approaches. The app fetches and displays todos from JSONPlaceholder API with three different methods:

1. **Todo List (Even IDs)** - Fetches and filters todos with even IDs
2. **Random Todo** - Fetches a random todo using `fromEvent` and `switchMap`
3. **Exact Todo by ID** - Uses RxJS-based counter store with `BehaviorSubject` to fetch specific todos

This project demonstrates modern Angular 21 features including signals, standalone components, and reactive patterns with RxJS.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Features

- **RxJS Observables**: HTTP requests using Angular's `HttpClient`
- **Signal-based State**: Modern Angular signals for reactive state management
- **RxJS Store Pattern**: Custom counter service using `BehaviorSubject`
- **Higher-Order Observables**: `switchMap` for handling nested Observables
- **Event Handling**: `fromEvent` for DOM event streams
- **Error Handling**: Proper error states and loading indicators
- **Responsive Design**: Clean, modern UI with CSS Grid layout

## Technologies Used

- Angular 21
- RxJS 7.8
- TypeScript 5.9
- Standalone Components
- Signals API
- JSONPlaceholder API

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
