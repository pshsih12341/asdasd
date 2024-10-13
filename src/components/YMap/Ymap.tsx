// YandexMap.tsx
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  const mapState = {
    center: [55.768139, 37.617689], // координаты центра карты
    zoom: 14,
  };

  const placemark = {
    coordinates: [55.772178, 37.622836],
    properties: {
      balloonContent: 'Цветной Бульвар, 30 стр.1',
    },
  };

  return (
    <YMaps>
      <Map state={mapState} style={{ width: '100%', height: '500px' }}>
        <Placemark
          geometry={placemark.coordinates}
          properties={placemark.properties}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
