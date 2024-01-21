import { Component } from "react";
import Grid from '@mui/material/Grid';
import PostListItem from "./PostListItem";
import posts from '../mock/post';

export default class PostList extends Component {
    render() {
        return <Grid container spacing={2}>
            {posts.map(post =>
                <Grid item xs={12}>
                    <PostListItem id={post.id} title={post.title} content={post.content} />
                </Grid>
            )}
        </Grid>
    }
}