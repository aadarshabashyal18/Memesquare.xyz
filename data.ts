import { Template, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Templates' },
  { id: 'reaction', label: 'Reaction' },
  { id: 'classic', label: 'Classic' },
  { id: 'indian', label: 'Indian' },
  { id: 'nepali', label: 'Nepali' },
  { id: 'bollywood', label: 'Bollywood' },
  { id: 'student', label: 'Student Life' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'viral', label: 'Viral' },
  { id: 'politics', label: 'Politics' },
  { id: 'movies', label: 'Movies & TV' },
  { id: 'cricket', label: 'Cricket' },
  { id: 'generated', label: 'Random' },
];

export const EMOJIS = [
  '😂', '😭', '😎', '🔥', '💀', '💯', '❤️', '🤔', '🤡', '💩',
  '👀', '🙌', '🚀', '✨', '🎉', '😡', '😱', '🥳', '🤯', '👋',
  '👍', '👎', '💪', '🙏', '🧠', '🕶️', '🧢', '🐶', '🐱', '🍕',
  '🍔', '🍟', '🍻', '🍷', '💰', '💸', '💎', '🌈', '☀️', '🌙',
  '⚡', '❄️', '⭐', '🚫', '✅', '❌', '⚠️', '🚩', '🧊', '🌶️',
  '🇳🇵', '🇮🇳', '🙏', '🥘', '🛺', '🏏', '🕉️', '🏔️', '🥟', '🤳'
];

// 1. Authentic Meme Templates (Classics & Viral)
// These use specific IDs from memegen.link, so they always match perfectly.
const MEME_IDS = [
  { id: 'drake', name: 'Drake Hotline Bling' },
  { id: 'tuxedo-pooh', name: 'Tuxedo Winnie the Pooh' },
  { id: 'expanding-brain', name: 'Expanding Brain' },
  { id: 'galaxy-brain', name: 'Galaxy Brain' },
  { id: 'woman-yelling', name: 'Woman Yelling At Cat' },
  { id: 'distracted-boyfriend', name: 'Distracted Boyfriend' },
  { id: 'left-exit-12-off-ramp', name: 'Left Exit 12 Off Ramp' },
  { id: 'two-buttons', name: 'Two Buttons' },
  { id: 'change-my-mind', name: 'Change My Mind' },
  { id: 'panik-kalm-panik', name: 'Panik Kalm Panik' },
  { id: 'buff-doge-vs-cheems', name: 'Buff Doge vs. Cheems' },
  { id: 'monkey-puppet', name: 'Monkey Puppet' },
  { id: 'clown-applying-makeup', name: 'Clown Applying Makeup' },
  { id: 'gru-plan', name: 'Gru Plan' },
  { id: 'bernie-i-am-once-again-asking-for-your-support', name: 'Bernie Asking Support' },
  { id: 'unpopular-opinion', name: 'Unpopular Opinion Swords' },
  { id: 'epic-handshake', name: 'Epic Handshake' },
  { id: 'is-this-a-pigeon', name: 'Is This A Pigeon' },
  { id: 'waiting-skeleton', name: 'Waiting Skeleton' },
  { id: 'mocking-spongebob', name: 'Mocking Spongebob' },
  { id: 'boardroom-meeting-suggestion', name: 'Boardroom Meeting Suggestion' },
  { id: 'sleeping-shaq', name: 'Sleeping Shaq' },
  { id: 'they-dont-know', name: 'They Dont Know Party' },
  { id: 'trade-offer', name: 'Trade Offer' },
  { id: 'disastergirl', name: 'Disaster Girl' },
  { id: 'success', name: 'Success Kid' },
  { id: 'bad', name: 'You Should Feel Bad' },
  { id: 'blb', name: 'Bad Luck Brian' },
  { id: 'firsttry', name: 'First Try Lego Batman' },
  { id: 'fry', name: 'Futurama Fry' },
  { id: 'grumpycat', name: 'Grumpy Cat' },
  { id: 'harold', name: 'Hide the Pain Harold' },
  { id: 'kermit', name: 'Kermit Tea' },
  { id: 'philosoraptor', name: 'Philosoraptor' },
  { id: 'spiderman', name: 'Spiderman Pointing' },
  { id: 'toohigh', name: 'The Rent Is Too High' },
  { id: 'trollface', name: 'Troll Face' },
  { id: 'trump', name: 'Trump Bill Signing' },
  { id: 'wonka', name: 'Condescending Wonka' },
  { id: 'yodawg', name: 'Xzibit Yo Dawg' },
  { id: 'buzz', name: 'X, X Everywhere' },
  { id: 'cheems', name: 'Cheems' },
  { id: 'rollsafe', name: 'Roll Safe (Think About It)' },
  { id: 'sad-abloh', name: 'Sad Virigil Abloh' },
  { id: 'sarcasticbear', name: 'Sarcastic Bear' },
  { id: 'sk', name: 'Skeptical Third World Kid' },
  { id: 'spongebob', name: 'Spongebob Ight Imma Head Out' },
  { id: 'yuno', name: 'Y U NO' },
  { id: 'oprah', name: 'Oprah You Get A' },
  { id: 'patrick', name: 'Push It Somewhere Else Patrick' },
  { id: 'sohot', name: 'So Hot Right Now' },
  { id: 'stonks', name: 'Stonks' },
  { id: 'marked-safe', name: 'Marked Safe From' },
  { id: 'bernie', name: 'Bernie Sanders Mittens' },
  { id: 'inigo', name: 'Inigo Montoya' },
  { id: 'mordor', name: 'One Does Not Simply' },
  { id: 'facepalm', name: 'Picard Facepalm' }
];

const getMemegenUrl = (id: string) => `https://api.memegen.link/images/${id}.png`;

// 2. Reaction Archetypes (Stock Photos acting as memes)
const REACTION_VARIANTS = [
  { name: 'Reaction: Disgusted Man', keywords: 'disgusted,man' },
  { name: 'Reaction: Excited Woman', keywords: 'excited,woman' },
  { name: 'Reaction: Angry Boss', keywords: 'angry,boss' },
  { name: 'Reaction: Confused Person', keywords: 'confused,person' },
  { name: 'Reaction: Crying Child', keywords: 'crying,child' },
  { name: 'Reaction: Laughing Group', keywords: 'laughing,people' },
  { name: 'Reaction: Shocked Face', keywords: 'shocked,face' },
  { name: 'Reaction: Thinking Hard', keywords: 'thinking,man' },
  { name: 'Reaction: Bored at Work', keywords: 'bored,office' },
  { name: 'Reaction: Facepalm', keywords: 'facepalm,man' },
  { name: 'Reaction: Success Moment', keywords: 'success,man' },
  { name: 'Reaction: Refusing (No)', keywords: 'stop,hand' },
  { name: 'Reaction: Thumbs Up', keywords: 'thumbsup,happy' },
  { name: 'Reaction: Skeptical Look', keywords: 'skeptical,face' },
  { name: 'Reaction: Surprised', keywords: 'surprised,person' }
];

// 3. Cultural Stock Photo Archetypes (Indian/Nepali/Student/Corporate)
// UPDATED: Used descriptive titles that match the keywords to ensure consistency.
// We avoid specific character names (like "Virus" or "Kaleen Bhaiya") because the stock photo API cannot guarantee those specific actors.
const CULTURAL_ARCHETYPES = [
  // --- INDIAN POP CULTURE & BOLLYWOOD ---
  { name: 'Indian Corporate Judge', keywords: 'indian,man,suit', category: 'bollywood' }, // Replaces "Shark Tank Judge"
  { name: 'Strict Indian Professor', keywords: 'indian,teacher,glasses', category: 'bollywood' }, // Replaces "Principal Virus"
  { name: 'Indian Man in Kurta', keywords: 'indian,man,kurta', category: 'bollywood' }, // Replaces "Kaleen Bhaiya"
  { name: 'Funny Man with Sunglasses', keywords: 'indian,sunglasses,funny', category: 'bollywood' }, // Replaces "Majnu"
  { name: 'Romantic Indian Pose', keywords: 'indian,couple,love', category: 'bollywood' },
  { name: 'Indian Police Officer', keywords: 'indian,police', category: 'bollywood' },
  { name: 'Desi Groom', keywords: 'indian,groom', category: 'indian' },
  { name: 'Desi Bride', keywords: 'indian,bride', category: 'indian' },

  // --- INDIAN DAILY LIFE ---
  { name: 'Angry Indian Mother', keywords: 'indian,woman,sari', category: 'indian' },
  { name: 'Strict Indian Father', keywords: 'indian,man,portrait', category: 'indian' },
  { name: 'Gossiping Aunties', keywords: 'indian,women,talking', category: 'indian' },
  { name: 'Eating Pani Puri', keywords: 'panipuri,eating', category: 'indian' },
  { name: 'Crowded Train', keywords: 'train,crowd,india', category: 'indian' },
  { name: 'Traffic Jam', keywords: 'traffic,jam,india', category: 'indian' },
  { name: 'Auto Rickshaw Driver', keywords: 'autorickshaw,driver', category: 'indian' },
  { name: 'Vegetable Market', keywords: 'indian,market', category: 'indian' },
  { name: 'Drinking Chai', keywords: 'drinking,tea,india', category: 'indian' },

  // --- NEPALI CULTURE & VIRAL ---
  { name: 'Cool Nepali Guy', keywords: 'nepali,man,sunglasses', category: 'nepali' },
  { name: 'Nepali Politician Speaking', keywords: 'nepal,man,speech', category: 'nepali' },
  { name: 'Nepali Villager', keywords: 'nepali,villager', category: 'nepali' },
  { name: 'Tired Hiker', keywords: 'trekker,tired,himalaya', category: 'nepali' },
  { name: 'Dusty Road', keywords: 'dusty,road,nepal', category: 'nepali' },
  { name: 'Motorbike Rider', keywords: 'motorbike,nepal', category: 'nepali' },
  { name: 'Eating Momos', keywords: 'eating,dumplings', category: 'nepali' },
  { name: 'Airport Queue', keywords: 'airport,queue', category: 'nepali' },
  { name: 'Family Tika', keywords: 'nepal,family,festival', category: 'nepali' },
  { name: 'Cultural Dance Group', keywords: 'nepal,dance', category: 'nepali' },

  // --- STUDENT LIFE ---
  { name: 'Stressed Student', keywords: 'student,stressed', category: 'student' },
  { name: 'Tired Engineer', keywords: 'engineer,tired', category: 'student' },
  { name: 'Mess Food', keywords: 'cafeteria,food,bad', category: 'student' },
  { name: 'Classroom Backbenchers', keywords: 'students,classroom', category: 'student' },
  { name: 'Angry Teacher', keywords: 'teacher,angry', category: 'student' },
  { name: 'Scared Student', keywords: 'scared,boy', category: 'student' },
  { name: 'Laughing Students', keywords: 'students,laughing', category: 'student' },

  // --- CORPORATE / OFFICE ---
  { name: 'Tired Office Guy', keywords: 'man,computer,tired', category: 'corporate' },
  { name: 'Fake Office Laugh', keywords: 'business,people,laughing', category: 'corporate' },
  { name: 'Monday Morning', keywords: 'tired,morning,coffee', category: 'corporate' },
  { name: 'Happy Friday', keywords: 'happy,office,leaving', category: 'corporate' },
  { name: 'Office Celebration', keywords: 'office,party', category: 'corporate' },
  { name: 'Awkward Video Call', keywords: 'laptop,webcam', category: 'corporate' },
  { name: 'Relaxed Boss', keywords: 'relaxed,boss', category: 'corporate' },

  // --- CRICKET ---
  { name: 'Angry Cricketer', keywords: 'cricket,player,angry', category: 'cricket' },
  { name: 'Disappointed Fan', keywords: 'fan,sad,stadium', category: 'cricket' },
  { name: 'Cool Batsman', keywords: 'cricket,batsman', category: 'cricket' },
  { name: 'Umpire Signaling', keywords: 'cricket,umpire', category: 'cricket' },
  { name: 'Street Cricket', keywords: 'kids,playing,cricket', category: 'cricket' }
];

const getRealPhotoUrl = (keywords: string, lock: number) => 
  `https://loremflickr.com/600/400/${keywords.replace(/ /g, ',')}/all?lock=${lock}`;

// --- GENERATION LOGIC ---

const generateTemplates = (total: number): Template[] => {
  const templates: Template[] = [];
  let counter = 1;

  // 1. Authenticated Classics (Real Memes)
  MEME_IDS.forEach((m) => {
    templates.push({
      id: m.id,
      name: m.name,
      url: getMemegenUrl(m.id),
      width: 600,
      height: 600,
      category: 'classic',
      tags: ['classic', 'viral', 'reaction', m.id]
    });
  });

  // 2. Generate ~1,500 Specific "Reaction" Templates
  for (let i = 0; i < 1500; i++) {
    const variant = REACTION_VARIANTS[Math.floor(Math.random() * REACTION_VARIANTS.length)];
    const uniqueLock = counter++;
    
    templates.push({
      id: `reaction-${counter}`,
      name: `${variant.name} #${i + 1}`,
      url: getRealPhotoUrl(variant.keywords, uniqueLock),
      width: 600,
      height: 400,
      category: 'reaction',
      tags: ['reaction', 'emotion', 'real', ...variant.keywords.split(',')]
    });
  }

  // 3. Generate Cultural & Stock Variations
  while (templates.length < total) {
    const archetype = CULTURAL_ARCHETYPES[Math.floor(Math.random() * CULTURAL_ARCHETYPES.length)];
    const uniqueLock = counter++;
    
    templates.push({
      id: `stock-${counter}`,
      name: `${archetype.name} #${counter}`,
      url: getRealPhotoUrl(archetype.keywords, uniqueLock),
      width: 600,
      height: 400,
      category: archetype.category,
      tags: [archetype.category, ...archetype.keywords.split(','), 'generated']
    });
  }

  return templates;
};

// Generate 11,000+ templates total
export const TEMPLATES = generateTemplates(11050);
