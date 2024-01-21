import { Component } from "react";
import posts from "../mock/post"
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { withRouter } from "react-router";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { comments: [] };
        this.doOnClick = this.doOnClick.bind(this);
    }

    doOnClick() {
        this.setState({
            comments: [...this.state.comments, '코멘트']
        })
    }

    render() {
        const { id } = this.props.match.params
        const { title, content } = posts.find(v => v.id == id)
        return (
            <div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2">
                            {content}
                            <br />
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.doOnClick}>Add Comment</Button>
                    </CardActions>
                </Card>
                <Grid container spacing={2}>
                    {this.state.comments.map(comment =>
                        <Grid item xs={12}>{comment}</Grid>
                    )}
                </Grid>
            </div>
        )
    }
}

export default withRouter(Post);
