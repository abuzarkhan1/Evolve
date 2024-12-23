import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight";
import { FaPlus, FaMinus } from "react-icons/fa6";

type FAQType = {
  id: number;
  question: string;
  answer: string;
};

interface FAQItemProps {
  faq: FAQType;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

const faqs: FAQType[] = [
  {
    id: 1,
    question: "What development methodologies do you follow?",
    answer:
      "We employ Agile methodologies with iterative development cycles, ensuring regular client communication and flexible adaptation to changing requirements. Our sprints typically last 2 weeks, with daily stand-ups and bi-weekly client demos.",
  },
  {
    id: 2,
    question: "How do you handle project timelines and deadlines?",
    answer:
      "We create detailed project roadmaps with clear milestones and deliverables. Our team uses advanced project management tools to track progress, and we provide regular updates through a client dashboard. We build in buffer time for revisions and unforeseen challenges.",
  },
  {
    id: 3,
    question: "What makes your development approach unique?",
    answer:
      "We combine cutting-edge technology with robust development practices. Each project benefits from our full-stack expertise, cloud-native approach, and emphasis on scalable, maintainable code. We also prioritize security and performance optimization from day one.",
  },
  {
    id: 4,
    question: "How do you ensure project security and data privacy?",
    answer:
      "Security is built into every phase of development. We follow OWASP guidelines, implement encryption protocols, and conduct regular security audits. All our solutions comply with relevant data protection regulations like GDPR and CCPA.",
  },
];

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-white/10 rounded-lg overflow-hidden backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300"
    >
      <motion.button
        onClick={() => onToggle(faq.id)}
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-full p-6 text-left bg-black/20 flex justify-between items-center"
      >
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-purple-400 ml-4"
        >
          {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4 },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="p-6 text-gray-300 leading-relaxed bg-black/10"
            >
              {faq.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = React.useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20">
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <TextGenerateEffect
            words="Frequently Asked Questions"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          />
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg md:text-xl text-blue-400 font-semibold"
          >
            Get answers to common questions about our services and process
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={handleToggle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
