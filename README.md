#  chrome-or-chromium-all-codecs-bin
Return Chrome executable path or Download a platform compatible
(mac/win32/64) Chromium binary that supports all media codecs
like h264 and aac that are not available in Chromium by default
(due to licensing issues).

refs: https://github.com/talmobi/chromium-all-codecs-bin

## Easy to use

#### Install
```javascript
npm install --save chromium-all-codecs-bin
```

#### Sample Module usage
```javascript
const puppeteer = require( 'puppeteer-core' )
const execPath = require( 'chrome-or-chromium-all-codecs-bin' )()
const opts = {
  headless: false, // show browser
  executablePath: execPath
}
;(async function () {
    let browser = await puppeteer.launch( opts )

    const pages = await browser.pages()
    page = pages[ 0 ]

    await page.goto( 'https://tools.woolyss.com/html5-audio-video-tester/' )
    // h264 and AAC now supported~
    // ( e.g. some YouTube video's require this for playback )
})()
```

## Related
[chromium-all-codecs-bin](https://github.com/talmobi/chromium-all-codecs-bin)

[chrome-finder](https://github.com/gwuhaolin/chrome-finder)

[puppeteer](https://github.com/puppeteer/puppeteer)

## Test
No tests...
