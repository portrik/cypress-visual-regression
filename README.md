# Visual Regression Testing with Cypress

This project contains all of my resources for my talk for the [Frontendisti.cz](https://frontendisti.cz/) meetup on 26.03.2024.

The presentation used during the talk can be found in the `presentation` directory.

The recording of the talk will be added here once it is available online.

## Proof-of-Concept

The project is a pretty typical TypesScript/React/Vite project to showcase the visual regression testing. I have tried to keep it as simple as possible, maybe except for the ESLint configuration. I was only curious to see how "hardcore" the hardcore configuration can really be.

### Prerequisites

- Node v21
  - Could be lower, but that is not guaranteed
- `pnpm` package manager
- Docker with Docker Compose
  - Only necessary if you want to see the tests running locally in the container

### Commands

The following commands are the most relevant. The rest is used, but I do not think they need to be mentioned here.

| Command                           | Description                                                                                                                       |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `start`                           | Starts the Vite server on `localhost:8080`.                                                                                       |
| `cypress`                         | Opens Cypress.                                                                                                                    |
| `test:visual-regression`          | Runs the visual regression tests inside Docker using Compose. The results can be found inside the `cypress/snapshot` directory.   |
| `test:generate-visual-regression` | Generates the visual regression screenshots inside Docker using Compose. The results can be found inside `cypress/snapshot/base`. |
