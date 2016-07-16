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

## Author ##

Andrew Chilton. [@andychilton](https://twitter.com/andychilton)
