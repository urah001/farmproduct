import Image from "next/image";

const teamMembers = [
  {
    name: "STEPHEN SAMUEL URAH",
    role: "Lead Developer | CSO",
    image: "/team/your-image.jpg",
    bio: "Passionate full-stack developer leading the project and ensuring seamless functionality, and the cheif security officer overseeing the security architecture of the company",
  },
  {
    name: "Adagahi Bright ThankGod",
    role: "UI/UX Designer",
    image: "/team/john.jpg",
    bio: "Creative UI/UX expert crafting user-friendly and visually appealing interfaces.",
  },
  {
    name: "Yakubu Abdullahi Onu",
    role: "Backend Engineer",
    image: "/team/jane.jpg",
    bio: "Backend specialist managing databases, APIs, and server-side logic.",
  },
  {
    name: "Muhammed Mustapha OjimaOjo",
    role: "Marketing & Outreach",
    image: "/team/michael.jpg",
    bio: "Building partnerships and promoting our platform to service providers and seekers.",
  },
  {
    name: "Muktar Aliyu Omeiza",
    role: "Security Analyst",
    image: "/team/sarah.jpg",
    bio: "Ensuring robust security measures and protecting user data.",
  },
  {
    name: "Ogundijo Anuoluwapo Gabriel",
    role: "Product Manager",
    image: "/team/david.jpg",
    bio: "Overseeing project timelines, feature roadmaps, and overall vision.",
  },
];

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        We are a team of six passionate students dedicated to bridging the gap
        between service providers and seekers. Our platform simplifies
        connections, making it easier to find and offer services seamlessly.
      </p>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="mx-auto rounded-full"
            />
            <h2 className="text-xl font-semibold mt-4">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.role}</p>
            <p className="text-gray-700 mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
