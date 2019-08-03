import React from 'react'

export class HomePage extends React.PureComponent{
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <div style={{width:'200px', height: '400px', backgroundColor:'red'}}>内容</div>
            </div>
        )
    }
}

export default HomePage