import React from 'react';
import styles from './ciudad.module.css'

export default function CityInfo({city}){
    console.log(city)
    return (
        <div className="ciudad">
                <div className={styles.container}>
                    <div>
                        <h2>{city.name}</h2>
                        <img src={"http://openweathermap.org/img/wn/"+city.img+"@2x.png"} alt="" />
                    </div>
                    <div className="info">
                        <div className={styles.item}><p className={styles.itemP}>Temperature:</p> <p>{city.temp} ºC</p></div>
                        <div className={styles.item}><p className={styles.itemP}>Weather:</p> <p>{city.weather}</p></div>
                        <div className={styles.item}><p className={styles.itemP}>Wind:</p> <p>{city.wind} km/h</p></div>
                        <div className={styles.item}><p className={styles.itemP}>Clouds:</p> <p>{city.clouds}</p></div>
                        <div className={styles.item}><p className={styles.itemP}>Latitude:</p> <p>{city.latitud}º</p></div>
                        <div className={styles.item}><p className={styles.itemP}>Longitude:</p> <p>{city.longitud}º</p></div>
                    </div>
                </div>
        </div>
    )
}