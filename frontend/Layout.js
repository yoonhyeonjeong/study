import { Component } from "react"
import Container from '@mui/material/Container';

import PostList from "./component/PostList";


export default class Layout extends Component {
    render() {
        return <Container maxWidth="xl">
            <PostList/>
        </Container>
    }
}