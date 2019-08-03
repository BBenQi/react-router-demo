import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface HomeParams {
    id: any
}

export class HomePage extends React.PureComponent<RouteComponentProps<HomeParams>>{
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <h2>{this.props.match.params.id}</h2>
                <div style={{ width: '200px', height: '400px', backgroundColor: 'red' }}>内容</div>
            </div>
        )
    }
}

export default HomePage