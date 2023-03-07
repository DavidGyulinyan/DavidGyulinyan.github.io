import {useState} from 'react';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const WorkItems = ({item}) => {

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="work__card">
            <img onClick={()=>{
                setPhotoIndex(item.index);
                setIsOpen(true)
            }}
                src={item.image}
                alt={item.title}
                className="work__img"
            />
            <h3 className="work__title">{item.title}</h3>
            <a href={item.link} className="work__button">
                Demo
                <i className="bx bx-right-arrow-alt work__button-icon"/>
            </a>

            {
                isOpen && (
                    <Lightbox
                        mainSrc={item.image}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                )
            }
        </div>
    );
}

export default WorkItems;
