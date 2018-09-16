import React, { PureComponent } from 'react'
import { MainMenu, AboutMenu } from '../menus'

export const PageTemplate = ({ children }) =>
    <p>
        <MainMenu />
        {children}
    </p>
