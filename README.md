# Looker Extension (React & TypeScript)

This repository demonstrates functionality that is available to the Extension SDK. It can be used as a starting point for developing
your own extensions.

It uses [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/) for writing your extension, the [React Extension SDK](https://github.com/looker-open-source/extension-sdk-react) for interacting with Looker, and [Webpack](https://webpack.js.org/) for building your code.

This version requires Looker 7.9 or above.

## Getting Started for Development

1. Clone or download a copy of this template to your development machine

2. Navigate (`cd`) to the template directory on your system

3. Install the dependencies with [Yarn](https://yarnpkg.com/).

   ```
   yarn install
   ```

   > You may need to update your Node version or use a [Node version manager](https://github.com/nvm-sh/nvm) to change your Node version.


4. Start the development server

   ```
   yarn start
   ```

   Great! Your extension is now running and serving the JavaScript at http://localhost:8080/bundle.js.

   > __Note well:__ The webpack development server also supports https. To use, add the parameter --https to the start command
   `"start": "webpack-dev-server --hot --disable-host-check --https"`
   Should you decide to use https, you should visit the bundle URL you are running as there will likely be a certificate warning. The development server runs with a self-signed SSL certificate, so you will need to accept this to allow your browser to connect to it.

   The default yarn start command runs with hot module replacement working. Some changes will cause a full reload of the extension iframe. When this happens the extension framework connection will break. You will need to do a full page reload of the outer page to restart
   the extension.

   To run without hot module replacement run `yarn start-no-hot`

5. Now log in to Looker and create a new project.

   This is found under __Develop__ => __Manage LookML Projects__ => __New LookML Project__.

   You'll want to select "Blank Project" as your "Starting Point". You'll now have a new project with no files.

   1. In your copy of the extension project you have `manifest.lkml` file.

   You can either drag & upload this file into your Looker project, or create a `manifest.lkml` with the same content. Change the `id`, `label`, or `url` as needed.

   ```
   application: api-access-token {
     label: "API Access Token"
     url: "http://localhost:8080/bundle.js"
   }
   ```

6. Create a `model` LookML file in your project. The name doesn't matter. The model and connection won't be used, and in the future this step may be eliminated.
    - Add a connection in this model. It can be any connection, it doesn't matter which.
    - [Configure the model you created](https://docs.looker.com/data-modeling/getting-started/create-projects#configuring_a_model) so that it has access to some connection.

7. Connect your new project to Git. You can do this multiple ways:
    - Create a new repository on GitHub or a similar service, and follow the instructions to [connect your project to Git](https://docs.looker.com/data-modeling/getting-started/setting-up-git-connection)
    - A simpler but less powerful approach is to set up git with the "Bare" repository option which does not require connecting to an external Git Service.

8.  Commit your changes and deploy your them to production through the Project UI.

9.  Reload the page and click the `Browse` dropdown menu. You should see your extension in the list.
    - The extension will load the JavaScript from the `url` you provided in the `application` definition/
    - Reloading the extension page will bring in any new code changes from the extension template (webpack's hot reloading is not currently supported).

## Notes

- Webpack's module splitting is not currently supported.
- The template uses Looker's component library and styled components. Neither of these libraries are required so you may remove and replace them with a component library of your own choice,

## Related Projects

- [Looker React extension template](https://github.com/looker-open-source/extension-template-react)
- [Looker React/Redux extension template ](https://github.com/looker-open-source/extension-template-redux)
- [Looker extension SDK](https://www.npmjs.com/package/@looker/extension-sdk)
- [Looker extension SDK for React](https://www.npmjs.com/package/@looker/extension-sdk-react)
- [Looker SDK](https://www.npmjs.com/package/@looker/sdk)
- [Looker Embed SDK](https://github.com/looker-open-source/embed-sdk)
- [Looker Components](https://components.looker.com/)
- [Styled components](https://www.styled-components.com/docs)
