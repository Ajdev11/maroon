import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import PopularCard from './PopularCard';
import { gridSpacing } from 'store/constant';
import Banner from './Banner';
import LineHomeChart from 'views/maroon/Home/LineHomeChart';
import CardItem from 'views/maroon/Home/CardItem';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid
            container
            spacing={gridSpacing}
            style={{
                backgroundColor: 'white'
            }}
        >
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Typography variant="h1">Welcome, Kunle</Typography>
                        <Typography variant="body">Here is a big start for amazing achievements coming your way! Chears!!!</Typography>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8} spacing={50}>
                        <Banner isLoading={isLoading} />
                        <Grid container style={{ marginTop: 24 }}>
                            <CardItem />
                        </Grid>
                        <Grid item style={{ marginBottom: 120 }}>
                            <LineHomeChart />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
