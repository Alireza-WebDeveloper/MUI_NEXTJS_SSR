import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import * as Icons from 'react-icons/md';
const Home = () => {
  return (
    <Grid container p={3} spacing={3}>
      <Grid item lg={4} xs={12}>
        <Card>
          <CardMedia
            src="https://stackify.com/wp-content/uploads/2018/10/JavaScript-Tutorials-for-Beginners.jpg"
            component="img"
            sx={{ height: '40vh' }}
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              جاوااسکریپت
            </Typography>
            <Typography>
              جاوا اسکریپت چیست؟ این سوالی است که برای بسیاری از افراد علاقه مند
              به آموزش برنامه نویسی و طراحی وب پیش می‌آید. همانطور که می‌دانید
              در دنیای برنامه نویسی همانند دنیای واقعی، با زبان‌های بسیاری روبرو
              هستیم که هر کدام مزایا و معایب خاص خود را دارند. ما در این مقاله،
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Card>
          <CardMedia
            src="https://blog.logrocket.com/wp-content/uploads/2020/11/next-js-vs-react-developer-experience.png"
            component="img"
            sx={{ height: '40vh' }}
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              نکست جی اس
            </Typography>
            <Typography>
              نکست جی‌اس (به انگلیسی: Next. js) یک چارچوب توسعه متن‌باز است که
              بر پایه نود جی‌اس ساخته شده تا امکاناتی مانند اسکریپت‌نویسی سمت
              سرور (server-side rendering) و تولید صفحات وب ایستا (static-site
              generation) را برای برنامه‌های وب مبتنی بر ری‌اکت فراهم کند.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item lg={4} xs={12}>
        <Card>
          <CardMedia
            sx={{ height: '40vh' }}
            src="https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png"
            component="img"
          />
          <CardContent>
            <Typography variant="h6" component="h2">
              تایپ اسکریپت
            </Typography>
            <Typography>
              تایپ اسکریپت (به انگلیسی: TypeScript) یک زبان برنامه‌نویسی
              چندسکویی، متن باز و کامپایلری است که توسط شرکت مایکروسافت توسعه
              داده شده و پشتیبانی می‌شود. تایپ اسکریپت یکی از زیر مجموعه‌های
              زبان جاوا اسکریپت است که به شما کمک می‌کند تا کدهای خود را به روش
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
