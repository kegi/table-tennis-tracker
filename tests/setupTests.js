/* unit test entrypoint */
/* configure Enzyme to work with React */

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({
  adapter: new Adapter()
})
