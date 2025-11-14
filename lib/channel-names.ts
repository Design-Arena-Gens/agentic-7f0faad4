type ChannelName = {
  title: string;
  description: string;
  tagline: string;
};

const ideas: ChannelName[] = [
  {
    title: "Neend Ki Kahaniyaan",
    description:
      "Soft-spoken bedtime parables blending classic panchatantra wisdom with fresh moral dilemmas.",
    tagline: "Har Raat Ek Nayi Seekh"
  },
  {
    title: "Chaandani Moral Stories",
    description:
      "Moonlit storytelling crafted for parents and dreamers seeking calm nights and clear lessons.",
    tagline: "Roshni Jo Dil Ko Chhoo Le"
  },
  {
    title: "Sukun Bhari Kahani",
    description:
      "Hypnotic Hindi narratives with cinematic soundscapes guiding listeners into gentle sleep.",
    tagline: "Suno, Seekho, Sote Jaao"
  },
  {
    title: "Sehaj Sapne Studios",
    description:
      "Signature sleep stories weaving gratitude practices, affirmations, and timeless morals.",
    tagline: "Raat Bhar Shanti"
  },
  {
    title: "Komal Katha Collective",
    description:
      "Community-driven bedtime series featuring shared listener experiences and mindful morals.",
    tagline: "Jahaan Kahani Dil Se Nikle"
  },
  {
    title: "Madhur Neend Kahaniya",
    description:
      "Elevated storytelling with heritage instruments and whispered narration for whole-family calm.",
    tagline: "Gehero Sapno Ka Saathi"
  }
];

export function getChannelNameIdeas(): ChannelName[] {
  return ideas;
}
