# Factory

An Angular application demonstrating advanced dependency injection patterns including factory providers, global and local service instances, and RxJS-based state management.

## Features

- **Global & Local Counters**: Demonstrates `@Self()` and `@SkipSelf()` decorators for controlling dependency injection scope
- **Factory Provider Pattern**: Uses factory functions to conditionally provide different analytics services based on the day of the week
- **RxJS State Management**: BehaviorSubject-based state management for reactive counter and analytics services
- **InjectionToken**: Custom injection tokens for abstract service dependencies

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

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
