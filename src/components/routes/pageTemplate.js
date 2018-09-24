import React, { PureComponent } from 'react'
import { MainMenu, AboutMenu } from '../menus'
import { FooterPage } from '../FooterMenu'

export const PageTemplate = ({ children }) =>
    <p>
        <MainMenu />
        {children}
        <FooterPage />
    </p>
