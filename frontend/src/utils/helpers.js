export const isProdEnv = () => !window.location.href.includes('localhost');

export const getErrorMessageFromResponse = (e) => e.response ? e.response.data.message : e.message;