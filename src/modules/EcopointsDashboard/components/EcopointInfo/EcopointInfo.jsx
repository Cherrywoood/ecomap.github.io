import React from 'react';
import './EcopointInfo.css'
import Accordion from "../../../../components/Accordion/Accordion";
import Loader from "../../../../ui/Loader/Loader";
import noImage from "../../../../assets/default-ecopoint-photo.jpg"

const BASE_URL = "http://localhost:8080/api/ecopoints/images";
const EcopointInfo = ({ecopoint, loading, setEcopointImages, openImages}) => {
    const imageUrl = () => {
        const imageId = ecopoint.ecopointImages[0];
        if (imageId)
            return `${BASE_URL}/${imageId}`
        else
            return noImage;
    }

    const data = [
        {
            header: 'Описание эко-пункта',
            content: 'В жёлтый контейнер можно класть пластиковые бутылки, флаконы и канистры 1/PET/ПЭТ; 2/HDPE/ПНД; хозяйственные изделия, жёсткие пищевые контейнеры и вёдра с маркировкой 5/PP; любой металл (в том числе алюминиевые, консервные банки). Бутылки, банки необходимо сминать. Всё сырьё должно быть чистым и сухим.\n' +
                'В контейнер для стекла можно класть любую стеклотару, необходимо снять металлические крышки и кольца'
        },
        {
            header: 'Контакты',
            content: 'Почта: polina.gj1@yandex.ru\n Телейфон: +79516446663 \n Сайт: krishki.com'
        },
        {
            header: 'Режим работы',
            content: 'Пн 8:00-19:00\n Пн 8:00-19:00\n Пн 8:00-19:00\n Пн 8:00-19:00\n Пн 8:00-19:00\n'
        }
    ]

    const openModal = () => {
        const images = ecopoint.ecopointImages;
        if (images.length > 0) {
            const imagesUrl = images.map(imageId =>
                `${BASE_URL}/${imageId}`
            )
            console.log(imagesUrl)
            setEcopointImages(imagesUrl)
            openImages(true)
        }
    }

    return (
        <>
            {
                loading
                    ? <div className="m-5 flex justify-center"><Loader/></div>
                    : <div className="bg-white bg-opacity-10 rounded-lg pb-4">
                        <div className="h-24 overflow-hidden rounded-t-lg relative cursor-pointer"
                             onClick={openModal}
                             style={{
                                 background: `linear-gradient(180deg, rgba(53, 53, 53, 0) 0%, rgba(0, 0, 0, 0.9) 100%`
                             }}>
                            <img className="w-full" src={imageUrl()} alt="no photo"/>
                            <div
                                className="flex justify-between items-center absolute left-4 right-4 bottom-3.5 text-white">
                                <span className="text-lg/5">{ecopoint.name}</span>
                                <div className="flex items-center space-x-0.5">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.8526 8.09453C12.7061 8.09453 13.3986 7.40206 13.3986 6.54855C13.3986 5.69504 12.7061 5.00256 11.8526 5.00256C10.9991 5.00256 10.3066 5.69504 10.3066 6.54855C10.3066 7.40206 10.9991 8.09453 11.8526 8.09453Z"
                                            fill="white"/>
                                        <path
                                            d="M14.5581 2.94128H1.93259C1.43014 2.94128 1.03076 3.35033 1.03076 3.85277V14.3977C1.03076 14.9001 1.43014 15.3092 1.93259 15.3092H14.5581C15.0606 15.3092 15.46 14.9001 15.46 14.3977V3.85277C15.46 3.35033 15.0606 2.94128 14.5581 2.94128ZM11.2375 9.30881C11.1409 9.19608 10.9927 9.10912 10.8252 9.10912C10.661 9.10912 10.545 9.18642 10.413 9.29271L9.81067 9.8016C9.68506 9.89178 9.58522 9.95297 9.44028 9.95297C9.30178 9.95297 9.17617 9.90144 9.08599 9.82092C9.05378 9.79193 8.99581 9.73718 8.9475 9.68887L7.2147 7.81436C7.08587 7.6662 6.89262 7.5728 6.67683 7.5728C6.46104 7.5728 6.26135 7.67909 6.13574 7.82402L2.06142 12.739V4.34878C2.09363 4.12976 2.26433 3.97194 2.48334 3.97194H14.0042C14.2264 3.97194 14.4068 4.1362 14.4196 4.35844L14.4293 12.7454L11.2375 9.30881Z"
                                            fill="white"/>
                                    </svg>
                                    <span className="text-sm">({ecopoint.ecopointImages.length})</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between p-4 space-x-5">
                            <div className="flex flex-col w-3/5 shrink-0">
                                <span className="text-sm/4 text-gray-50">Раздельный сбор отходов</span>
                                <span className="text-sm text-gray-400">Садовая ул., 44</span>
                            </div>
                            <div className="flex items-center space-x-3 text-white hover:text-green-100">
                                <svg className="w-8 h-8" viewBox="0 0 30 27" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.16481 21.7774C2.16606 20.9458 2.49712 20.1487 3.08535 19.5609C3.67358 18.9731 4.47095 18.6427 5.30251 18.642H13.6931C14.1912 18.642 14.6844 18.5439 15.1446 18.3533C15.6047 18.1627 16.0229 17.8834 16.3751 17.5312C16.7273 17.179 17.0066 16.7608 17.1972 16.3007C17.3879 15.8405 17.486 15.3473 17.486 14.8492C17.486 14.3511 17.3879 13.8579 17.1972 13.3978C17.0066 12.9376 16.7273 12.5195 16.3751 12.1673C16.0229 11.8151 15.6047 11.5357 15.1446 11.3451C14.6844 11.1545 14.1912 11.0564 13.6931 11.0564H9.56618V12.3381H13.6931C14.0274 12.3308 14.3598 12.3904 14.6707 12.5133C14.9817 12.6362 15.265 12.8199 15.504 13.0538C15.743 13.2876 15.9328 13.5668 16.0625 13.8751C16.1921 14.1833 16.2589 14.5143 16.2589 14.8486C16.2589 15.183 16.1921 15.514 16.0625 15.8222C15.9328 16.1304 15.743 16.4096 15.504 16.6435C15.265 16.8773 14.9817 17.0611 14.6707 17.184C14.3598 17.3069 14.0274 17.3664 13.6931 17.3591H5.30251C4.13072 17.3591 3.00693 17.8246 2.17835 18.6532C1.34977 19.4818 0.884277 20.6056 0.884277 21.7774C0.884277 22.9492 1.34977 24.073 2.17835 24.9015C3.00693 25.7301 4.13072 26.1956 5.30251 26.1956H20.9899V24.9187H5.30251C4.46992 24.918 3.67165 24.5868 3.08325 23.9977C2.49485 23.4086 2.16449 22.61 2.16481 21.7774ZM24.7732 14.5508C24.192 14.5479 23.6161 14.661 23.0792 14.8836C22.5423 15.1062 22.0553 15.4337 21.6466 15.847C21.238 16.2603 20.916 16.751 20.6995 17.2904C20.483 17.8298 20.3764 18.4069 20.3859 18.988C20.3859 21.6228 21.8733 23.7784 24.7732 26.2991C27.66 23.7784 29.1593 21.6228 29.1593 18.988C29.1679 18.4073 29.0606 17.8306 28.8438 17.2918C28.6271 16.7529 28.3051 16.2626 27.8968 15.8496C27.4885 15.4365 27.002 15.1089 26.4657 14.8859C25.9294 14.6629 25.354 14.549 24.7732 14.5508ZM24.7732 20.5896C24.4466 20.5896 24.1273 20.4927 23.8557 20.3113C23.5841 20.1298 23.3724 19.8719 23.2474 19.5701C23.1224 19.2683 23.0897 18.9363 23.1534 18.6159C23.2172 18.2956 23.3744 18.0013 23.6054 17.7703C23.8364 17.5394 24.1306 17.3821 24.451 17.3183C24.7714 17.2546 25.1034 17.2873 25.4052 17.4123C25.707 17.5373 25.9649 17.749 26.1464 18.0206C26.3278 18.2922 26.4247 18.6115 26.4247 18.9381C26.4213 19.375 26.2462 19.7931 25.9372 20.1021C25.6282 20.4111 25.2101 20.5862 24.7732 20.5896ZM5.78405 12.4582C8.67088 9.93636 10.1714 7.78075 10.1714 5.14717C10.181 4.56502 10.0746 3.98678 9.85842 3.44616C9.64227 2.90554 9.32067 2.41335 8.91238 1.99828C8.50408 1.58321 8.01726 1.25355 7.48027 1.02853C6.94328 0.80351 6.36687 0.687622 5.78464 0.687622C5.20241 0.687622 4.62601 0.80351 4.08902 1.02853C3.55203 1.25355 3.0652 1.58321 2.65691 1.99828C2.24861 2.41335 1.92702 2.90554 1.71087 3.44616C1.49471 3.98678 1.38833 4.56502 1.39792 5.14717C1.39792 7.78075 2.88532 9.93755 5.78405 12.4582ZM4.12067 5.09604C4.1195 4.76829 4.21553 4.44754 4.39662 4.17435C4.57771 3.90117 4.83573 3.6878 5.13807 3.56124C5.4404 3.43467 5.77347 3.40059 6.09518 3.46329C6.41688 3.526 6.71277 3.68267 6.94545 3.91352C7.17812 4.14436 7.33712 4.43901 7.40236 4.7602C7.4676 5.0814 7.43614 5.41474 7.31197 5.71806C7.18779 6.02138 6.97647 6.28108 6.70472 6.46432C6.43297 6.64756 6.11299 6.74612 5.78524 6.74753C5.34602 6.74754 4.92461 6.57397 4.61281 6.26462C4.30102 5.95528 4.12412 5.53524 4.12067 5.09604Z"
                                        fill="currentColor"/>
                                </svg>
                                <span className="flex-1 shrink-0 text-sm/4">Проложить маршрут</span>
                            </div>

                        </div>
                        <div className="mx-4">
                            <Accordion items={data}/>
                        </div>
                    </div>
            }
        </>
    );
};

export default EcopointInfo;