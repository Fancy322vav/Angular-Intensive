# Registration Form Application

A user registration form application built with Angular 21. The app features a comprehensive registration form with validation, custom hobbies input using Control Value Accessor pattern, and displays user data upon successful submission.

## Features

- **Reactive Forms** - Built with Angular Reactive Forms for robust form handling
- **Comprehensive Validation** - Includes email, username, password strength, and age validation
- **Custom Form Controls** - Implements custom hobbies input component using Control Value Accessor
- **Password Requirements** - Enforces minimum length, capital letters, and special symbols
- **Age Verification** - Minimum age requirement (14 years)
- **User Profile Display** - Shows registered user data after successful form submission

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Getting Started

### Prerequisites

- Node.js (with npm 11.6.2 or compatible)
- Angular CLI 21.0.1

### Installation

```bash
npm install
```

### Development server

To start a local development server, run:

```bash
npm start
# or
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
npm run build
# or
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Testing

To run tests:

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── registration/          # Registration form component
│   │   ├── user/                  # User profile display component
│   │   └── custom-hobbies-input/  # Custom CVA hobbies input
│   ├── validators/
│   │   └── registration/          # Custom form validators
│   ├── interfaces/                # TypeScript interfaces
│   ├── app.ts                     # Root component
│   └── app.routes.ts              # Application routes
└── main.ts                        # Application entry point
```

## Custom Validators

The application includes several custom validators:

- **minAgeValidator** - Validates minimum age requirement
- **hasCapitalLetterValidator** - Ensures password contains capital letters
- **hasSpecialSymbolValidator** - Ensures password contains special symbols
- **passwordMatchValidator** - Validates that password and confirm password match

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
