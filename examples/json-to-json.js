// --------------------------------------------------------------------------------------------------------------------
//
// You can run this program with a simple command such as:
//
// ```sh
// $ echo -n '{}' | node examples/json-to-json.js
// ```
//
// Since we're not transforming the input (apart from parsing it) we just get back out what we put in.
//
// If you `cat` a file into stdin, then you may wish to look at the `logdis-filter-ignore-blank-lines` filter so that
// you don't get a syntax error on the last line if your file ends in a newline
//
// --------------------------------------------------------------------------------------------------------------------

"use strict"

const logdis = require('../')

// --------------------------------------------------------------------------------------------------------------------

// create some inputs, filters and outputs
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

// --------------------------------------------------------------------------------------------------------------------
