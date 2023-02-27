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
    borderColor: theme.palette.primary.light,
    borderWidth: '14px',
    marginRight: '22px',
    marginBottom: '22px'
}));

const CardItem = () => {
    const theme = useTheme();
    const assetsItems = [
        {
            title: 'Savings Wallet',
            value: '156',
            unit: 'USDC',
            subvalue: '₦78,000',
            color: '#0174C7',
            icon: (
                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M41.597 46.6609H27.0137"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M36.9251 7.34448L36.8376 7.54865L28.3793 27.1778H20.0668C18.0835 27.1778 16.1876 27.5861 14.4668 28.3153L19.571 16.1236L19.6876 15.832L19.8918 15.3653C19.9501 15.1903 20.0085 15.0153 20.096 14.8695C23.9168 6.03198 28.2335 4.01948 36.9251 7.34448Z"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M52.6456 27.7612C51.3331 27.3528 49.9331 27.1778 48.5331 27.1778H28.3789L36.8372 7.54865L36.9247 7.34448C37.3622 7.49032 37.7706 7.69448 38.2081 7.86948L44.6539 10.582C48.2414 12.0695 50.7497 13.6153 52.2664 15.482C52.5581 15.832 52.7914 16.1528 52.9956 16.532C53.2581 16.9403 53.4622 17.3486 53.5789 17.7861C53.6956 18.0486 53.7831 18.3111 53.8414 18.5445C54.6289 20.9945 54.1622 23.9987 52.6456 27.7612Z"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M62.7714 41.4118V47.0993C62.7714 47.6826 62.7422 48.266 62.713 48.8493C62.1589 59.0285 56.4714 64.1618 45.6797 64.1618H22.9297C22.2297 64.1618 21.5297 64.1035 20.8589 64.016C11.5839 63.4035 6.62552 58.4451 6.01302 49.1701C5.92552 48.4993 5.86719 47.7993 5.86719 47.0993V41.4118C5.86719 35.5493 9.42552 30.5035 14.5005 28.316C16.2505 27.5868 18.1172 27.1785 20.1005 27.1785H48.5672C49.9964 27.1785 51.3964 27.3826 52.6797 27.7618C58.4839 29.541 62.7714 34.966 62.7714 41.4118Z"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M19.5705 16.1238L14.4663 28.3154C9.39134 30.5029 5.83301 35.5488 5.83301 41.4113V32.8654C5.83301 24.5821 11.7247 17.6696 19.5705 16.1238Z"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M62.7626 32.8641V41.4099C62.7626 34.9932 58.5042 29.5391 52.6709 27.7891C54.1876 23.9974 54.6251 21.0224 53.8959 18.5432C53.8376 18.2807 53.7501 18.0182 53.6334 17.7849C59.0584 20.5849 62.7626 26.3307 62.7626 32.8641Z"
                        stroke="#0174C7"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            )
        },
        {
            title: 'Target Wallet',
            value: '125',
            unit: 'USDC',
            subvalue: '₦58,000',
            color: '#D80027',
            icon: (
                <svg width="55" height="53" viewBox="0 0 55 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.1194 0.0251805C20.7671 0.452607 17.7922 1.27411 14.5131 2.95398C6.49317 7.06237 1.16979 14.7203 0.130268 23.644C-0.0814267 25.462 -0.0285569 28.6747 0.241284 30.3872C1.42596 37.903 5.65522 44.4426 12.031 48.6173C15.3208 50.7715 18.9608 52.1493 22.9658 52.7564C24.7729 53.0304 28.3475 53.0838 30.0726 52.8626C33.9117 52.3702 37.8169 51.0162 40.9976 49.0745C44.2011 47.1188 47.2554 44.1879 49.3419 41.0671C54.5918 33.2149 55.1878 23.0455 50.8938 14.591C50.6045 14.0215 50.3077 13.5564 50.2343 13.5572C50.0549 13.5594 47.5244 15.5403 47.4866 15.7082C47.4702 15.7809 47.6949 16.3657 47.986 17.0078C49.399 20.1247 50.0468 23.112 50.0468 26.5112C50.0468 32.7088 47.7097 38.2768 43.2688 42.659C37.3468 48.5029 29.1865 50.6856 20.92 48.637C13.7136 46.851 7.43427 41.147 4.9888 34.1653C4.03198 31.4336 3.69947 29.4598 3.69947 26.5112C3.69947 24.1852 3.84375 22.9448 4.34273 20.9809C6.58588 12.1518 13.8602 5.49348 22.9504 3.9489C28.0837 3.07663 33.6612 4.01177 38.1236 6.49296C38.7022 6.81462 39.1991 7.07787 39.228 7.07787C39.3114 7.07787 41.4326 4.41073 41.4326 4.30581C41.4326 4.14653 40.493 3.60409 38.6868 2.72078C36.0829 1.44721 33.3081 0.6051 30.4494 0.220788C29.3217 0.0691444 25.9362 -0.0551013 25.1194 0.0251805ZM46.6011 2.58645C45.2094 3.90685 43.5377 5.49507 42.8862 6.11577L41.7018 7.24428L41.2842 9.33766L40.8667 11.4311L33.4547 19.0508L26.0428 26.6705L26.7117 27.281C27.0797 27.6167 27.4338 27.8796 27.4989 27.865C27.5638 27.8505 31.1122 24.6323 35.3841 20.7136L43.1513 13.5885L44.957 13.4516C45.9501 13.3764 46.8478 13.2841 46.9518 13.2467C47.1655 13.1699 55 5.72487 55 5.59871C55 5.55401 53.8249 5.37656 52.3888 5.20442L49.7776 4.89147L49.5963 3.19706C49.4965 2.26521 49.3836 1.20413 49.3454 0.839043C49.3072 0.474058 49.2434 0.177673 49.2037 0.180541C49.1641 0.183302 47.9929 1.26604 46.6011 2.58645ZM24.6348 9.09702C20.6146 9.63861 17.2122 11.3033 14.3439 14.1321C10.5589 17.8647 8.82332 22.4338 9.15098 27.803C9.40445 31.9574 11.199 35.7888 14.3439 38.8903C16.9375 41.4482 19.7918 42.9684 23.3965 43.7119C24.8245 44.0064 27.3742 44.108 28.9115 43.9315C36.5797 43.0511 42.7029 37.478 44.3059 29.9202C44.5517 28.7613 44.5905 28.3186 44.5947 26.6174C44.5983 25.1623 44.5489 24.3773 44.4041 23.5909C44.0455 21.6432 43.2653 19.3771 42.9315 19.3137C42.8002 19.2888 40.0328 21.3326 40.0328 21.4544C40.0328 21.4722 40.1312 21.769 40.2516 22.1139C41.197 24.824 41.1682 28.3869 40.179 31.1023C39.4384 33.1352 38.3999 34.7265 36.759 36.3428C34.6918 38.3791 32.4986 39.5484 29.5837 40.1683C28.3175 40.4376 25.485 40.4407 24.2041 40.1742C18.6347 39.0152 14.5213 35.1304 13.1413 29.726C12.8732 28.6761 12.8491 28.4115 12.8491 26.5112C12.8491 24.6108 12.8732 24.3462 13.1413 23.2963C14.5793 17.6646 19.0719 13.6198 24.8502 12.7544C27.4215 12.3693 30.2814 12.7754 32.7788 13.8806C33.1669 14.0523 33.5243 14.1928 33.573 14.1928C33.7345 14.1928 35.6604 11.7012 35.6661 11.4849C35.6705 11.3196 35.4243 11.1504 34.5574 10.7227C33.2815 10.0934 31.8395 9.6128 30.2879 9.29975C29.0643 9.05285 25.8253 8.93667 24.6348 9.09702ZM25.289 18.2308C21.8732 18.9393 19.2891 21.4373 18.549 24.7457C18.3055 25.8342 18.3764 27.9443 18.6889 28.9108C19.4252 31.188 20.9678 32.9796 23.0735 34.0033C24.3106 34.6047 25.0586 34.7953 26.4703 34.8691C29.8953 35.048 32.9476 33.2625 34.5258 30.1567C35.0033 29.217 35.2883 28.1038 35.3656 26.8771C35.4356 25.7642 35.3227 25.269 35.0247 25.3818C34.9444 25.4123 34.1122 26.036 33.1755 26.7678C31.6973 27.9228 31.4303 28.1786 31.1532 28.7039C29.9071 31.0675 26.894 31.966 24.5084 30.6855C23.873 30.3444 22.9172 29.3754 22.5861 28.7364C21.5933 26.8214 21.9807 24.5523 23.553 23.0733C24.528 22.1561 25.6199 21.7325 27.0091 21.7325H27.7229L28.8171 20.3378C29.4188 19.5706 29.9111 18.8796 29.9111 18.8022C29.9111 18.7218 29.5995 18.5635 29.1842 18.433C28.3615 18.1743 26.1215 18.058 25.289 18.2308Z"
                        fill="#D80027"
                    />
                </svg>
            )
        },
        { title: 'Coinlock', value: '105', unit: 'USDC', subvalue: '₦48,000', color: '#FEB626', icon: <IconTarget fontSize="inherit" /> }
    ];
    return (
        <>
            {assetsItems?.map((c) => (
                <Grid item md={4}>
                    <CardStyle>
                        <CardContent
                            sx={{ p: 2 }}
                            style={{
                                border: '1px solid ' + c.color,
                                borderRadius: '12px',
                                marginRight: '22px',
                                marginBottom: '22px'
                            }}
                        >
                            <ListItem alignItems="flex-start" disableGutters sx={{ p: 0 }}>
                                <ListItemText
                                    sx={{ mt: 0 }}
                                    primary={
                                        <Typography variant="h3" sx={{ color: c.color }}>
                                            {c.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <Grid container style={{ marginTop: 18 }}>
                                            <Grid item md={7}>
                                                <Typography variant="h1">{c.value}</Typography>
                                                <Typography variant="h3">{c.subvalue}</Typography>
                                            </Grid>
                                            <Grid item md={4}>
                                                <Avatar variant="circular" style={{ padding: 4, width: '76px', height: '71px' }}>
                                                    {c.icon}
                                                </Avatar>
                                            </Grid>
                                        </Grid>
                                    }
                                />
                            </ListItem>
                            <Typography variant="body1">Fund Wallet</Typography>
                        </CardContent>
                    </CardStyle>
                </Grid>
            ))}
        </>
    );
};

export default CardItem;
