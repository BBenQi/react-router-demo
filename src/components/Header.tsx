import React from 'react'
import { Link } from "react-router-dom";

export class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Header</h1>
                <div style={{height:'400px', width:'500px', backgroundColor:'green'}}>
                    header 内容
                </div>
            </div>
        )
    }
}

export default Header