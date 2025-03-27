import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface CommandProps {
  command: string;
  title: string;
  description: string;
}

interface CommandCategory {
  name: string;
  emoji: string;
  color: string;
  description: string;
  icon: React.ReactNode;
  commands: CommandProps[];
}

// Kategorie komend na podstawie dostarczonego kodu help
const commandCategories: CommandCategory[] = [
  {
    name: "administracyjne",
    emoji: "🛡️",
    color: "#f04a4a",
    description: "Zarządzanie serwerem i użytkownikami",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    commands: [
      {
        command: "/ban",
        title: "Ban",
        description: "Banuje użytkownika z serwera"
      },
      {
        command: "/kick",
        title: "Kick",
        description: "Wyrzuca użytkownika z serwera"
      },
      {
        command: "/mute",
        title: "Mute",
        description: "Wycisza użytkownika na serwerze"
      },
      {
        command: "/unmute",
        title: "Unmute",
        description: "Anuluje wyciszenie użytkownika"
      },
      {
        command: "/unban",
        title: "Unban",
        description: "Odbanowuje użytkownika"
      },
      {
        command: "/clear",
        title: "Clear",
        description: "Usuwa określoną liczbę wiadomości"
      }
    ]
  },
  {
    name: "narzędzia",
    emoji: "🔧",
    color: "#4a9ff0",
    description: "Przydatne funkcje i ustawienia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    commands: [
      {
        command: "/ping",
        title: "Ping",
        description: "Sprawdza opóźnienie bota"
      },
      {
        command: "/help",
        title: "Help",
        description: "Wyświetla listę dostępnych komend"
      },
      {
        command: "/customcommands",
        title: "Custom Commands",
        description: "Zarządzanie własnymi komendami"
      },
      {
        command: "/premium-handler",
        title: "Premium",
        description: "Zarządzanie funkcjami premium"
      }
    ]
  },
  {
    name: "współpraca",
    emoji: "🤝",
    color: "#4af04a",
    description: "Reklama i współpraca międzyserwerowa",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    commands: [
      {
        command: "/wspolpraca",
        title: "Współpraca",
        description: "Zarządzanie współpracą międzyserwerową"
      },
      {
        command: "/autowspolpraca",
        title: "Auto Współpraca",
        description: "Automatyczna współpraca między serwerami"
      }
    ]
  },
  {
    name: "4fun",
    emoji: "🎮",
    color: "#f0c64a",
    description: "Gry i zabawy dla społeczności",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    commands: [
      {
        command: "/8ball",
        title: "8ball",
        description: "Magiczna kula do zadawania pytań"
      },
      {
        command: "/losowaliczba",
        title: "Losowa Liczba",
        description: "Generuje losową liczbę"
      },
      {
        command: "/mem",
        title: "Mem",
        description: "Wyświetla losowy mem"
      },
      {
        command: "/coinflip",
        title: "Coinflip",
        description: "Rzut monetą"
      },
      {
        command: "/kamiennozycepapier",
        title: "Kamień, Nożyce, Papier",
        description: "Gra w kamień, nożyce, papier"
      },
      {
        command: "/wybierz",
        title: "Wybierz",
        description: "Bot wybiera jedną z opcji"
      }
    ]
  },
  {
    name: "poziomy",
    emoji: "⭐",
    color: "#a64aff",
    description: "System poziomów i rankingu",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    commands: [
      {
        command: "/rank",
        title: "Rank",
        description: "Pokazuje twój aktualny poziom i ranking"
      },
      {
        command: "/ranking",
        title: "Ranking",
        description: "Pokazuje ranking użytkowników na serwerze"
      },
      {
        command: "/poziomy-ustawienia",
        title: "Poziomy Ustawienia",
        description: "Konfiguracja systemu poziomów"
      },
      {
        command: "/admin-poziom",
        title: "Admin Poziom",
        description: "Zarządzanie poziomami jako administrator"
      }
    ]
  },
  {
    name: "weryfikacja",
    emoji: "✅",
    color: "#00cc88",
    description: "System weryfikacji użytkowników",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    commands: [
      {
        command: "/weryfikacja-send",
        title: "Weryfikacja Send",
        description: "Wysyła panel weryfikacji użytkowników"
      },
      {
        command: "/weryfikacja-settings",
        title: "Weryfikacja Settings",
        description: "Konfiguracja systemu weryfikacji"
      }
    ]
  },
  {
    name: "tickety",
    emoji: "🎫",
    color: "#ff8c42",
    description: "System ticketów i wsparcia",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    commands: [
      {
        command: "/ticketpanel",
        title: "Ticket Panel",
        description: "Wysyła panel do tworzenia ticketów"
      },
      {
        command: "/ticket-settings",
        title: "Ticket Settings",
        description: "Konfiguracja systemu ticketów"
      },
      {
        command: "/close-ticket",
        title: "Close Ticket",
        description: "Zamyka aktywny ticket"
      }
    ]
  },
  {
    name: "przywitania",
    emoji: "👋",
    color: "#ee82ee",
    description: "System powitalny dla nowych członków",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF66C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
      </svg>
    ),
    commands: [
      {
        command: "/przywitanie",
        title: "Przywitanie",
        description: "Konfiguracja systemu powitalnego"
      }
    ]
  }
];

const CommandItem = ({ command, title, description }: CommandProps) => {
  return (
    <motion.div 
      whileHover={{ x: 8 }}
      transition={{ duration: 0.3 }}
      className="flex items-start p-3 rounded-lg hover:bg-[#FF66C4]/10"
    >
      <code className="bg-black text-[#FF66C4] px-2 py-1 rounded font-mono text-sm mr-3">{command}</code>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default function Commands() {
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState(0);
  const categoriesPerPage = 2;
  const totalGroups = Math.ceil(commandCategories.length / categoriesPerPage);
  
  const getDisplayedCategories = () => {
    const startIndex = selectedCategoryGroup * categoriesPerPage;
    return commandCategories.slice(startIndex, startIndex + categoriesPerPage);
  };
  
  const handlePreviousGroup = () => {
    setSelectedCategoryGroup(prev => (prev > 0 ? prev - 1 : totalGroups - 1));
  };
  
  const handleNextGroup = () => {
    setSelectedCategoryGroup(prev => (prev < totalGroups - 1 ? prev + 1 : 0));
  };

  return (
    <section id="commands" className="py-16 bg-gradient-to-b from-black to-black/95 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
            Potężne <span className="bg-gradient-to-r from-[#FF66C4] to-[#FF99D6] bg-clip-text text-transparent">Komendy</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Visual oferuje intuicyjne komendy, które ulepszą twoje doświadczenie na Discordzie.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Command Categories */}
          {getDisplayedCategories().map((category, categoryIndex) => (
            <motion.div 
              key={`${selectedCategoryGroup}-${category.name}`}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: categoryIndex % 2 === 0 ? -30 : 30 }}
              transition={{ duration: 0.5 }}
              className="bg-[#1A1A1A] rounded-xl p-6 border border-[#FF66C4]/20"
              style={{ borderColor: `${category.color}20` }}
            >
              <h3 className="text-xl font-poppins font-semibold mb-4 flex items-center">
                <div className="w-10 h-10 bg-[#FF66C4]/20 rounded-lg flex items-center justify-center mr-3" 
                  style={{ backgroundColor: `${category.color}20` }}>
                  {category.icon}
                </div>
                <span className="capitalize">
                  {category.emoji} {category.name}
                </span>
              </h3>
              
              <p className="text-gray-400 mb-4">{category.description}</p>
              
              <div className="space-y-3 mt-6">
                {category.commands.slice(0, 4).map((cmd, index) => (
                  <CommandItem key={index} {...cmd} />
                ))}
              </div>
            </motion.div>
          ))}
          
          {/* Category Navigation */}
          <div className="lg:col-span-2 flex justify-center items-center gap-4 mt-8">
            <Button 
              variant="outline"
              size="icon"
              onClick={handlePreviousGroup}
              className="border-2 border-[#FF66C4] text-white hover:bg-[#FF66C4]/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalGroups }, (_, i) => (
                <Button 
                  key={i}
                  variant={selectedCategoryGroup === i ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategoryGroup(i)}
                  className={`
                    ${selectedCategoryGroup === i 
                      ? 'bg-[#FF66C4] hover:bg-[#FF99D6]' 
                      : 'border-2 border-[#FF66C4] text-white hover:bg-[#FF66C4]/10'}
                    w-10 h-10 rounded-full font-poppins font-semibold
                  `}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            
            <Button 
              variant="outline"
              size="icon"
              onClick={handleNextGroup}
              className="border-2 border-[#FF66C4] text-white hover:bg-[#FF66C4]/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
          
          {/* View All Commands Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-2 text-center mt-6"
          >
            <Button 
              variant="outline"
              className="px-6 py-6 border-2 border-[#FF66C4] text-white hover:bg-[#FF66C4]/10 font-poppins font-semibold transition-all duration-300"
            >
              Wszystkie Komendy
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
