

export const sensorPlay = () => {
  if ( 'AmbientLightSensor' in window ) {
    const sensor = new AmbientLightSensor();
    sensor.onreading = () => {
      console.log('Current light level:', sensor.illuminance);
    };
    sensor.onerror = (event) => {
      console.log(event.error.name, event.error.message);
    };
    sensor.start();
  }
}