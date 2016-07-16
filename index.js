// --------------------------------------------------------------------------------------------------------------------

"use strict"

// --------------------------------------------------------------------------------------------------------------------

const logdis = require('logdis-core')

// inputs
logdis.input = {
  stdin            : require('logdis-input-stdin'),
}

// filters
logdis.filter = {
  toJson           : require('logdis-filter-to-json'),
  timestamp        : require('logdis-filter-timestamp'),
  scrub            : require('logdis-filter-scrub'),
  ignoreBlankLines : require('logdis-filter-ignore-blank-lines'),
}

// outputs
logdis.output = {
  stdout           : require('logdis-output-stdout'),
}

// --------------------------------------------------------------------------------------------------------------------

module.exports = logdis

// --------------------------------------------------------------------------------------------------------------------
