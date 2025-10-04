import React, { use } from 'react';
import TicketCard from './TicketCard';

const CustomerTicketsSection = ({ fetchTickets, setInProgressCount, setShowTaskStatus, getData, setGetData, resolvedTickets }) => {
  const ticketsData = use(fetchTickets);

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-8'>Customer Tickets</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {ticketsData
          .filter(ticket =>
            !resolvedTickets.find(t => t.id === ticket.id)?true:false
          )
          .map(eachTicketData => (
            <TicketCard
              key={eachTicketData.id}
              eachTicketData={eachTicketData}
              setInProgressCount={setInProgressCount}
              setShowTaskStatus={setShowTaskStatus}
              setGetData={setGetData}
              getData={getData}
            />
          ))}
      </div>
    </div>
  );
};

export default CustomerTicketsSection;