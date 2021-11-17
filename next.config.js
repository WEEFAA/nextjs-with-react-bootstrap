const nextConfig = (phasse, { defaultConfig }) => {
  const serverRuntimeConfig = {}
  const publicRuntimeConfig = {}

  return {
    ...defaultConfig,
    poweredByHeader: false,
    serverRuntimeConfig,
    publicRuntimeConfig,
  }
}

module.exports = nextConfig
