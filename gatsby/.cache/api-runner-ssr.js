var plugins = [{
      plugin: require('/Users/danger/DevelopeDan/master-gatsby/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/danger/DevelopeDan/master-gatsby/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"4se9l8e0","dataset":"production","watchMode":true,"token":"skfj25RBEamDyuaI2Gb2VdcWdvVUbS4BVNDf9Kyo2qCU1Eyk81xSHMpAk2oWMXBXmIAMfimYS2PR2nvtIGU22tglsDM8VU3WtVHBpVr7IlsPTdpIe00Mx8HjCisojurZrz0dozfJs6DJG3A75H6zN1cGCpc2oZMXy7R9vdFdil7sRtfraXS1"},
    },{
      plugin: require('/Users/danger/DevelopeDan/master-gatsby/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
