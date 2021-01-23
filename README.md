# Content model example for Contentful and Gatsby

This repository contains the migration scripts presented in [Scalable content modeling for Contentful and Gatsby](https://www.tastyvar.com/gatsby-contentful-content-modeling/).

You can find the migrations in [`/migrations`](/migrations)

## Running the migrations

If you want to try running these examples in your own Contentful space, you can find instructions on how to do that below.

### Prerequisites

- Access to a [Contentful](https://www.contentful.com/) space
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

### Installation

To install the dependencies, run

    $ yarn

### Setting up Contentful CLI

To authenticate your local Contentful CLI, run

    $ yarn contentful login

To add the space ID to your Contentful CLI, run

    $ yarn contentful space use --space-id SPACE_ID

### Running migrations

It is recommended that you use a sandbox environment when manipulating your content model and entries. After you have made sure that the migrations work correctly using the sandbox environment, you can run the migrations in the `master` environment.

To create a new sandbox environment, run

    $ yarn contentful space environment create --environment-id dev --name Development

To run a migration file, run

    $ yarn contentful space migration --environment-id dev migrations/MIGRATION_FILE

To run a migration file in the `master` environment, run

    $ yarn contentful space migration migrations/MIGRATION_FILE
