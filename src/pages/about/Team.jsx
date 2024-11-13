import React, {useState} from "react";

const Team = () => {
  const profile = [
    {
        _name: "Reyanshh Rahul",
        role: "Founder",
        contact: "",
        image: "./role-images/Rahul.jpg"
    },
    {
        _name: "Soham Sharma",
        role: "Designing and Editing Head",
        contact: "",
        image: "./role-images/Soham.jpg"
    },
    {
        _name: "Anand Prajapati",
        role: "Technical and Marketing Head",
        contact: "",
        image: "./role-images/Anand.jpg"
    },
    {
        _name: "Isha Goel",
        role: "",
        contact: "9179081770",
        image: "./role-images/Isha.jpg"
    },
    {
        _name: "Ananya Boral",
        role: "",
        contact: "9678866427",
        image: "./role-images/Ananya.jpg"
    },
    {
        _name: "Pooja Shakya",
        role: "",
        contact: "9193002182",
        image: "./role-images/Pooja.jpg"
    },
    {
        _name: "Khushi Chauhan",
        role: "",
        contact: "8076388374",
        image: "./role-images/Khushi.jpg"
    },
    {
        _name: "Manali Bagade",
        role: "",
        contact: "9130664419",
        image: "./role-images/Manali.jpg"
    },
    {
        _name: "Aakash Chauhan",
        role: "Also a Content Manager",
        contact: "",
        image: "./role-images/Aakash.jpg"
    },
    {
        _name: "Riya Nandani",
        role: "Also a Group Moderator",
        contact: "",
        image: "./role-images/Riya.jpg" 
    },
    {
        _name: "Abhivats Bisht",
        role: "Also a Group Moderator",
        contact: "",
        image: "./role-images/Abhivats.jpg"
    },
    {
        _name: "Ajeet Sahani",
        role: "Digital Marketer",
        contact: "",
        image: "./role-images/Ajeet.jpg"
    },
    {
        _name: "Adarsh Agarwal",
        role: "Video Editor",
        contact: "",
        image: "./role-images/Adarsh.jpg"
    },
    {
        _name: "Ullas Kalita",
        role: "Video Editor",
        contact: "",
        image: "./role-images/Ullas.jpg"  
    }
];

const founderArray = profile.slice(0, 3)
const artConsultantArray = profile.slice(3, 8)
const artTeacherArray = profile.slice(8, 11)
const backendArray = profile.slice(11, 14)

  return (
    <div>
      {/* Our awesome team header */}
      <div className="bg-[#f8b31d] w-full h-20"></div>
      <div>
        <h1 className="font-bebasneue text-5xl ml-8 -translate-y-5">Our</h1>
        <h1 className="font-cursive text-6xl ml-8 text-[#f8b31d] font-bold -translate-y-11">
          awesome
        </h1>
        <h1 className="font-bebasneue text-5xl ml-8 -translate-y-11">TEAM</h1>
      </div>

      {/* Founder card */}
      {founderArray.map((profile, index) => (
        <ProfileCard
          key={index}
          image={profile.image}
          name={profile._name}
          role={profile.role}
          className=""
        />
      ))}

      <div className="pt-10">
        <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8 border-t-2 border-[#f8b31d] pt-2 w-min">ART</h2>
        <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8">CONSULTANTS</h2>
      </div>

    {/* Art consultants */}
    <div className="grid grid-cols-2 gap-3 pt-10 p-8">
      {artConsultantArray.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile._name}
            role={profile.role}
            contact={profile.contact}
          />
        ))}
    </div>
    <div className="-pt-6">
      <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8 border-t-2 border-[#f8b31d] pt-2 w-min">ART</h2>
      <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8">TEACHERS</h2>
      </div>

    {/* Art teacher */}
    <div className="grid grid-cols-2 gap-3 pt-10 p-8">
      {artTeacherArray.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile._name}
            role={profile.role}
            contact={profile.contact}
          />
        ))}
    </div>
    
    {/* Backend Associates */}
    <div className="-pt-6">
      <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8 border-t-2 border-[#f8b31d] pt-2 w-min">BACKEND</h2>
      <h2 className="font-bebasneue font-bold text-4xl text-gray-800 ml-8">ASSOCIATES</h2>
    </div>
    <div className="grid grid-cols-2 gap-3 pt-10 p-8">
      {backendArray.map((profile, index) => (
          <ProfileCard
            key={index}
            image={profile.image}
            name={profile._name}
            role={profile.role}
            contact={profile.contact}
          />
        ))}
    </div>

    </div>
  );
};

function ProfileCard({ image, name, role, contact }) {

  

  return(
    <div className="flex flex-col items-center pb-8">
    <img src={image} alt={`${name}'s profile`} className="w-20 rounded-full h-20 md:w-40 md:h-40" />
    <h2 className="font-oswald font-bold mt-1 text-center md:text-xl">{name}</h2>
    <p className="text-gray-600 text-center">{role}</p>
    {contact && <p className="text-gray-600 text-center">{contact}</p>}
    <div>
    </div>
  </div>
  )

}

export default Team;
