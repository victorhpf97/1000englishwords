import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


const LS_KEY = 'listening_trainer_learned_v1';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  title = 'dragon-listeaning';


    // só 5 palavras para teste
  words: string[] = [
  "all", "and", "boy", "car", "cat", "day", "end", "family", "home", "it", "man", "name", "one", "people", "read", "school", "speak", "the", "this", "you", "ask", "book", "can", "dog", "eye", "first", "go", "he", "child", "in", "learn", "morning", "open", "play", "question", "room", "say", "start", "today", "word", "about", "at", "brother", "drink", "easy", "father", "girl", "help", "chair", "know", "my", "new", "paper", "please", "rich", "she", "show", "son", "they", "what", "always", "be", "body", "careful", "cry", "door", "everything", "face", "her", "if", "many", "no", "pen", "place", "road", "stop", "student", "two", "want", "where", "answer", "between", "clear", "country", "dance", "do", "each", "friend", "his", "job", "life", "more", "park", "person", "ready", "second", "soon", "that", "we", "why", "able", "before", "but", "clean", "close", "dream", "eight", "for", "hand", "inside", "now", "or", "picture", "river", "ship", "shop", "sit", "table", "very", "write", "air", "black", "cinema", "daughter", "eat", "from", "good", "head", "cheese", "important", "land", "money", "pay", "problem", "run", "same", "see", "send", "thing", "work", "any", "as", "better", "cold", "come", "doctor", "find", "game", "idea", "kind", "live (v)", "make", "peace", "popular", "right", "small", "so", "some", "there", "wait", "again", "back", "could", "document", "egg", "fire", "give", "chance", "information", "light", "may", "often", "prefer", "put", "red", "stone", "such", "think", "understand", "visit", "around", "best", "call", "cut", "dinner", "down", "explain", "get", "interesting", "long", "move", "out", "page", "reach", "rest", "set", "should", "stand", "time", "up", "age", "because", "big", "camera", "city", "dress", "evening", "free", "have", "ill", "like", "mother", "old", "police", "remember", "street", "study", "teacher", "voice", "water", "also", "box", "class", "difficult", "drive", "food", "great", "happy", "change", "juice", "meet", "need", "pretty", "quite", "real", "sad", "spring", "star", "take", "yes", "action", "alone", "breakfast", "continue", "dead", "enjoy", "full", "garden", "house", "journey", "much", "nothing", "phone", "price", "result", "sister", "sun", "tell", "view", "with", "against", "bus", "company", "desert (n)", "expensive", "flower", "green", "church", "impossible", "leave", "month", "on", "plan", "possible", "return", "save", "sea", "something", "together", "woman", "anything", "army", "bad", "cover", "culture", "decision", "example", "feel", "how", "island", "member", "next", "position", "present (adj)", "record (n)", "sleep", "sweet", "try", "under", "world", "after", "bed", "buy", "catch", "corner", "distance", "education", "fast", "here", "interest", "letter", "never", "part", "president", "round", "several", "sound", "story", "talk", "week", "almost", "bread", "control", "dear", "every", "few", "gold", "chief", "invite", "late", "most", "only", "product", "public", "receive", "sorry", "strong", "then", "too", "way", "across", "art", "bring", "carry", "confirm", "die", "east", "group", "hope", "industry", "look", "must", "own", "personal", "reason", "service", "shall", "stay", "their", "wife", "away", "beautiful", "care", "cost", "deep", "enough", "fight", "garage", "into", "keep", "miss", "other", "player", "rather", "remain", "side", "south", "true", "use", "who", "already", "become", "cause", "certain", "describe", "dry", "expect", "fact", "hard", "include", "let", "moment", "power", "provide", "report", "seat", "single", "system", "through", "which", "apple", "blue", "clock", "colour", "different", "earth", "film", "glad", "hour", "just", "love", "number", "pencil", "quick", "rain", "simple", "summer", "town", "tree", "window", "address", "building", "computer", "cross", "desk", "ear", "fish", "glass", "ice", "key", "minute (n)", "office", "parent", "post", "rock", "search", "sport", "tea", "valley", "walk", "airport", "baby", "card", "central", "direction", "dollar", "fruit", "gift", "high", "illness", "milk", "not", "piece", "protect", "race", "since", "slow", "smile", "ticket", "well", "accident", "blood", "business", "during", "even", "floor", "general", "choose", "inform", "little", "meeting", "order", "party", "pink", "reply", "snow", "sugar", "travel", "virus", "watch", "another", "believe", "both", "crazy", "cup", "decide", "ever", "field", "heart", "imagine", "line", "meat", "over", "pull", "ring", "sell", "similar", "speed", "than", "your", "above", "begin", "century", "consider", "dangerous", "dark", "exchange", "government", "hear", "jump", "material", "near", "past", "produce", "remove", "secret", "song", "television", "value", "when", "arm", "behind", "case", "collect", "draw", "examine", "fall", "grow", "immediately", "low", "mind", "off", "pass", "radio", "shoe", "station", "sure", "test", "usual", "while", "ago", "along", "bear", "condition", "direct", "edge", "fine", "half", "chicken", "increase", "magazine", "nature", "plate", "poor", "respect", "sharp", "sometimes", "still", "tall", "would", "add", "among", "built", "common", "depend", "early", "fly", "happen", "check", "introduce", "less", "mark", "patient", "perhaps", "rise", "sense", "short", "state", "turn", "will", "act", "appear", "break", "course", "court", "discuss", "effect", "form", "hold", "insect", "mean", "once", "purpose", "really", "ride", "situation", "success", "though", "upon", "war", "afternoon", "busy", "coffee", "detail", "especially", "finish", "ground", "holiday", "choice", "kitchen", "lesson", "music", "orange", "perfect (adj)", "request", "season", "sick", "tomorrow", "welcome", "yesterday", "agree", "bridge", "cake", "customer", "date", "enter", "future", "gentleman", "hair", "image", "language", "market", "plane", "private", "restaurant", "size", "sky", "smart", "thank", "weather", "actor", "bottle", "cloth", "coat", "destroy", "everywhere", "finger", "guide", "improve", "knife", "large", "mistake", "ocean", "plant", "repeat", "salt", "special", "teach", "uncle", "winter", "angry", "article", "build", "dirty", "except", "famous", "gas", "hotel", "cheap", "interview", "moon", "nice", "prepare", "prison", "rice", "seem", "skirt", "strange", "train", "warm", "account", "bird", "cloud", "comfortable", "damage", "dust", "exercise", "favourite", "hospital", "joke", "message", "night", "paint", "pleasure", "relationship", "science", "serious", "spend", "tired", "wrong", "amount", "bank", "brown", "crowd", "deal", "engine", "follow", "chocolate", "individual", "left", "meal", "oil", "pain", "probably", "replace", "society", "square", "step", "temperature", "university", "accept", "advance", "bag", "captain", "centre", "demand", "enemy", "factory", "hungry", "illegal", "law", "nose", "petrol", "proud", "responsible", "store", "successful", "swim", "top", "win", "available", "boat", "borrow", "coast", "cream", "design", "expression", "farm", "history", "injure", "map", "obtain", "peaceful", "practise", "recently", "shape", "silver", "smoke", "touch", "wash", "advantage", "attack", "butter", "club", "college", "degree", "escape", "gate", "independent", "listen", "marry", "object", "path", "quiet", "refuse", "subject (n)", "supply", "taste", "usually", "vegetable", "arrange", "below", "cigarette", "cottage", "department", "earn", "front", "gentle", "hat", "instrument", "machine", "newspaper", "parcel", "religion", "repair", "serve", "shoulder", "trip", "village", "wall", "arrive", "born", "clothes", "correct", "double", "English", "forget", "goal", "hate", "kill", "last", "main", "pair", "promise", "regular", "somewhere", "space", "these", "useful", "without", "animal", "beer", "calm", "copy", "dish", "express", "foreign", "guess", "husband", "lie", "mine", "opinion", "passenger", "press", "rule", "sign", "support", "those", "wonderful", "year", "afraid", "board", "circle", "count", "death", "discover", "funny", "guest", "horse", "lake", "modern", "necessary", "plenty", "profit", "reduce", "share", "steal", "trust", "wish", "young", "admire", "allow", "battle", "climb", "complete", "divide", "effort", "fresh", "hole", "indeed", "marriage", "outside", "pleasant", "point", "recent", "secretary", "sing", "soft", "third", "various", "adventure", "although", "bottom", "coin", "comfort", "drop", "equal", "gun", "intelligent", "join", "laugh", "middle", "perform", "plain", "row", "soldier", "surface", "thick", "until", "wild", "attempt", "bill", "breathe", "cook", "defend", "fat", "grey", "hot", "character", "import", "lose", "mountain", "operation", "prize", "risk", "safe", "suddenly", "suit", "type", "wood", "area", "asleep", "bath", "careless", "delay", "event", "foot", "hide", "chain", "international", "match", "nervous", "pity", "prove", "raise", "shut", "smell", "straight", "trade", "variety", "admit", "attend", "branch", "coal", "consist", "declare", "exact", "farmer", "instead", "jacket", "leg", "metal", "opposite", "pound", "roll", "score", "shoot", "speech", "toilet", "whose", "attitude", "brave", "contain", "doubt", "experience", "flat", "guard", "heavy", "charge", "iron", "medicine", "noise", "politics", "pour", "rush", "smooth", "spread", "suggest", "trouble", "west", "average", "belong", "certainly", "crime", "duty", "either", "fail", "health", "influence", "leader", "measure", "offer", "pile", "regard", "rough", "series", "spoil", "spot", "thin", "vote"
  ]

  queue: string[] = [];
  current: string | null = null;
  answer = new FormControl('');
  state = 'idle';

  
  audio?: HTMLAudioElement;

  // métricas
  attempts = 0;
  corrects = 0;
  streak = 0;

  // preferências
  trainOnlyUnlearned = signal(true);

  // progresso persistido
  learned = signal<Set<string>>(new Set());

  // computados
  unlearnedWords = computed(() =>
    this.words.filter(w => !this.learned().has(this.normalize(w)))
  );
  learnedCount = computed(() => this.learned().size);
  remainingCount = computed(() => this.unlearnedWords().length);

  revealed = false;

showAnswer() {
  this.revealed = true;
}

  constructor() {
    this.loadProgress();
    this.rebuildQueue();
    this.nextWord();
  }

  // ---------- util ----------
  private shuffle<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  private normalize(word: string): string {
    return word
      .split('(')[0]
      .trim()
      .split(' ')[0]
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[^a-z]/g, '');
  }

  private audioUrl(word: string): string {
    const cleaned = this.normalize(word);
    return `https://www.1000englishwords.com/wp-content/uploads/2021/05/${encodeURIComponent(cleaned)}.mp3`;
  }

  // ---------- áudio ----------
  play() {
    if (!this.current) return;
    if (this.audio) this.audio.pause();
    this.audio = new Audio(this.audioUrl(this.current));
    this.state = 'playing';
    this.audio.play().catch(err => console.warn('Erro ao tocar áudio:', err));
  }

  // ---------- fila / fluxo ----------
  private pool(): string[] {
    return this.trainOnlyUnlearned() ? this.unlearnedWords() : this.words;
  }

  private rebuildQueue() {
    const p = this.pool();
    this.queue = this.shuffle([...p]);
  }

  nextWord() {
     this.revealed = false;   
    this.answer.setValue('');
    if (this.queue.length === 0) {
      const p = this.pool();
      if (p.length === 0) {
        this.current = null;
        this.state = 'idle';
        return;
      }
      this.rebuildQueue();
    }
    this.current = this.queue.pop() || null;
    setTimeout(() => this.play(), 150);
  }

  check() {
    if (!this.current) return;
    const ok = this.normalize(this.answer.value || '') === this.normalize(this.current);
    this.attempts++;
    if (ok) {
      this.corrects++;
      this.streak++;

      // marca como aprendido e salva
      this.learned.update(prev => {
        const next = new Set(prev);
        next.add(this.normalize(this.current!));
        return next;
      });
      this.saveProgress();

      this.state = 'correct';
      setTimeout(() => this.nextWord(), 500);
    } else {
      this.streak = 0;
      this.state = 'wrong';
      if (this.current) this.queue.unshift(this.current);
    }
  }

  skip() {
    this.nextWord();
  }

  // ---------- persistência ----------
  private saveProgress() {
    try {
      const arr = Array.from(this.learned());
      localStorage.setItem(LS_KEY, JSON.stringify(arr));
    } catch (e) {
      console.warn('Falha ao salvar progresso:', e);
    }
  }

  private loadProgress() {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const arr: string[] = JSON.parse(raw);
        this.learned.set(new Set(arr));
      }
    } catch (e) {
      console.warn('Falha ao carregar progresso:', e);
      this.learned.set(new Set());
    }
  }

  resetProgress() {
    this.learned.set(new Set());
    localStorage.removeItem(LS_KEY);
    this.rebuildQueue();
    if (!this.current) this.nextWord();
  }

  toggleMode(checked: boolean) {
    this.trainOnlyUnlearned.set(checked);
    this.rebuildQueue();
    if (this.pool().length === 0) {
      this.current = null;
      this.state = 'idle';
    }
  }
}