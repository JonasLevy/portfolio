import React from 'react';

const Contact: React.FC = () => {
    const contactInfo = [
      {
        label: "Telefone",
        value: "+55 (85) 92167-2678",
        icon: "📱",
      },
      {
        label: "Email",
        value: "jonaslevy0408@gmail.com",
        icon: "📧",
      },
      {
        label: "GitHub",
        value: "github.com/JonasLevy",
        icon: "🐙",
        url: "https://github.com/JonasLevy",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/jonas-levy-meneses",
        icon: "💼",
        url: "https://linkedin.com/in/jonas-levy-meneses",
      },
      {
        label: "Instagram",
        value: "@jonaslevy_m",
        icon: "📸",
        url: "https://instagram.com/jonaslevy_m",
      },
    ];

    return (
      <section id="contact" className="w-full pt-8 pb-8 pl-32 pr-32 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 ">Contato</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact) => (
            <div
              key={contact.label}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-neutral-200 p-4"
            >
              <div className="contact-details">
                <p className="font-bold">{contact.label}</p>
                {contact.url ? (
                  <a
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-neutral-600 mb-4"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className=" text-neutral-600 mb-4">{contact.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Contact;