import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TypoGraphy from '@mui/material/Typography';
import { Home, Book, AccountBox } from '@mui/icons-material';

function NavBar(props) {
    return (
        <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Home <Home />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Postagens <Book />
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="h6">
                        Contato <AccountBox />
                    </TypoGraphy>
                </ListItemText>
            </ListItem >
        </List>
    )
}
export default NavBar;
