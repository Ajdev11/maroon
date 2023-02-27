import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import {
    Avatar,
    Card,
    CardContent,
    Grid,
    LinearProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    linearProgressClasses
} from '@mui/material';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { IconTarget } from '@tabler/icons';

// styles
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 30,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#fff'
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.primary.main
    }
}));

const CardStyle = styled(Card)(({ theme }) => ({
    background: theme.palette.primary.light,
    marginRight: '22px',
    marginBottom: '22px',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: '157px',
        height: '157px',
        background: theme.palette.primary[200],
        borderRadius: '50%',
        top: '-105px',
        right: '-96px'
    }
}));

// ==============================|| PROGRESS BAR WITH LABEL ||============================== //

function LinearProgressWithLabel({ value, ...others }) {
    const theme = useTheme();

    return (
        <Grid container direction="column" spacing={1} sx={{ mt: 1.5 }}>
            <Grid item>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6" sx={{ color: theme.palette.primary[800] }}>
                            Progress
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" color="inherit">{`${Math.round(value)}%`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <BorderLinearProgress variant="determinate" value={value} {...others} />
            </Grid>
        </Grid>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

// ==============================|| SIDEBAR MENU Card ||============================== //

const CardItem = () => {
    const theme = useTheme();
    const assetsItems = [
        { title: 'Savings Wallet', value: '156', unit: 'USDC', subvalue: '₦78,000' },
        { title: 'Target Wallet', value: '125', unit: 'USDC', subvalue: '₦58,000' },
        { title: 'Coinlock', value: '105', unit: 'USDC', subvalue: '₦48,000' }
    ];
    return (
        <>
            {assetsItems?.map((c) => (
                <Grid item md={4}>
                    <CardStyle>
                        <CardContent sx={{ p: 2 }}>
                            <List sx={{ p: 0, m: 0 }}>
                                <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                                    <ListItemText
                                        sx={{ mt: 0 }}
                                        primary={
                                            <Typography variant="h3" sx={{ color: theme.palette.primary[800] }}>
                                                {c.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Grid container style={{ marginTop: 18 }}>
                                                <Grid item md={5}>
                                                    <Typography variant="h1">{c.value}</Typography>
                                                    <Typography variant="h3">{c.value}</Typography>
                                                </Grid>
                                                <ListItemAvatar sx={{ mt: 0 }}>
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            ...theme.typography.commonAvatar,
                                                            ...theme.typography.largeAvatar,
                                                            color: theme.palette.primary.main,
                                                            border: 'none',
                                                            borderColor: theme.palette.primary.main,
                                                            background: '#fff',
                                                            marginRight: '12px'
                                                        }}
                                                    >
                                                        <IconTarget fontSize="inherit" />
                                                    </Avatar>
                                                </ListItemAvatar>
                                            </Grid>
                                        }
                                    />
                                </ListItem>
                            </List>
                            <Typography variant="body1">Fund Wallet</Typography>
                        </CardContent>
                    </CardStyle>
                </Grid>
            ))}
        </>
    );
};

export default CardItem;
