import React from 'react';

const Banner2 = () => {
    return (
        <div className='container mx-auto mt-12 '>
            <div className="carousel w-full">
                {
                    banners.map((item, idx) => (
                        <div key={idx} style={{
                            backgroundImage: `linear-gradient(to right, rgba(7, 0,0,1), rgba(0,0,0,0)), url('/assets/images/banner/${idx + 1}.jpg')`
                        }} id={`slide${idx + 1}`} className="carousel-item relative w-full h-[90vh] bg-cover bg-no-repeat">
                            <div className='flex h-full items-center ml-20'>
                                <div className='w-3/5'>
                                    <h3> {item.title} </h3>
                                    <p> {item.text} </p>
                                </div>
                            </div>

                            <div className="absolute  right-8  bottom-5 gap-5 flex -translate-y-1/2 transform justify-between">
                                <a href={item.prev} className="btn btn-circle">❮</a>
                                <a href={item.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    );
};
const banners = [
    {
        "title": "Affordable Price For Car Servicing",
        "text": "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        "prev": "#slide4",
        "next": "#slide2"
    },
    {
        "title": "Affordable Price For Car Servicing",
        "text": "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        "prev": "#slide1",
        "next": "#slide3"
    },
    {
        "title": "Affordable Price For Car Servicing",
        "text": "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        "prev": "#slide2",
        "next": "#slide4"
    },
    {
        "title": "Affordable Price For Car Servicing",
        "text": "There are many variations of passages of  available, but the majority have suffered alteration in some form",
        "prev": "#slide3",
        "next": "#slide1"
    },
]

export default Banner2;