# Using an image with Cypress already installed.
FROM cypress/included:13.6.6

# Installing pnpm.
RUN npm i -g pnpm

WORKDIR /app

# Copy package.json and install dependencies. Since this image only runs inside Compose with the rest of the files
# mounted as a volume, the rest is not necessary.
COPY package.json /app/package.json
RUN pnpm i

# Verify cypress is available.
ENTRYPOINT ["./node_modules/.bin/cypress", "verify"]
