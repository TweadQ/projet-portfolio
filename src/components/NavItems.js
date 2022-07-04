import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function NavItems({title, slug}) {
  return (
    <ItemNavBar>
        <Link to={slug}>{title}</Link>
    </ItemNavBar>
  )
}

const ItemNavBar = styled.div