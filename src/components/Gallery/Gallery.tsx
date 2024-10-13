import React, { useState } from 'react';
import styles from './Gallery.module.scss';

import classnames from "classnames";

interface GalleryProps {
    images: string[];
    mini?:boolean;
}

const Gallery: React.FC<GalleryProps> = ({ images,mini }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handleThumbnailClick = (index: number) => {
        setCurrentImage(index);
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className={classnames(styles.gallery,mini && styles.mini)}>
            <div className={styles.mainImage}>
                <img src={images[currentImage]} alt={`Gallery ${currentImage + 1}`} />
            </div>
            <div className={styles.container}>
            <button className={styles.arrow} onClick={handlePrev}></button>   
            <div className={styles.thumbnails}>
                {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleThumbnailClick(index)}
                            className={`${styles.thumbnail} ${currentImage === index ? styles.active : ''}`}
                        />
                    ))}
            </div>
            <button className={styles.arrow} onClick={handleNext}></button>
            </div>
        </div>
    );
};

export default Gallery;
