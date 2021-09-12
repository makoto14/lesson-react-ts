import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import DoneIcon from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useHistory } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function TemporaryDrawer() {
    
    const classes = useStyles();

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    
    const anchor: Anchor = 'left';

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    let history = useHistory();
    
    const handleLink = (path: string): void => {
        console.log(path);
        toggleDrawer(false);
        history.push(path);
    }

    const sideMenuList = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleLink('/')}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    
                ))}
            </List>
            <Divider />
            <List>
                {['Todo'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleLink('/todo')}>
                        <ListItemIcon><DoneIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    
                ))}
            </List>
            <Divider />
            <List>
                {['Shopping'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleLink('/shopping')}>
                        <ListItemIcon><ShoppingCart /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    
                ))}
            </List>
            <Divider />
            <List>
                {['Hoge', 'Hoge2'].map((text, index) => (
                    <ListItem button key={text} onClick={() => handleLink('/hoge')}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(false)}>
                    {sideMenuList(anchor)}
            </Drawer>
        </div>
    );
}
