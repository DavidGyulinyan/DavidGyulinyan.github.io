import {useState} from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const WorkItems = ({item}) => {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = (e) => {
        e.preventDefault();
        setPhotoIndex(item.index);
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleClose = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <div className="work__card">
            <div className="work__card-content">
            <img
                src={item.image}
                alt={item.title}
                className="work__img"
                onClick={handleImageClick}
            />
            </div>
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} className="work__button">
                {item.view}
                <i className="bx bx-right-arrow-alt work__button-icon"/>
            </a>

            {
                isOpen && (
                    <Lightbox
                        mainSrc={item.image}
                        onCloseRequest={handleClose}
                    />
                )
            }


            {
                isOpen && (
                    <button className="lightbox__close" onClick={handleClose}>
                        <i className="bx bx-x"/>
                    </button>
                )
            }

        </div>
    );
}

export default WorkItems;
