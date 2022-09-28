import compose from 'compose-function'

import { withRouter } from './withRouter'

export const withProvides = compose(
  withRouter
)