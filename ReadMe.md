# LogDis #

**LogDis is a modular log processing framework.**

[![NPM](https://nodei.co/npm/logdis.png?compact=true)](https://nodei.co/npm/logdis/)

Note: it is not a logger. For that, you should use `bole`, `bunyan`, `winston` or something simiar.

LogDis allows you to do whatever the hell you want with your logs. It's kinda like logstash, but easier to configure
and use. It can process, filter, change, and manipulate your logs, then it can save them, send them somewhere, or stash
them anywhere you like.

## Convenience Package ##

This is a convenience package that bundles the current release of 'logdis-core' and all of the official plugins.

Use this package so you can get started quickly. Use the individual plugins if you want to be specific about what to
install.

Please see the documentation at http://logdis.io/ for more information.

## Synopsis ##

```js
const logdis = require('logdis')

const fromStdIn        = logdis.input.stdin()
const ignoreBlankLines = logdis.filter.ignoreBlankLines()
const convertToJson    = logdis.filter.toJson()
const scrub            = logdis.filter.scrub({ scrub : { 'username' : true } })
const timestamp        = logdis.filter.timestamp({ fieldname : 'timestamp', format : 'epoch' })
const toStdOut         = logdis.output.stdout()

logdis()
  .input(fromStdIn)
  .filter(ignoreBlankLines)
  .filter(convertToJson)
  .filter(scrub)
  .filter(timestamp)
  .output(toStdOut)
```

## Bundles Plugins ##

Input:

* [logdis-input-stdin](https://www.npmjs.com/package/logdis-input-stdin/) at `logdis.input.stdin`

Filter:

* [logdis-filter-to-json](https://www.npmjs.com/package/logdis-filter-to-json/) at `logdis.filter.toJson`
* [logdis-filter-ignore-blank-lines](https://www.npmjs.com/package/logdis-ignore-blank-lines/) at `logdis.filter.ignoreBlankLines`
* [logdis-filter-scrub](https://www.npmjs.com/package/logdis-filter-scrub/) at `logdis.filter.scrub`
* [logdis-filter-timestamp](https://www.npmjs.com/package/logdis-filter-timestamp/) at `logdis.filter.timestamp`

Output:

* [logdis-output-stdout](https://www.npmjs.com/package/logdis-output-stdout/) at `logdis.output.stdout`

## Author ##

Andrew Chilton. [@andychilton](https://twitter.com/andychilton)
