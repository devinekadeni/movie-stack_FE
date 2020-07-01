/**
|--------------------------------------------------
| This utils based on package 'is-mobile' -> https://github.com/juliangruber/is-mobile
| 
| but the function has been modified,
| to be able to detect device in server too instead of desktop only
| by reading the "options['user-agent']"
|--------------------------------------------------
*/

const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i

const tabletRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i

/* To add support for tablets, set tablet: true. */

const isMobile = (req = null) => {
  const options = req && req.headers ? req.headers : {}
  let userAgent = options.userAgent

  if (options['user-agent']) {
    // detect userAgent on server
    userAgent = options['user-agent']
  }

  if (!userAgent && typeof navigator !== 'undefined') userAgent = navigator.userAgent

  if (
    userAgent &&
    userAgent.headers &&
    typeof userAgent.headers['user-agent'] === 'string'
  ) {
    userAgent = userAgent.headers['user-agent']
  }

  if (typeof userAgent !== 'string') return false

  return options.tablet ? tabletRegex.test(userAgent) : mobileRegex.test(userAgent)
}

export default isMobile
