import React, { use } from 'react';
import TicketCard from './TicketCard';

const CustomerTicketsSection = ({ fetchTickets, inprogressCount, setInProgressCount, showTaskStatus, setShowTaskStatus,setGetData }) => {
    const ticketsData = use(fetchTickets);

    return (
        <div>

            <h2 className='text-2xl font-semibold mb-8'>Customer Tickets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {ticketsData.map(eachTicketData => (
                    <TicketCard key={eachTicketData.id} eachTicketData={eachTicketData} inprogressCount={inprogressCount} setInProgressCount={setInProgressCount} showTaskStatus={showTaskStatus} setShowTaskStatus={setShowTaskStatus} setGetData={setGetData} />
                ))}
            </div>
        </div>
    );
};

export default CustomerTicketsSection;
