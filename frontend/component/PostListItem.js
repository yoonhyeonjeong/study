import * as React from 'react';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default class PostListItem extends React.Component {
    render() {
        const { title, content, id } = this.props
        return (
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
                    <Link to={`/post/${id}`}>
                        <Button size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
        );
    }
}