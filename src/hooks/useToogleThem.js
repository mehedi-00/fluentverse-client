

export const setMood = (mood) => {
   return localStorage.setItem('mood', mood);
};
export const getMood = (mood) => {
   return localStorage.getItem(mood);
};