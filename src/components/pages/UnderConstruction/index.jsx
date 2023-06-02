import { LuConstruction } from 'react-icons/lu'
import Layout from '../../layout/Layout'

import './index.css'

const UnderConstruction = () => {
  return (
    <Layout>
      <div className='under-construction'>
        <LuConstruction size='5rem' />
        <h2>Page under construction</h2>
      </div>
    </Layout>
  )
}

export default UnderConstruction
