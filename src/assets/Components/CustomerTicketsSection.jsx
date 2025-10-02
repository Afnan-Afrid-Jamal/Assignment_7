import React, { use } from 'react';
import TicketCard from './TicketCard';

const CustomerTicketsSection = ({ fetchTickets }) => {
    const ticketsData = use(fetchTickets);

    return (
        <div className='mt-20 max-w-[1440px] mx-auto'>

            <h2 className='text-2xl font-semibold mb-8'>Customer Tickets</h2>
            <div className='grid grid-cols-2'>
                {ticketsData.map(eachTicketData => (
                    <TicketCard key={eachTicketData.id} eachTicketData={eachTicketData} />
                ))}
            </div>
        </div>
    );
};

export default CustomerTicketsSection;
