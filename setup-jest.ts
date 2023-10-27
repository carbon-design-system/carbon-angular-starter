import 'jest-preset-angular/setup-jest';

/**
 * ResizeObserver is a web API for browsers that we is used with `Tabs` component.
 * Jest is Node.js based, hence ResizeObserver is not avaialble. To by pass this issue, we can either use a polyfill or
 * we can create a mock resize observer and assign it as a global variable
 */
class ResizeObserverMock {
	observe() {}
	unobserve() {}
	disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;
