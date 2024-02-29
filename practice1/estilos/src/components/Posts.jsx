import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const posts = [
    {
        title: "Meu primeiro post",
        excerpt: "Este é o meu primeiro post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    },
    {
        title: "Meu segundo post",
        excerpt: "Este é o meu segundo post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    },
    {
        title: "Meu terceiro post",
        excerpt: "Este é o meu terceiro post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    },
    {
        title: "Meu quarto post",
        excerpt: "Este é o meu quarto post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    },
    {
        title: "Meu quinto post",
        excerpt: "Este é o meu quinto post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    },
    {
        title: "Meu sexto post",
        excerpt: "Este é o meu sexto post com conteúdo dentro",
        image: "https://bit.ly/2WNi2Ml"
    }
]
function Posts(props) {
    return (
        <div style={{ marginTop: 20, padding: 30 }}>
            <Grid container spacing={40} justify="center">
                {posts.map(post => (
                    <Grid item key={post.title}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Réptil contemplativo"
                                    height="140"
                                    image={post.image}
                                    title="Réptil contemplativo"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {post.title}
                                    </Typography>
                                    <Typography component="p">{post.excerpt}</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Compartilhar
                                </Button>
                                <Button size="small" color="primary">
                                    Saiba Mais
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
export default Posts;