import React, { PureComponent } from 'react'
import { PageTemplate } from './pageTemplate'
import history from '../../history'


export class Search extends React.Component {
    goBackToPath() {
        history.goBack();
    }
    pushWebinarToPath() {
        history.push("/#/Webinar")
        history.go()
    }

    render() {
        //Такой синтаксис гарантирует, что "this" привязан к onLog
        return (
            <PageTemplate>
                <section>
                    <h1>Search the information</h1>
                    <button onClick={(e) => this.goBackToPath(e)}>go back</button>
                    <button onClick={(e) => this.pushWebinarToPath(e)}>push webinar to path</button>
                </section>
            </PageTemplate >
        );
    }
}