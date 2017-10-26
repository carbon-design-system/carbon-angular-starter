# Neutrino Seed

## First time user?
[Yes.](#firsttimeuser) [No.](#experienceduser) 

## Prerequisites

* [npm](https://www.npmjs.com/) (`brew install npm`)
* [git](https://git-scm.com/) (`brew install git`)
* [angular-cli](https://cli.angular.io/) (`sudo npm install -g @angular/cli`)


### Get access to IBM Artifactory NPM Peretz registry

If you used to use Peretz libraries from Whitewater NPM, you'll need to clean those settings from your `~/.npmrc`.
You can easily do that by removing that file (`rm -f ~/.npmrc`) or backing it up (`mv ~/.npmrc ~/.npmrc.backup`),
although if you have other things dependant on it, it may break things, so you'll want to do it manually by
removing all the lines containing `npm-registry.whitewater.ibm.com` from it.

```bash
nano ~/.npmrc
```

<a id="firsttimeuser"></a>

#### Really get access to IBM artifactory NPM Peretz registry

Run the following to add the needed information
to your `~/.npmrc`. Replace `your.email@ibm.com` with your actual IBM email address and use your w3id password to
authenticate when asked.

```bash
curl -uyour.email@ibm.com https://na.artifactory.swg-devops.com/artifactory/api/npm/wce-peretz-npm-local/auth/peretz >> ~/.npmrc
```

[Proceed.](#experienceduser)

### Get access to IBM Whitewater NPM registry (now **deprecated** and from 2018 unavailable)

If you got access to Artifactory, skip this step, it's here for completeness and will be removed once
Whitewater NPN registry is no longer available, in 2018.

If you're still using it, make plans to move to Artifactory.

```bash
npm login --registry=https://npm-registry.whitewater.ibm.com --scope=@peretz --auth-type=oauth
```

* When asked for username, enter the part of your IBM email before the @ sign (i.e. for jon.doe@ibm.com it would be jon.doe)

This will create/add to your `~/.npmrc` file the token required for access.

<a id="npminstallerror"></a>

* The first time that you attempt to install a private package (with `npm install`), you will get an error on the command line, prompting you to visit a GitHub Enterprise URL. Copy the URL and paste it in a web browser. Complete the GitHub login to finalize authentication and resolve your token.

[More details](https://github.ibm.com/Whitewater/npm-enterprise#option-2-using-npm-enterprise-for-private-packages-only)

After you've set up your NPM, proceed to download and install.

### Have you used Github (GHE) before?

If you haven't already, [add an SSH key to your GHE account](https://github.ibm.com/settings/keys).

<a id="experienceduser"></a>

## Download and install

Run the following in the terminal:

```bash
# to download
git clone git@github.ibm.com:peretz/neutrino-seed.git

# to install
cd neutrino-seed
npm install
```

On Whitewater and got an error during `npm install`? See [this](#npminstallerror).

## Development server
Run `ng serve` for a dev server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files.

## How to use components

Look at the [component library](http://peretz.stage1.mybluemix.net/component-library) and [developer documentation](https://pages.github.ibm.com/peretz/neutrino/documentation/).

## Create new angular components

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## PWA ready

Neutrino seed was built with offline and progressive web app in mind.

It provides [`manifest.json`](src/manifest.json) and service worker ([`sw.js`](src/sw.js)), along with [IBM bee icons](src/assets/icons) you can replace with your own to start you with.

### Lighthouse results

when ran with `ng serve --prod`

![PWA results](./images/PWA%20results.png)

Things you can/should do when deploying your app to make these scores even higher that we can't really do for you:

- make service worker custom if what we're providing doesn't fully fit your use case
- redirect HTTP traffic to HTTPS
- enable text compression on your server (gzip, deflate or brotli)
- inline css for above the fold content
- make a custom icons sprite of only the icons you use and use it instead of our "convenience sprites"
- use HTTP/2
