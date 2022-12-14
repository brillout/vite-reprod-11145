export { releasePageContext }

import { PageContextRelease, releasePageContextCommon } from './releasePageContextCommon'
import type { PageContextBuiltInClient } from './types'
import { assert } from './utils'

function releasePageContext<T extends Omit<PageContextBuiltInClient, 'Page'> & PageContextRelease>(pageContext: T) {
  assert(pageContext.isHydration === true)
  assert(pageContext.isBackwardNavigation === null)
  return releasePageContextCommon(pageContext)
}
