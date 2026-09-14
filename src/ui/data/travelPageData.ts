import img1 from "../../assets/services-assets/travel/t1.gif";
import img2 from "../../assets/services-assets/travel/t2.gif";
import img3 from "../../assets/services-assets/travel/t3.gif";
import img4 from "../../assets/services-assets/travel/t4.gif";
import img5 from "../../assets/services-assets/travel/t5.gif";

export type TravelSlide = {
  tag: string;
  title: string;
  titleBreak: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const travelSlides: TravelSlide[] = [
  {
    tag: "Bus",
    title: "Bus Ticket Booking",
    titleBreak: "Agents",
    description:
      "There are times when there is no availability of train tickets. In those cases, our bus ticket solutions are the best alternative for our customers. To provide this service, we have a link with tour operators and tours. The agent can book and confirm tickets instantly using this interface and get attractive margins on each reserved ticket.",
    image: img5,
    imageAlt: "Bus Ticket Booking",
  },
  {
    tag: "Train",
    title: "Train/IRCTC Ticket",
    titleBreak: "Booking Agent",
    description:
      "Our agents reserve a train ticket for the customers or traveller, provide a medium for becoming an IRCTC authorized train ticketing agent, and get an instant commission on the sale of any ticket. All training and explanations will be provided to the new IRCTC ticket agent that offers best-in-class customer service.",
    image: img2,
    imageAlt: "Train Booking",
  },
  {
    tag: "Hotel",
    title: "Hotel Booking",
    titleBreak: "Agent",
    description:
      "We have a huge database of hotels across cities. We cater to all budget and star categories and offer instant booking and confirmation in a single interface. The USP of this service is that we guarantee room availability at highly discounted prices which are a great value to our customers.",
    image: img3,
    imageAlt: "Hotel Booking",
  },
  {
    tag: "Online",
    title: "Online Travel",
    titleBreak: "Agent",
    description:
      "Online Saathi's online travel agents excel in curating unforgettable journeys. With access to a wide range of travel options and advanced technology, we handle every aspect of travel planning. From booking flights and accommodations to arranging transfers, our agents ensure seamless experiences.",
    image: img4,
    imageAlt: "Online Travel",
  },
  {
    tag: "Flight",
    title: "Flight/Air Ticket",
    titleBreak: "Booking Agent",
    description:
      "We offer domestic and international ticketing solutions with all available combinations and airlines. This service offers the best routing options with an easy-to-reserve interface. This is a complete trip management solution with a single interface. Agents can instantly book and confirm tickets and earn attractive flight booking commission.",
    image: img1,
    imageAlt: "Flight Booking",
  },
];