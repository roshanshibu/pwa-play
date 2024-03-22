# A Bare Minimum NextJS PWA

Making a very simple PWA with NextJS shouldn't require installing a package.

[PWABuilder Studio](https://docs.pwabuilder.com/#/studio/quick-start) is not required, but helps a lot.

### [Making the webapp installable](https://github.com/roshanshibu/pwa-play/commit/5d31e65cc9806d1825220826ea4ffc1143f9de93)

1. Create a manifest.json file in the public directory.
2. Create a service-worker.js file in the public directory.
3. Update `app/layout.js` to specify manifest and a themeColor in viewport.
