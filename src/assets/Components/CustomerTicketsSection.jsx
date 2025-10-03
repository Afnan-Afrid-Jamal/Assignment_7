import React, { use } from 'react';
import TicketCard from './TicketCard';

const CustomerTicketsSection = ({ fetchTickets, setInProgressCount, setShowTaskStatus, getData, setGetData }) => {
  const ticketsData = use(fetchTickets);

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-8'>Customer Tickets</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {ticketsData
          .filter(ticket => !getData.some(t => t.id === ticket.id)) // show only not-selected tickets
          .map(eachTicketData => (
            <TicketCard
              key={eachTicketData.id}
              eachTicketData={eachTicketData}
              setInProgressCount={setInProgressCount}
              setShowTaskStatus={setShowTaskStatus}
              setGetData={setGetData}
            />
          ))}
      </div>
    </div>
  );
};

export default CustomerTicketsSection;
