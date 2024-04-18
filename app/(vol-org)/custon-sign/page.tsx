import EventSign from "@/components/easyui/EventSign";
import React from "react";

const CustomSign = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex gap-10 flex-col sm:flex-row">
        <EventSign
          imageUrl="https://capitalcampaignpro.com/wp-content/uploads/2023/02/capital-campaign-volunteers.jpg"
          description="The person who is in charge of an event from beginning to end"
          btn="Sign Up with Volunteers"
        />
        <EventSign
          imageUrl="https://eventscase.com/blog/wp-content/uploads/2023/12/the-essential-role-of-an-event-organiser-understanding-the-profession.jpg"
          description="A combination of two elements: work and personal engagement."
          btn="Sign Up with Organizers"
        />
      </div>
    </div>
  );
};

export default CustomSign;
