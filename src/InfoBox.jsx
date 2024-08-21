import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const IMG_URL="https://media.istockphoto.com/id/1476190237/photo/summer-rain-raindrops-bad-weather-depression.jpg?s=1024x1024&w=is&k=20&c=-TpnM2BbRyugF0MiWYPnEXGFWOj-a2KqQ-z-we02R1w="
    const SUNNY_URL="https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=1024x1024&w=is&k=20&c=P68MuQDaXK7NM55yd1ivyrW7NZ2CokCNSfDcXe8BdH0="
    const CLOUDY_URL="https://media.istockphoto.com/id/157713818/photo/xxl-desert-road-thunderstorm.jpg?s=1024x1024&w=is&k=20&c=dnhtOJpBaYxNlI5GeBFlpClp248CgiRtupSMqv9rNNk="
    const COLD_URL="https://media.istockphoto.com/id/160840799/photo/icicles-and-snowstorm.jpg?s=1024x1024&w=is&k=20&c=HKfUCHjK0QpLFmr1fGMLk1HuU6FALlhEHnwmexcPm0k="

    let imageUrl;

    if (info.humidity > 80) {
        imageUrl = IMG_URL;
    } else if (info.temp > 15 && info.temp < 25) {
        imageUrl = CLOUDY_URL;
    } else if (info.temp > 25) {
        imageUrl = SUNNY_URL;
    } else {
        imageUrl = COLD_URL;
    }

    return(
        <div className="InfoBox">
            <h3>Weather Info</h3>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imageUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city}
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                <p>Humidity {info.humidity}</p>
                <p>Temperature {info.temp}&deg;C</p>
                <p>Min Temp {info.tempMin}&deg;C</p>
                <p>Max Temp {info.tempMax}&deg;C</p>
                <p>Weather is something like <i>{info.weather}</i></p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}