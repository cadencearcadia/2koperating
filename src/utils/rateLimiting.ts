const RATE_LIMIT_DURATION = 60000; // 1 minute in milliseconds
const MAX_ATTEMPTS = 3;

interface RateLimitEntry {
  attempts: number;
  timestamp: number;
}

export const checkRateLimit = (formId: string): boolean => {
  const now = Date.now();
  const rateLimits = JSON.parse(localStorage.getItem('rateLimits') || '{}');
  
  // Clean up old entries
  Object.keys(rateLimits).forEach(key => {
    if (now - rateLimits[key].timestamp > RATE_LIMIT_DURATION) {
      delete rateLimits[key];
    }
  });

  const entry = rateLimits[formId] || { attempts: 0, timestamp: now };
  
  if (now - entry.timestamp > RATE_LIMIT_DURATION) {
    entry.attempts = 1;
    entry.timestamp = now;
  } else {
    entry.attempts++;
  }

  rateLimits[formId] = entry;
  localStorage.setItem('rateLimits', JSON.stringify(rateLimits));

  return entry.attempts <= MAX_ATTEMPTS;
};