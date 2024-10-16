import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

const ServiceCard = ({ service }) => {
    const {title, price, img, _id} = service 
    return (
        <div className="card card-compact bg-base- p-6 w-96 shadow-xl">
            <figure>
                <Image
                    className='h-64 rounded-lg '
                    width={800}
                    height={400}
                    src={service.img}
                    alt={service.title} />
            </figure>
            <div className="my-2">
                <h2 className="card-title text-2xl"> {service.title} </h2>
                <div className='flex justify-between text-primary'>
                    <p className='text-primary font-bold text-xl'>Price: ${service.price} </p>
                    <Link href={`/services/${_id}`}>
                        <button>
                            <MdOutlineArrowForward className='text-2xl ' />
                        </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default ServiceCard;