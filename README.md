# NextJS Typescript Boilerplate

This is a simple NextJS Boilerplate I created for my future projects.
This boilerplate contains

- NextJS
- ReactJS
- Typescript
- Firebase
- Material UI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have the following pre requisites before getting started

- NodeJS (LTS)
- Firebase Account
- Knowledge on Redux and Redux Sagas

### Installing

#### Firebase Setup

- Log on to [firebase](https://console.firebase.google.com)
- Create a new project
- Create a new app in the project
- Add the following env variables to .env file

```
FIREBASE_API_KEY={apiKey}

FIREBASE_AUTH_DOMAIN={authDomain}

FIREBASE_PROJECT_ID={projectId}

FIREBASE_APP_ID={appId}
```

#### Remove Git Setup (Optional)

If you want to remove my previous git commits and start with this repo with new commits

```
git remote rm origin
```

Then add your origin remote and start working

#### Start Dev Server

First, install all the dependencies
```
// yarn
yarn

// npm
npm install
```

Start local server

```
// yarn
yarn run dev

// npm
npm run dev
```

## Built With

- [NextJS](https://nextjs.org/) - Server Rendered React Apps
- [ReactJS](https://reactjs.org/) - The frontend web framework used
- [Firebase](https://console.firebase.google.com) - Authentication
- [Material UI](https://material-ui.com/) - UI Framework for Material Design

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) ( In progress ) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sriramr98/NextJS-Typescript-Template/tags).

## Authors

- **Sriram R** - _Initial work_ - [Github](https://github.com/sriramr98)

See also the list of [contributors](https://github.com/sriramr98/NextJS-Typescript-Template/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Login Modal UI Inspired from [Florin Pop Double Slider Tutorial](https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/)
