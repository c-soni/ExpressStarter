# Express Starter

A simple starter project template for NodeJS, Express and Typescript.

Includes `webpack` build support, watch mode for development and a bunch of useful `express` middleware for quality-of-life, right out of the box.

Commands:
1. `yarn build` - build the project (outputs to `dist`).
2. `yarn watch` - build and watch for changes.
3. `yarn start` - start serving `dist/index.js`.
4. `yarn serve` - serve and watch for changes (to `dist`).
5. `yarn clean` - delete `dist`.
6. `yarn format` - run prettier.

Docker Commands:
1. `docker build [-t <tag>] .` - builds and outputs an image.
2. `docker run [-p <host_port>:<container_port>][-d] <image>` - runs image with proper port mapping.

Note: The server listens on port `3000`, so `<container_port>` should always be `3000`.
