import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import "./infobox.css";

export default function Infobox({ weatherData, error }) {
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      if (!weatherData?.city) return;

      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const unsplashURL = import.meta.env.VITE_UNSPLASH_URL;

      try {
        const res = await fetch(`${unsplashURL}?query=${weatherData.city}&client_id=${accessKey}`);
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          setImgUrl(data.results[0].urls.small);
        } else {
          setImgUrl("https://via.placeholder.com/300x200?text=No+Image");
        }
      } catch {
        setImgUrl("https://via.placeholder.com/300x200?text=Image+Error");
      }
    };

    fetchImage();
  }, [weatherData]);

  if (error) {
    return <h2 style={{ color: "red", textAlign: "center" }}>{error}</h2>;
  }

  if (!weatherData) return null;

  return (
    <div>
      <h1>Weather Information</h1>
      <div className='box'>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={imgUrl}
              alt={`${weatherData.city} weather`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {weatherData.city}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <div>Feel like: {weatherData.feellike}°C</div>
                <div>Humidity: {weatherData.humidity}%</div>
                <div>Temp: {weatherData.temp}°C</div>
                <div>Max Temp: {weatherData.temp_max}°C</div>
                <div>Min Temp: {weatherData.temp_min}°C</div>
                <div>Description: {weatherData.des}</div>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
